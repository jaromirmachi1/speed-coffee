"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { useCart } from "@/contexts/CartContext";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { useRef } from "react";
import { typography, fontWeights } from "@/lib/constants/typography";

export default function CheckoutSuccessPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const sessionId = searchParams.get("session_id");
  const paymentIntent = searchParams.get("payment_intent");
  const redirectStatus = searchParams.get("redirect_status");
  const paidWithStripe =
    !!sessionId || (!!paymentIntent && redirectStatus === "succeeded");

  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)",
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });
  useSpeedCoffeeMotion(rootRef, true);

  useEffect(() => {
    if (paidWithStripe) clearCart();
  }, [paidWithStripe, clearCart]);

  return (
    <div ref={rootRef} className="min-h-screen bg-beige flex flex-col">
      <Header />
      <main className="flex-1 py-20 md:py-28 flex items-center">
        <Container className="px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h1
            className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark mb-6`}
          >
            Thank you for your order
          </h1>
          <p
            className={`font-manrope ${typography.manrope.body} text-dark/80 mb-10`}
          >
            {paidWithStripe
              ? "Your payment was successful. We'll send you a confirmation email and ship your order soon."
              : "We've received your order. You can pay on delivery or by bank transfer as agreed."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className={`inline-block py-3 px-6 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full bg-dark text-beige hover:bg-dark/90 transition-colors`}
            >
              Continue shopping
            </Link>
            <Link
              href="/"
              className={`inline-block py-3 px-6 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full border-2 border-dark text-dark hover:bg-dark hover:text-beige transition-colors`}
            >
              Back to home
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
