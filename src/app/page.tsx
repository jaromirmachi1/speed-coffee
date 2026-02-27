"use client";

import { useRef, useState, useEffect } from "react";
import Home from "@/components-pages/Home/Home";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import IntroLoader from "@/components/IntroLoader";
import { motion } from "framer-motion";

const INTRO_SEEN_KEY = "speed-coffee-intro-seen";

export default function Page() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [introComplete, setIntroComplete] = useState(() =>
    typeof window !== "undefined"
      ? !!sessionStorage.getItem(INTRO_SEEN_KEY)
      : false,
  );

  // Ensure we sync when navigating back to home (e.g. logo click)
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem(INTRO_SEEN_KEY)
    ) {
      setIntroComplete(true);
    }
  }, []);

  // Initialize custom cursor
  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)", // #8B5A3C accent brown with transparency
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });

  // Initialize smooth scroll - pass introComplete so hook re-runs when element mounts
  useSpeedCoffeeMotion(rootRef, introComplete);

  return (
    <>
      <IntroLoader onComplete={() => setIntroComplete(true)} duration={3500} />
      {introComplete && (
        <motion.div
          ref={rootRef}
          id="top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Home />
        </motion.div>
      )}
    </>
  );
}
