"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  typography,
  fontWeights,
} from "@/lib/constants/typography";
import {
  SHIPPING_CZK,
  POD_FEE_CZK,
  priceToCzk,
  formatCzk,
  orderTotalCzk,
} from "@/lib/checkout/pricing";

export default function ShippingPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { items, cartCount, clearCart } = useCart();
  const { t } = useLanguage();
  const isStoreOpen = process.env.NEXT_PUBLIC_STORE_OPEN !== "false";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotalCzk = items.reduce((sum, item) => sum + priceToCzk(item.price) * item.quantity, 0);
  const totalCzk = orderTotalCzk(subtotalCzk, "delivery");

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
      id: item.product_id ?? item.id,
      product_id: item.product_id ?? item.id.split("::")[0],
      title: item.selected_variant_title
        ? `${item.title} (${item.selected_variant_title})`
        : item.title,
      variantTitle: item.selected_variant_title,
      price: item.price,
      quantity: item.quantity,
    }));

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/orders/manual", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethod: "delivery",
          customer,
          items: normalizedItems,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.orderNumber) {
        throw new Error(data?.error || t("checkout.shipping.orderFailed"));
      }
      clearCart();
      router.push(
        `/checkout/success?manual=1&order_number=${encodeURIComponent(data.orderNumber)}`,
      );
    } catch (error) {
      setIsSubmitting(false);
      alert(error instanceof Error ? error.message : t("checkout.shipping.orderError"));
    }
  };

  if (cartCount === 0) {
    return (
      <div ref={rootRef} className="min-h-screen bg-beige flex flex-col">
        <Header />
        <main className="flex-1 py-16 md:py-24">
          <Container className="px-4 sm:px-6 lg:px-8">
            <p className="text-dark/80 font-manrope mb-6">
              {t("checkout.cart.empty")}{" "}
              <Link href="/shop" className="text-accent underline hover:no-underline">
                {t("checkout.cart.continueShopping")}
              </Link>
            </p>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isStoreOpen) {
    return (
      <div ref={rootRef} className="min-h-screen bg-beige flex flex-col">
        <Header />
        <main className="flex-1 py-16 md:py-24">
          <Container className="px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10">
              <h1
                className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark mb-4`}
              >
                {t("checkout.shipping.notOpenTitle")}
              </h1>
              <p className="font-manrope text-dark/80">
                {t("checkout.shipping.notOpenText")}
              </p>
              <Link
                href="/shop"
                className={`inline-block mt-6 py-3 px-6 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full bg-dark text-beige hover:bg-dark/90 transition-colors`}
              >
                {t("checkout.shipping.backToShop")}
              </Link>
            </div>
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
            {t("checkout.shipping.backToCart")}
          </Link>

          <h1
            className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark mb-4`}
          >
            {t("checkout.shipping.deliveryTitle")}
          </h1>
          <p className="font-manrope text-dark/70 mb-10 md:mb-12">
            {t("checkout.shipping.deliverySubtitle")}
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2">
              <section className="p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10">
                <h2
                  className={`font-manrope ${fontWeights.manrope.bold} text-dark ${typography.manrope.body} mb-6 uppercase tracking-wide`}
                >
                  {t("checkout.shipping.addressTitle")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="sm:col-span-2">
                    <span className="block font-manrope text-sm text-dark/70 mb-1">
                      {t("checkout.shipping.fullName")}
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="Jan Novák"
                    />
                  </label>
                  <label>
                    <span className="block font-manrope text-sm text-dark/70 mb-1">
                      {t("checkout.shipping.email")}
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="jan@example.com"
                    />
                  </label>
                  <label>
                    <span className="block font-manrope text-sm text-dark/70 mb-1">
                      {t("checkout.shipping.phone")}
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="+420 123 456 789"
                    />
                  </label>
                  <label className="sm:col-span-2">
                    <span className="block font-manrope text-sm text-dark/70 mb-1">
                      {t("checkout.shipping.street")}
                    </span>
                    <input
                      type="text"
                      name="street"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="Hlavní 123"
                    />
                  </label>
                  <label>
                    <span className="block font-manrope text-sm text-dark/70 mb-1">
                      {t("checkout.shipping.city")}
                    </span>
                    <input
                      type="text"
                      name="city"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="Praha"
                    />
                  </label>
                  <label>
                    <span className="block font-manrope text-sm text-dark/70 mb-1">
                      {t("checkout.shipping.postalCode")}
                    </span>
                    <input
                      type="text"
                      name="postalCode"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="110 00"
                    />
                  </label>
                  <label className="sm:col-span-2">
                    <span className="block font-manrope text-sm text-dark/70 mb-1">
                      {t("checkout.shipping.country")}
                    </span>
                    <input
                      type="text"
                      name="country"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-transparent"
                      placeholder="Česká republika"
                    />
                  </label>
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10">
                <h2
                  className={`font-manrope ${fontWeights.manrope.bold} text-dark ${typography.manrope.body} mb-4`}
                >
                  {t("checkout.shipping.orderSummary")}
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
                    <span>{t("checkout.shipping.subtotal")}</span>
                    <span>{formatCzk(subtotalCzk)}</span>
                  </div>
                  <div className="flex justify-between font-manrope text-dark/80 text-sm">
                    <span>{t("checkout.shipping.shipping")}</span>
                    <span>{formatCzk(SHIPPING_CZK)}</span>
                  </div>
                  <div className="flex justify-between font-manrope text-dark/80 text-sm">
                    <span>{t("checkout.shipping.podFee")}</span>
                    <span>{formatCzk(POD_FEE_CZK)}</span>
                  </div>
                  <div className="flex justify-between font-manrope font-bold text-dark pt-2">
                    <span>{t("checkout.shipping.total")}</span>
                    <span>{formatCzk(totalCzk)}</span>
                  </div>
                </div>
                <p className="font-manrope text-xs text-dark/60 mb-4">
                  {t("checkout.shipping.payDelivery")} +{formatCzk(POD_FEE_CZK)}
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full bg-dark text-beige hover:bg-dark/90 disabled:opacity-60 transition-colors`}
                >
                  {isSubmitting ? t("checkout.shipping.processing") : t("checkout.shipping.placeOrder")}
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
