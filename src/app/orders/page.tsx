"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import {
  typography,
  fontWeights,
} from "@/lib/constants/typography";
import type { OrderTrackingLine, OrderTrackingPayload } from "@/lib/sanity/orders";

export default function TrackOrderPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const { language, t } = useLanguage();
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [order, setOrder] = useState<OrderTrackingPayload | null>(null);

  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)",
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });
  useSpeedCoffeeMotion(rootRef, true);

  const statusLabel = (status: string) => {
    const key = `orders.status.${status}` as const;
    const translated = t(key);
    return translated !== key ? translated : status;
  };

  const lineTitle = (row: OrderTrackingLine) =>
    language === "cz" ? row.title_cz : row.title_en;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorKey(null);
    setOrder(null);
    setIsLoading(true);
    try {
      const res = await fetch("/api/order-lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderNumber: orderNumber.trim(), email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.error === "unavailable") setErrorKey("orders.error.unavailable");
        else if (data.error === "invalid_input") setErrorKey("orders.error.invalid");
        else setErrorKey("orders.error.notFound");
        return;
      }
      if (data.ok && data.order) setOrder(data.order as OrderTrackingPayload);
      else setErrorKey("orders.error.notFound");
    } catch {
      setErrorKey("orders.error.generic");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div ref={rootRef} className="min-h-screen bg-beige flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <Container className="px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h1
            className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark mb-4`}
          >
            {t("orders.title")}
          </h1>
          <p className="font-manrope text-dark/70 text-sm md:text-base mb-10">
            {t("orders.intro")}
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10 mb-10"
          >
            <div>
              <label className="block font-manrope text-sm text-dark/70 mb-1.5">
                {t("orders.orderNumber")}
              </label>
              <input
                type="text"
                name="orderNumber"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                required
                autoComplete="off"
                className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-dark/20"
                placeholder={t("orders.orderNumberPlaceholder")}
              />
            </div>
            <div>
              <label className="block font-manrope text-sm text-dark/70 mb-1.5">
                {t("orders.email")}
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-3 rounded-xl border border-dark/20 bg-white/80 font-manrope text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-dark/20"
                placeholder={t("orders.emailPlaceholder")}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-full bg-dark text-beige font-manrope ${fontWeights.manrope.bold} hover:bg-dark/90 transition-colors disabled:opacity-60`}
            >
              {isLoading ? t("orders.searching") : t("orders.submit")}
            </button>
            {errorKey ? (
              <p className="text-sm font-manrope text-red-800/90">{t(errorKey)}</p>
            ) : null}
          </form>

          {order ? (
            <div className="p-6 md:p-8 bg-white/40 rounded-2xl border border-dark/10 space-y-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className={`font-manrope ${fontWeights.manrope.bold} text-dark text-lg`}>
                  {t("orders.resultTitle")} {order.orderNumber}
                </h2>
                <span className="inline-flex px-3 py-1 rounded-full bg-dark/10 font-manrope text-sm font-semibold text-dark uppercase tracking-wide">
                  {statusLabel(order.status)}
                </span>
              </div>
              <p className="font-manrope text-dark/80 text-sm">
                {t("orders.placedOn")}{" "}
                {new Date(order.createdAt).toLocaleDateString(
                  language === "cz" ? "cs-CZ" : "en-GB",
                  { dateStyle: "medium" }
                )}
              </p>
              {order.customerName ? (
                <p className="font-manrope text-dark text-sm">
                  <span className="text-dark/60">{t("orders.customer")} </span>
                  {order.customerName}
                </p>
              ) : null}
              {order.shippingAddress ? (
                <div>
                  <p className="font-manrope text-dark/60 text-xs uppercase tracking-wide mb-1">
                    {t("orders.shipping")}
                  </p>
                  <p className="font-manrope text-dark text-sm whitespace-pre-line">
                    {order.shippingAddress}
                  </p>
                </div>
              ) : null}
              {order.items.length > 0 ? (
                <div>
                  <p className="font-manrope text-dark/60 text-xs uppercase tracking-wide mb-2">
                    {t("orders.items")}
                  </p>
                  <ul className="space-y-2">
                    {order.items.map((row, i) => (
                      <li
                        key={`${row.title_en}-${i}`}
                        className="flex justify-between gap-4 font-manrope text-sm text-dark"
                      >
                        <span>
                          {lineTitle(row)} × {row.quantity}
                        </span>
                        {row.unitPrice != null ? (
                          <span className="text-dark/80 shrink-0">
                            {row.unitPrice.toFixed(2)} {row.currency}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {order.total != null ? (
                <p className="font-manrope font-bold text-dark pt-2 border-t border-dark/10">
                  {t("orders.total")}{" "}
                  {order.total.toFixed(2)} {order.currency}
                </p>
              ) : null}
            </div>
          ) : null}

          <p className="mt-10 font-manrope text-dark/50 text-xs leading-relaxed">
            {t("orders.cmsNote")}
          </p>
          <Link
            href="/shop"
            className="inline-block mt-6 font-manrope text-dark underline hover:text-dark/70 text-sm"
          >
            {t("orders.backShop")}
          </Link>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
