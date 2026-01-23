import { useRef, useState } from "react";
import Home from "./pages/Home/Home";
import { useSpeedCoffeeMotion } from "./hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "./hooks/useCustomCursor";
import { LanguageProvider } from "./contexts/LanguageContext";
import IntroLoader from "./components/IntroLoader";
import { motion } from "framer-motion";

function App() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [introComplete, setIntroComplete] = useState(false);

  // Initialize custom cursor
  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)", // accent brown with transparency
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });

  // Initialize smooth scroll - pass introComplete so hook re-runs when element mounts
  useSpeedCoffeeMotion(rootRef, introComplete);

  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;
