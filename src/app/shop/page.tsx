"use client";

import { useRef } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "@/hooks/useCustomCursor";

export default function ShopPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)",
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });

  useSpeedCoffeeMotion(rootRef, true);

  return (
    <div ref={rootRef} className="flex min-h-screen flex-col bg-beige">
      <Header />
      <main
        className="flex min-h-[calc(100vh-5rem)] flex-1 flex-col items-center justify-center px-4"
        style={{ minHeight: "calc(100dvh - 5rem)" }}
      >
        <div className="text-center">
          <p className="font-manrope text-dark/90 text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.25em]">
            In progress
          </p>
          <p className="mt-4 font-manrope text-dark/60 text-sm sm:text-base">
            Our online shop is coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
