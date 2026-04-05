"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import starSvg from "@/assets/images/star1.svg";

interface IntroLoaderProps {
  onComplete?: () => void;
  duration?: number; // Total duration in milliseconds
}

const IntroLoader = ({ onComplete, duration = 3500 }: IntroLoaderProps) => {
  // Check sessionStorage synchronously before first render
  const sessionKey = "speed-coffee-intro-seen";

  const hasSeenIntroSync = typeof window !== "undefined" && !!sessionStorage.getItem(sessionKey);
  const prefersReducedMotionSync = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [isVisible, setIsVisible] = useState(!hasSeenIntroSync && !prefersReducedMotionSync);
  const [shouldReduceMotion] = useState(prefersReducedMotionSync);
  const [hasSeenIntro] = useState(hasSeenIntroSync);
  /** After exit animation finishes we unmount; avoids nuking AnimatePresence before exit runs */
  const [introExited, setIntroExited] = useState(false);

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Skip paths: notify parent before paint so home is not blank for returning visitors
  useLayoutEffect(() => {
    if (hasSeenIntroSync || prefersReducedMotionSync) {
      if (prefersReducedMotionSync && !hasSeenIntroSync) {
        sessionStorage.setItem(sessionKey, "true");
      }
      onCompleteRef.current?.();
    }
  }, [hasSeenIntroSync, prefersReducedMotionSync, sessionKey]);

  useEffect(() => {
    if (hasSeenIntroSync || prefersReducedMotionSync) {
      return;
    }

    // Do not set sessionStorage until the intro finishes. Setting it here caused
    // React Strict Mode's remount (dev) to see "already seen" and skip the loader.

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, hasSeenIntroSync, prefersReducedMotionSync, sessionKey]);

  const handleExitComplete = () => {
    sessionStorage.setItem(sessionKey, "true");
    onCompleteRef.current?.();
    setIntroExited(true);
  };

  if (shouldReduceMotion || hasSeenIntro || introExited) {
    return null;
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="speed-coffee-intro"
          className="fixed inset-0 z-[9999] bg-beige flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1, backdropFilter: "blur(0px)" }}
          exit={{ 
            opacity: 0, 
            backdropFilter: "blur(20px)",
            transition: { duration: 0.6, ease: [0, 0, 1, 1] }
          }}
        >
          {/* Geometric Star Shape with Layer Blur Effect */}
          <motion.div
            className="relative"
            initial={{ 
              opacity: 0, 
              scale: 0.3,
              rotate: 0
            }}
            animate={{
              // Scene 1: Arrival → Scene 2: Scale breathing → Scene 3: Moving Away
              opacity: [0, 1, 1, 1, 0],
              scale: [0.3, 0.85, 1.1, 0.4, 0.05],
              rotate: [0, 180, 360, 540, 720], // 180 degrees per stage (further reduced)
            }}
            transition={{
              duration: duration / 1000,
              times: [0, 0.17, 0.5, 0.8, 1], // Further reduced, moves to fade even sooner
              ease: [
                [0.4, 0, 0.2, 1], // Scene 1: Arrival - ease out
                [0.4, 0, 0.6, 1], // Scene 2: Breathing - ease in out
                [0.4, 0, 0.6, 1], // Scene 3: Moving away - smooth deceleration
                [0.5, 0, 0.8, 1], // Final fade away - gentle ease out
              ],
            }}
            style={{
              transformOrigin: "center center",
            }}
          >
            {/* Star with built-in blur from Figma */}
            <motion.img
              src={typeof starSvg === 'string' ? starSvg : starSvg.src}
              alt=""
              className="relative w-full h-full object-contain"
              style={{
                width: "240px",
                height: "240px",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
