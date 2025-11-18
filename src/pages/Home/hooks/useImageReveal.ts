import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface UseImageRevealOptions {
  duration?: number;
  delay?: number;
  y?: number;
}

export const useImageReveal = ({
  duration = 1.2,
  delay = 0.8,
  y = -80,
}: UseImageRevealOptions = {}) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!imageRef.current) return;

      gsap.set(imageRef.current, {
        opacity: 0,
        y: y,
      });

      gsap.to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "expo.out",
      });
    },
    { scope: imageRef }
  );

  return imageRef;
};

