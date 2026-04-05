"use client";

import { useRef } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import RentalInquiryForm from "@/components-pages/Home/components/RentalInquiryForm";

export default function FormPage() {
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
    <div ref={rootRef} className="min-h-screen bg-beige flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="mt-16 md:mt-24 px-4 sm:px-6 lg:px-8">
          <RentalInquiryForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

