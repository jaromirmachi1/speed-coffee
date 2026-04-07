"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import StripePaymentForm from "@/components/checkout/StripePaymentForm";
import { useCart } from "@/contexts/CartContext";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import {
  typography,
  fontWeights,
} from "@/lib/constants/typography";

const SHIPPING_CZK = 89;

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

function priceToCzk(priceStr: string): number {
  const num = parseFloat(priceStr.replace(/[^\d.,]/g, "").replace(",", ".")) || 0;
  return priceStr.includes("€") ? Math.round(num * 27) : num;
}

function formatCzk(value: number): string {
  return `${value} Kč`;
}

function parsePaymentIntentId(clientSecret: string): string | null {
  const match = clientSecret.match(/^(pi_[^_]+)_secret_/);
  return match?.[1] ?? null;
}

export default function ShippingPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const stripeConfirmRef = useRef<{ confirm: () => Promise<{ error?: { message?: string } }> } | null>(null);
  const router = useRouter();
  const { items, cartCount, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "delivery" | "bank">("stripe");
  const [stripeClientSecret, setStripeClientSecret] = useState<string | null>(null);
  const [returnUrl, setReturnUrl] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") setReturnUrl(`${window.location.origin}/checkout/success`);
  }, []);

  const subtotalCzk = items.reduce((sum, item) => sum + priceToCzk(item.price) * item.quantity, 0);
  const totalCzk = subtotalCzk + SHIPPING_CZK;

  // Reset Stripe client secret when cart total changes so amount stays correct
  useEffect(() => {
    setStripeClientSecret(null);
  }, [totalCzk]);

  // Create PaymentIntent when user selects Stripe and we have items
  useEffect(() => {
    if (paymentMethod !== "stripe" || !items.length || stripeClientSecret) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: items.map((item) => ({
              id: item.id,
              title: item.title,
              price: item.price,
              quantity: item.quantity,
            })),
          }),
        });
        const data = await res.json();
        if (!cancelled && data.clientSecret) setStripeClientSecret(data.clientSecret);
      } catch {
        // ignore
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [paymentMethod, items, stripeClientSecret]);

  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)",
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });
  useSpeedCoffeeMotion(rootRef, true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cartCount === 0) return;
    const formData = new FormData(e.currentTarget);
    const customer = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      street: String(formData.get("street") || "").trim(),
      city: String(formData.get("city") || "").trim(),
      postalCode: String(formData.get("postalCode") || "").trim(),
      country: String(formData.get("country") || "").trim(),
    };
    const normalizedItems = items.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    }));

    if (paymentMethod === "stripe") {
      if (!stripeClientSecret || !stripePromise) {
        alert("Payment form is still loading. Please wait.");
        return;
      }
      const paymentIntentId = parsePaymentIntentId(stripeClientSecret);
      if (!paymentIntentId) {
        alert("Payment intent is invalid. Please refresh and try again.");
        return;
      }
      setIsSubmitting(true);
      try {
        const attachRes = await fetch("/api/attach-payment-data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            paymentIntentId,
            customer,
            items: normalizedItems,
          }),
        });
        if (!attachRes.ok) {
          const attachData = await attachRes.json().catch(() => ({}));
          throw new Error(attachData.error || "Failed to prepare payment data.");
        }

        const result = await stripeConfirmRef.current?.confirm();
        if (result?.error) {
          setIsSubmitting(false);
          alert(result.error.message || "Payment failed. Please try again.");
          return;
        }
        // Success: Stripe redirects to return_url
      } catch (err) {
        console.error(err);
        setIsSubmitting(false);
        alert(err instanceof Error ? err.message : "Payment could not be completed. Try again.");
      }
      return;
    }

    // Pay on delivery or bank transfer: create pending order in CMS
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/orders/manual", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethod,
          customer,
          items: normalizedItems,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.orderNumber) {
        throw new Error(data?.error || "Could not create order.");
      }
      clearCart();
      router.push(`/checkout/success?manual=1&order_number=${encodeURIComponent(data.orderNumber)}`);
    } catch (error) {
      setIsSubmitting(false);
      alert(error instanceof Error ? error.message : "Could not place order. Please try again.");
    }
  };

  if (cartCount === 0) {
    return (
      <div ref={rootRef} className="min-h-screen bg-beige flex flex-col">
        <Header />
        <main className="flex-1 py-16 md:py-24">
          <Container className="px-4 sm:px-6 lg:px-8">
            <p className="text-dark/80 font-manrope mb-6">
              Your basket is empty.{" "}
              <Link href="/shop" className="text-accent underline hover:no-underline">
                Continue shopping
              </Link>
            </p>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div ref={rootRef} className="min-h-screen bg-beige flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <Container className="px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Link
            href="/checkout"
            className="inline-flex items-center gap-2 font-manrope text-dark/60 hover:text-dark text-sm mb-8"
          >
            ← Back to cart
          </Link>

          <h1
            className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark mb-10 md:mb-12`}
          >
            Payment & shipping
          </h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Left: Shipping + Payment */}
            <div className="lg:col-span-2 space-y-10">
              {/* Shipping */}
              <section className="p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10">
                <h2
                  className={`font-manrope ${fontWeights.manrope.bold} text-dark ${typography.manrope.body} mb-6 uppercase tracking-wide`}
                >
                  Shipping address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="sm:col-span-2">
                    <span className="block font-manrope text-sm text-dark/70 mb-1">Full name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="Jan Novák"
                    />
                  </label>
                  <label>
                    <span className="block font-manrope text-sm text-dark/70 mb-1">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="jan@example.com"
                    />
                  </label>
                  <label>
                    <span className="block font-manrope text-sm text-dark/70 mb-1">Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="+420 123 456 789"
                    />
                  </label>
                  <label className="sm:col-span-2">
                    <span className="block font-manrope text-sm text-dark/70 mb-1">Street</span>
                    <input
                      type="text"
                      name="street"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="Hlavní 123"
                    />
                  </label>
                  <label>
                    <span className="block font-manrope text-sm text-dark/70 mb-1">City</span>
                    <input
                      type="text"
                      name="city"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="Praha"
                    />
                  </label>
                  <label>
                    <span className="block font-manrope text-sm text-dark/70 mb-1">Postal code</span>
                    <input
                      type="text"
                      name="postalCode"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="110 00"
                    />
                  </label>
                  <label className="sm:col-span-2">
                    <span className="block font-manrope text-sm text-dark/70 mb-1">Country</span>
                    <input
                      type="text"
                      name="country"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="Czech Republic"
                    />
                  </label>
                </div>
              </section>

              {/* Payment */}
              <section className="p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10">
                <h2
                  className={`font-manrope ${fontWeights.manrope.bold} text-dark ${typography.manrope.body} mb-6 uppercase tracking-wide`}
                >
                  Payment
                </h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-dark/20 bg-white/60 cursor-pointer hover:border-dark/30 has-[:checked]:border-dark has-[:checked]:bg-white/80">
                    <input
                      type="radio"
                      name="payment"
                      value="stripe"
                      checked={paymentMethod === "stripe"}
                      onChange={() => setPaymentMethod("stripe")}
                      className="w-4 h-4 text-accent"
                    />
                    <span className="font-manrope font-medium text-dark">Pay with card</span>
                  </label>
                  {paymentMethod === "stripe" && stripePromise && stripeClientSecret && returnUrl && (
                    <div className="rounded-xl border border-dark/20 bg-white/80 p-4 [&_.Input]:rounded-lg [&_.Input]:border-dark/20">
                      <Elements
                        stripe={stripePromise}
                        options={{
                          clientSecret: stripeClientSecret,
                          appearance: {
                            theme: "stripe",
                            variables: { colorPrimary: "#8b5a3c", borderRadius: "12px" },
                          },
                        }}
                      >
                        <StripePaymentForm ref={stripeConfirmRef} returnUrl={returnUrl} />
                      </Elements>
                    </div>
                  )}
                  <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-dark/20 bg-white/60 cursor-pointer hover:border-dark/30 has-[:checked]:border-dark has-[:checked]:bg-white/80">
                    <input
                      type="radio"
                      name="payment"
                      value="delivery"
                      checked={paymentMethod === "delivery"}
                      onChange={() => setPaymentMethod("delivery")}
                      className="w-4 h-4 text-accent"
                    />
                    <span className="font-manrope font-medium text-dark">Pay on delivery (cash or card)</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-dark/20 bg-white/60 cursor-pointer hover:border-dark/30 has-[:checked]:border-dark has-[:checked]:bg-white/80">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={() => setPaymentMethod("bank")}
                      className="w-4 h-4 text-accent"
                    />
                    <span className="font-manrope font-medium text-dark">Bank transfer</span>
                  </label>
                </div>
              </section>
            </div>

            {/* Right: Order summary + submit */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10">
                <h2
                  className={`font-manrope ${fontWeights.manrope.bold} text-dark ${typography.manrope.body} mb-4`}
                >
                  Order summary
                </h2>
                <ul className="space-y-3 mb-6 max-h-48 overflow-y-auto">
                  {items.map((item) => (
                    <li key={item.id} className="flex justify-between gap-2 font-manrope text-sm text-dark/80">
                      <span className="truncate">
                        {item.title} × {item.quantity}
                      </span>
                      <span className="shrink-0">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 pt-4 border-t border-dark/10 mb-6">
                  <div className="flex justify-between font-manrope text-dark/80 text-sm">
                    <span>Subtotal</span>
                    <span>{formatCzk(subtotalCzk)}</span>
                  </div>
                  <div className="flex justify-between font-manrope text-dark/80 text-sm">
                    <span>Shipping</span>
                    <span>{formatCzk(SHIPPING_CZK)}</span>
                  </div>
                  <div className="flex justify-between font-manrope font-bold text-dark pt-2">
                    <span>Total</span>
                    <span>{formatCzk(totalCzk)}</span>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full bg-dark text-beige hover:bg-dark/90 disabled:opacity-60 transition-colors`}
                >
                  {isSubmitting ? "Processing…" : "Place order"}
                </button>
              </div>
            </div>
          </form>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
