"use client";

import { useRef } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Events from "@/components-pages/Events/Events";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "@/hooks/useCustomCursor";

export default function EventsPageClient() {
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
      <main className="flex-1">
        <Events />
      </main>
      <Footer />
    </div>
  );
}
