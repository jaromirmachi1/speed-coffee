"use client";

import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { useCart } from "@/contexts/CartContext";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { useRef } from "react";
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
  const { items, cartCount, removeItem, updateQuantity } = useCart();

  const subtotalCzk = items.reduce((sum, item) => sum + priceToCzk(item.price) * item.quantity, 0);
  const totalCzk = subtotalCzk + SHIPPING_CZK;

  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)",
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });

  useSpeedCoffeeMotion(rootRef, true);

  return (
    <div ref={rootRef} className="min-h-screen bg-beige">
      <Header />
      <main className="py-16 md:py-24">
        <Container className="px-4 sm:px-6 lg:px-8">
          <h1
            className={`${typography.agright.sectionHeading} font-agright ${fontWeights.agright.normal} text-dark mb-8`}
          >
            Your shopping cart {cartCount > 0 && `(Items: ${cartCount})`}
          </h1>

          {cartCount === 0 ? (
            <p className="text-dark/80 font-manrope mb-6">
              Your basket is empty.{" "}
              <Link
                href="/shop"
                className="text-accent underline hover:no-underline"
              >
                Continue shopping
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
                            aria-label="Decrease quantity"
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
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-dark/70 hover:text-dark hover:bg-dark/5 rounded-lg transition-colors"
                          aria-label="Remove item"
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
                    Order summary
                  </h2>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between font-manrope text-dark/80 text-sm">
                      <span>Subtotal ({cartCount} {cartCount === 1 ? "item" : "items"})</span>
                      <span>{formatCzk(subtotalCzk)}</span>
                    </div>
                    <div className="flex justify-between font-manrope text-dark/80 text-sm">
                      <span>Shipping</span>
                      <span>{formatCzk(SHIPPING_CZK)}</span>
                    </div>
                    <div className="flex justify-between font-manrope font-bold text-dark pt-2 border-t border-dark/10">
                      <span>Total</span>
                      <span>{formatCzk(totalCzk)}</span>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className={`block w-full text-center py-3 px-6 ${typography.manrope.button} font-manrope ${fontWeights.manrope.bold} rounded-full bg-dark text-beige hover:bg-dark/90 transition-colors`}
                  >
                    Proceed to checkout
                  </Link>
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
