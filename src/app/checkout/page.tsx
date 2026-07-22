"use client";

import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { startStripeCheckout } from "@/lib/checkout/startStripeCheckout";
import { useRef, useState } from "react";
import {
  typography,
  fontWeights,
} from "@/lib/constants/typography";
import { FaTrashCan } from "react-icons/fa6";

const SHIPPING_CZK = 89;

/** Parse display price string to numeric value in CZK (e.g. "120 Kč" -> 120, "€4.50" -> ~122). */
function priceToCzk(priceStr: string): number {
  const num = parseFloat(priceStr.replace(/[^\d.,]/g, "").replace(",", ".")) || 0;
  return priceStr.includes("€") ? Math.round(num * 27) : num;
}

function formatCzk(value: number): string {
  return `${value} Kč`;
}

export default function CheckoutPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [storeNotice, setStoreNotice] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { items, cartCount, removeItem, updateQuantity } = useCart();
  const { t, language } = useLanguage();
  const isStoreOpen = process.env.NEXT_PUBLIC_STORE_OPEN !== "false";

  const subtotalCzk = items.reduce((sum, item) => sum + priceToCzk(item.price) * item.quantity, 0);
  const totalCzk = subtotalCzk + SHIPPING_CZK;

  const handleStripeCheckout = async () => {
    if (!isStoreOpen) {
      setStoreNotice(t("checkout.cart.storeClosed"));
      return;
    }

    setStoreNotice(null);
    setIsRedirecting(true);
    try {
      const url = await startStripeCheckout({
        items,
        locale: language === "cz" ? "cs" : "en",
      });
      window.location.href = url;
    } catch (error) {
      setIsRedirecting(false);
      setStoreNotice(
        error instanceof Error ? error.message : t("checkout.shipping.paymentError"),
      );
    }
  };

  return (
    <div ref={rootRef} className="min-h-screen bg-beige">
      <Header />
      <main className="py-16 md:py-24">
        <Container className="px-4 sm:px-6 lg:px-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-manrope text-dark/60 hover:text-dark text-sm mb-8"
          >
            {t("checkout.cart.backToShop")}
          </Link>

          <h1
            className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark mb-8`}
          >
            {t("checkout.cart.title")}{" "}
            {cartCount > 0 && `(${t("checkout.cart.itemsCount")}: ${cartCount})`}
          </h1>

          {cartCount === 0 ? (
            <p className="text-dark/80 font-manrope mb-6">
              {t("checkout.cart.empty")}{" "}
              <Link
                href="/shop"
                className="text-accent underline hover:no-underline"
              >
                {t("checkout.cart.continueShopping")}
              </Link>
            </p>
          ) : (
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
              {/* Left column – cart items */}
              <div className="flex-1 min-w-0">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-white/40 rounded-xl border border-dark/10"
                    >
                      {/* Image */}
                      <div className="flex-shrink-0 w-full sm:w-28 h-28 sm:h-28 rounded-lg overflow-hidden bg-white/60">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      {/* Product details (middle) */}
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <p
                          className={`font-manrope ${fontWeights.manrope.normal} text-dark ${typography.manrope.body} truncate`}
                        >
                          {item.title}
                          {item.selected_variant_title ? ` (${item.selected_variant_title})` : ""}
                        </p>
                        <p
                          className={`font-manrope ${fontWeights.manrope.bold} text-dark mt-1 ${typography.manrope.body}`}
                        >
                          {item.price}
                        </p>
                      </div>

                      {/* Quantity + remove (right) */}
                      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                        <div className="flex items-center border border-dark/20 rounded-lg overflow-hidden bg-white/60">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 text-dark hover:bg-dark/10 transition-colors font-manrope text-lg font-bold"
                            aria-label={t("checkout.cart.decreaseQty")}
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min={1}
                            max={99}
                            value={item.quantity}
                            onChange={(e) => {
                              const v = parseInt(e.target.value, 10);
                              if (!isNaN(v) && v >= 1) updateQuantity(item.id, Math.min(99, v));
                            }}
                            className="w-12 sm:w-14 py-2 text-center font-manrope text-dark bg-transparent border-none focus:outline-none focus:ring-0 border-x border-dark/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, Math.min(99, item.quantity + 1))}
                            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 text-dark hover:bg-dark/10 transition-colors font-manrope text-lg font-bold"
                            aria-label={t("checkout.cart.increaseQty")}
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-dark/70 hover:text-dark hover:bg-dark/5 rounded-lg transition-colors"
                          aria-label={t("checkout.cart.removeItem")}
                        >
                          <FaTrashCan className="w-5 h-5" aria-hidden />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column – order summary */}
              <div className="lg:w-80 flex-shrink-0">
                <div className="sticky top-24 p-6 bg-white/40 rounded-xl border border-dark/10">
                  <h2
                    className={`font-manrope ${fontWeights.manrope.bold} text-dark ${typography.manrope.body} mb-4`}
                  >
                    {t("checkout.cart.orderSummary")}
                  </h2>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between font-manrope text-dark/80 text-sm">
                      <span>
                        {t("checkout.cart.subtotal")} ({cartCount}{" "}
                        {cartCount === 1
                          ? t("checkout.cart.item")
                          : t("checkout.cart.items")}
                        )
                      </span>
                      <span>{formatCzk(subtotalCzk)}</span>
                    </div>
                    <div className="flex justify-between font-manrope text-dark/80 text-sm">
                      <span>{t("checkout.cart.shipping")}</span>
                      <span>{formatCzk(SHIPPING_CZK)}</span>
                    </div>
                    <div className="flex justify-between font-manrope font-bold text-dark pt-2 border-t border-dark/10">
                      <span>{t("checkout.cart.total")}</span>
                      <span>{formatCzk(totalCzk)}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleStripeCheckout}
                    disabled={isRedirecting}
                    className={`block w-full text-center py-3 px-6 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full bg-dark text-beige hover:bg-dark/90 disabled:opacity-60 transition-colors`}
                  >
                    {isRedirecting ? t("checkout.shipping.processing") : t("checkout.cart.proceed")}
                  </button>
                  <Link
                    href="/checkout/shipping"
                    className={`mt-3 block w-full text-center py-3 px-6 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full border-2 border-dark text-dark hover:bg-dark hover:text-beige transition-colors`}
                  >
                    {t("checkout.cart.payOnDelivery")}
                  </Link>
                  {storeNotice ? (
                    <p className="mt-3 text-xs font-manrope text-dark/70 text-center">
                      {storeNotice}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
