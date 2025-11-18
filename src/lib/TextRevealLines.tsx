import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealLinesProps {
  children: React.ReactElement;
  animateOnScroll?: boolean;
  delay?: number;
}

const TextRevealLines = ({
  children,
  animateOnScroll = true,
  delay = 0,
}: TextRevealLinesProps) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const lines = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      lines.current = [];
      const element = containerRef.current;

      const existingLineContainers = Array.from(
        element.querySelectorAll<HTMLElement>(".line")
      );

      if (existingLineContainers.length === 0) {
        const createLines = () => {
          const text = element.textContent || "";
          const words = text.split(/\s+/);
          const containerWidth = element.offsetWidth;

          const tempDiv = document.createElement("div");
          tempDiv.style.cssText = `
            position: absolute;
            visibility: hidden;
            white-space: nowrap;
            font-size: ${window.getComputedStyle(element).fontSize};
            font-family: ${window.getComputedStyle(element).fontFamily};
            font-weight: ${window.getComputedStyle(element).fontWeight};
            letter-spacing: ${window.getComputedStyle(element).letterSpacing};
          `;
          document.body.appendChild(tempDiv);

          const lineSpans: HTMLElement[] = [];
          let currentLine = "";

          element.innerHTML = "";

          words.forEach((word, index) => {
            const testText = currentLine ? `${currentLine} ${word}` : word;
            tempDiv.textContent = testText;
            const testWidth = tempDiv.offsetWidth;

            if (testWidth > containerWidth && currentLine) {
              const lineContainer = document.createElement("span");
              lineContainer.className = "line";
              lineContainer.style.display = "block";
              lineContainer.style.overflow = "hidden";

              const lineInner = document.createElement("span");
              lineInner.style.display = "block";
              lineInner.textContent = currentLine;
              lineContainer.appendChild(lineInner);

              element.appendChild(lineContainer);
              lineSpans.push(lineInner);
              currentLine = word;
            } else {
              currentLine = testText;
            }

            if (index === words.length - 1 && currentLine) {
              const lineContainer = document.createElement("span");
              lineContainer.className = "line";
              lineContainer.style.display = "block";
              lineContainer.style.overflow = "hidden";

              const lineInner = document.createElement("span");
              lineInner.style.display = "block";
              lineInner.textContent = currentLine;
              lineContainer.appendChild(lineInner);

              element.appendChild(lineContainer);
              lineSpans.push(lineInner);
            }
          });

          document.body.removeChild(tempDiv);
          return lineSpans;
        };

        lines.current = createLines();
      } else {
        lines.current = existingLineContainers
          .map((container) => container.firstElementChild as HTMLElement)
          .filter((el) => el !== null);
      }

      lines.current.forEach((line) => {
        gsap.set(line, {
          y: "100%",
        });
      });

      const animationProps = {
        y: "0%",
        duration: 0.8,
        stagger: {
          amount: 0.4,
          from: "start" as const,
        },
        ease: "expo.out" as const,
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        });
      } else {
        gsap.to(lines.current, animationProps);
      }
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef } as any);
  }

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      data-text-reveal-lines-wrapper="true"
    >
      {children}
    </div>
  );
};

export default TextRevealLines;

