import { useRef } from "react";
import Home from "./pages/Home/Home";
import { useSpeedCoffeeMotion } from "./hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "./hooks/useCustomCursor";

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
    <div ref={rootRef} id="top">
      <Home />
    </div>
  );
}

export default App;
