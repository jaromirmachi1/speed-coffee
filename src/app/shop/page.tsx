"use client";

import { useRef } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Shop from "@/components-pages/Shop/Shop";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "@/hooks/useCustomCursor";

export default function ShopPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Initialize custom cursor
  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)", // #8B5A3C accent brown with transparency
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });

  // Initialize smooth scroll
  useSpeedCoffeeMotion(rootRef, true);

  return (
    <div ref={rootRef} className="min-h-screen bg-beige">
      <Header />
      <main>
        <Shop />
      </main>
      <Footer />
    </div>
  );
}
