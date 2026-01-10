import { useRef } from "react";
import Home from "./pages/Home/Home";
import { useSpeedCoffeeMotion } from "./hooks/useSpeedCoffeeMotion";

function App() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  useSpeedCoffeeMotion(rootRef);

  return (
    <div ref={rootRef} id="top">
      <Home />
    </div>
  );
}

export default App;
