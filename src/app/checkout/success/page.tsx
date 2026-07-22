"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { typography, fontWeights } from "@/lib/constants/typography";

function CheckoutSuccessContent() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const { t } = useLanguage();
  const sessionId = searchParams.get("session_id");
  const paymentIntent = searchParams.get("payment_intent");
  const redirectStatus = searchParams.get("redirect_status");
  const manual = searchParams.get("manual");
  const manualOrderNumber = searchParams.get("order_number");
  const paidWithStripe =
    !!sessionId || (!!paymentIntent && redirectStatus === "succeeded");
  const shouldClearCart = paidWithStripe || manual === "1";
  const [resolvedOrderNumber, setResolvedOrderNumber] = useState<string | null>(
    manualOrderNumber
  );

  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)",
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });
  useSpeedCoffeeMotion(rootRef, true);

  useEffect(() => {
    if (shouldClearCart) clearCart();
  }, [shouldClearCart, clearCart]);

  useEffect(() => {
    if (manualOrderNumber) return;
    const paymentId = sessionId || (redirectStatus === "succeeded" ? paymentIntent : null);
    if (!paymentId) return;

    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 12;

    const poll = async () => {
      if (cancelled || attempts >= maxAttempts) return;
      attempts += 1;
      try {
        const query = sessionId
          ? `session_id=${encodeURIComponent(sessionId)}`
          : `payment_intent=${encodeURIComponent(paymentIntent!)}`;
        const res = await fetch(`/api/orders/by-payment?${query}`);
        const data = await res.json();
        if (!cancelled && res.ok && data.orderNumber) {
          setResolvedOrderNumber(data.orderNumber);
          return;
        }
      } catch {
        // retry
      }
      if (!cancelled && attempts < maxAttempts) {
        window.setTimeout(poll, 1500);
      }
    };

    poll();
    return () => {
      cancelled = true;
    };
  }, [sessionId, paymentIntent, redirectStatus, manualOrderNumber]);

  const orderNumber = resolvedOrderNumber ?? manualOrderNumber;

  return (
    <div ref={rootRef} className="min-h-screen bg-beige flex flex-col">
      <Header />
      <main className="flex-1 py-20 md:py-28 flex items-center">
        <Container className="px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h1
            className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark mb-6`}
          >
            {t("checkout.success.title")}
          </h1>
          <p
            className={`font-manrope ${typography.manrope.body} text-dark/80 mb-4`}
          >
            {paidWithStripe || manual === "1"
              ? t("checkout.success.paid")
              : t("checkout.success.other")}
          </p>
          {orderNumber && (
            <p
              className={`font-manrope ${typography.manrope.body} text-dark mb-10`}
            >
              {t("checkout.success.orderNumber")}{" "}
              <span className={`${fontWeights.manrope.bold} tracking-wide`}>
                {orderNumber}
              </span>
            </p>
          )}
          {!orderNumber && paidWithStripe && (
            <p className="font-manrope text-sm text-dark/60 mb-10">
              {t("checkout.success.orderPending")}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/orders"
              className={`inline-block py-3 px-6 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full bg-dark text-beige hover:bg-dark/90 transition-colors`}
            >
              {t("checkout.success.trackOrder")}
            </Link>
            <Link
              href="/shop"
              className={`inline-block py-3 px-6 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full border-2 border-dark text-dark hover:bg-dark hover:text-beige transition-colors`}
            >
              {t("checkout.success.continueShopping")}
            </Link>
            <Link
              href="/"
              className={`inline-block py-3 px-6 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full border-2 border-dark text-dark hover:bg-dark hover:text-beige transition-colors`}
            >
              {t("checkout.success.backHome")}
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-beige flex items-center justify-center font-manrope text-dark/60">
          Loading…
        </div>
      }
    >
      <CheckoutSuccessContent />
    </Suspense>
  );
}
