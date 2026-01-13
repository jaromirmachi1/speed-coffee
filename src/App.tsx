import { useRef } from "react";
import Home from "./pages/Home/Home";
import { useSpeedCoffeeMotion } from "./hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "./hooks/useCustomCursor";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  useSpeedCoffeeMotion(rootRef);

  // Initialize custom cursor
  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(139, 90, 60, 0.4)", // accent brown with transparency
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });

  return (
    <LanguageProvider>
      <div ref={rootRef} id="top">
        <Home />
      </div>
    </LanguageProvider>
  );
}

export default App;
