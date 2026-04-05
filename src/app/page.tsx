"use client";

import { useRef, useState, useLayoutEffect, useCallback } from "react";
import Home from "@/components-pages/Home/Home";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import IntroLoader from "@/components/IntroLoader";
import { motion } from "framer-motion";

const INTRO_SEEN_KEY = "speed-coffee-intro-seen";

declare global {
  interface Window {
    __SPEED_COFFEE_HOME_READY__?: boolean;
  }
}

export default function Page() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  /**
   * First full load: false on server and on first client paint (matches SSR).
   * After the first layout effect on this origin, skip the shell on remounts (e.g. client nav back to /).
   */
  const [clientReady, setClientReady] = useState(
    () => typeof window !== "undefined" && !!window.__SPEED_COFFEE_HOME_READY__,
  );
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  useLayoutEffect(() => {
    window.__SPEED_COFFEE_HOME_READY__ = true;
    if (sessionStorage.getItem(INTRO_SEEN_KEY)) {
      setIntroComplete(true);
    }
    setClientReady(true);
  }, []);

  // Initialize custom cursor
  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)", // #8B5A3C accent brown with transparency
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });

  // Lenis/GSAP only when the home shell is mounted
  useSpeedCoffeeMotion(rootRef, clientReady && introComplete);

  if (!clientReady) {
    return (
      <div
        className="min-h-screen bg-beige"
        aria-busy="true"
        aria-label="Loading"
      />
    );
  }

  return (
    <>
      {!introComplete && (
        <IntroLoader onComplete={handleIntroComplete} duration={3500} />
      )}
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
