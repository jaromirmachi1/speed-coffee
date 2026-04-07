"use client";

import { useRef } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Shop from "@/components-pages/Shop/Shop";
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
      <main className="flex-1" style={{ minHeight: "calc(100dvh - 5rem)" }}>
        <Shop />
      </main>
      <Footer />
    </div>
  );
}
