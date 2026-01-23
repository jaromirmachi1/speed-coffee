import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import starSvg from "../assets/images/Star 1.svg";

interface IntroLoaderProps {
  onComplete?: () => void;
  duration?: number; // Total duration in milliseconds
}

const IntroLoader = ({ onComplete, duration = 3500 }: IntroLoaderProps) => {
  // Check sessionStorage synchronously before first render
  const sessionKey = "speed-coffee-intro-seen";
  
  // TEMPORARY: Force show intro for testing - REMOVE THIS LINE when done testing
  if (typeof window !== "undefined") sessionStorage.removeItem(sessionKey);
  
  const hasSeenIntroSync = typeof window !== "undefined" && !!sessionStorage.getItem(sessionKey);
  const prefersReducedMotionSync = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [isVisible, setIsVisible] = useState(!hasSeenIntroSync && !prefersReducedMotionSync);
  const [shouldReduceMotion] = useState(prefersReducedMotionSync);
  const [hasSeenIntro] = useState(hasSeenIntroSync);

  useEffect(() => {
    // If already seen or reduced motion, skip immediately
    if (hasSeenIntroSync || prefersReducedMotionSync) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Mark as seen in session
    sessionStorage.setItem(sessionKey, "true");

    // Fade out after duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onComplete, hasSeenIntroSync, prefersReducedMotionSync]);

  // Skip animation if reduced motion is preferred or already seen
  if (shouldReduceMotion || hasSeenIntro || !isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
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
              src={starSvg}
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
