"use client";

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
  const lastWidth = useRef<number>(0);

  useGSAP(
    () => {
      if (!containerRef.current || !(containerRef.current instanceof Element)) return;

      const element = containerRef.current;
      let tween: gsap.core.Tween | null = null;

      const createLines = (): HTMLElement[] => {
        if (!element || !(element instanceof Element)) return [];
        const containerWidth = element.offsetWidth;
        if (!containerWidth) return [];

        const lineSpans: HTMLElement[] = [];

        type Segment = { text: string; classes: string };
        const segments: Segment[] = [];

        // Collect text segments with their active inline classes (e.g. spans).
        // Important: ignore our own wrappers so we can rebuild on resize / layout changes.
        const collectSegments = (
          node: Node,
          activeClasses: string[] = []
        ): void => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent || "";
            if (text) {
              segments.push({
                text,
                classes: activeClasses.join(" "),
              });
            }
            return;
          }

          if (node.nodeType !== Node.ELEMENT_NODE) return;

          const el = node as HTMLElement;
          const newActive = [...activeClasses];

          const isInlineStyleCarrier =
            el.tagName === "SPAN" ||
            el.tagName === "STRONG" ||
            el.tagName === "EM" ||
            el.tagName === "B" ||
            el.tagName === "I";

          const isInternalLineWrapper =
            el.tagName === "SPAN" && el.classList.contains("text-reveal-line");

          if (isInlineStyleCarrier && !isInternalLineWrapper) {
            if (el.className) newActive.push(el.className);
          }

          Array.from(el.childNodes).forEach((child) =>
            collectSegments(child, newActive)
          );
        };

        Array.from(element.childNodes).forEach((child) =>
          collectSegments(child)
        );

        type Unit = { text: string; classes: string };
        const units: Unit[] = [];

        // Split segments into word/space units so we can rebuild lines with styling
        segments.forEach((seg) => {
          const parts = seg.text.split(/(\s+)/);
          parts.forEach((part) => {
            if (!part) return;
            units.push({
              text: part,
              classes: seg.classes,
            });
          });
        });

        const tempDiv = document.createElement("div");
        const computed = window.getComputedStyle(element);
        tempDiv.style.cssText = `
          position: absolute;
          visibility: hidden;
          white-space: nowrap;
          font-size: ${computed.fontSize};
          font-family: ${computed.fontFamily};
          font-weight: ${computed.fontWeight};
          letter-spacing: ${computed.letterSpacing};
        `;
        document.body.appendChild(tempDiv);

        const buildHTML = (lineUnits: Unit[]): string =>
          lineUnits
            .map((unit) => {
              if (unit.text.trim() === "") {
                // Preserve whitespace as-is
                return unit.text;
              }
              const escaped = unit.text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
              if (unit.classes) {
                return `<span class="${unit.classes}">${escaped}</span>`;
              }
              return escaped;
            })
            .join("");

        element.innerHTML = "";

        let currentUnits: Unit[] = [];

        units.forEach((unit, index) => {
          const testUnits = [...currentUnits, unit];
          tempDiv.innerHTML = buildHTML(testUnits);
          const testWidth = tempDiv.offsetWidth;

          if (testWidth > containerWidth && currentUnits.length > 0) {
            const lineContainer = document.createElement("span");
            lineContainer.className = "text-reveal-line";
            lineContainer.style.display = "block";
            lineContainer.style.overflow = "hidden";
            lineContainer.style.position = "relative";

            const lineInner = document.createElement("span");
            lineInner.style.display = "inline-block";
            lineInner.style.width = "100%";
            lineInner.innerHTML = buildHTML(currentUnits);
            lineContainer.appendChild(lineInner);

            element.appendChild(lineContainer);
            lineSpans.push(lineInner);
            currentUnits = [unit];
          } else {
            currentUnits = testUnits;
          }

          if (index === units.length - 1 && currentUnits.length > 0) {
            const lineContainer = document.createElement("span");
            lineContainer.className = "text-reveal-line";
            lineContainer.style.display = "block";
            lineContainer.style.overflow = "hidden";
            lineContainer.style.position = "relative";

            const lineInner = document.createElement("span");
            lineInner.style.display = "inline-block";
            lineInner.style.width = "100%";
            lineInner.innerHTML = buildHTML(currentUnits);
            lineContainer.appendChild(lineInner);

            element.appendChild(lineContainer);
            lineSpans.push(lineInner);
          }
        });

        document.body.removeChild(tempDiv);
        return lineSpans;
      };

      const applyAnimation = () => {
        lines.current.forEach((line) => {
          gsap.set(line, { y: "100%" });
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

        if (tween) {
          tween.scrollTrigger?.kill();
          tween.kill();
          tween = null;
        }

        if (animateOnScroll) {
          tween = gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              once: true,
            },
          });
        } else {
          tween = gsap.to(lines.current, animationProps);
        }
      };

      const rebuild = () => {
        if (!element || !(element instanceof Element)) return;
        const currentWidth = element.offsetWidth;
        if (!currentWidth) return;

        // Avoid thrashing; only rebuild when width changes meaningfully.
        if (Math.abs(currentWidth - lastWidth.current) <= 1) return;
        lastWidth.current = currentWidth;

        lines.current = createLines();
        applyAnimation();
        ScrollTrigger.refresh();
      };

      // Initial build (next frame, so layout is settled)
      requestAnimationFrame(() => {
        // Force first build even if lastWidth starts at 0
        lastWidth.current = 0;
        rebuild();
      });

      // Rebuild after fonts are ready (common cause of “looks fine then refresh breaks”)
      const fontsReady = (document as any).fonts?.ready as
        | Promise<void>
        | undefined;
      fontsReady?.then(() => rebuild()).catch(() => {});

      // Rebuild on element resize (e.g., responsive layout / container changes)
      const ro =
        typeof ResizeObserver !== "undefined" && element instanceof Element
          ? new ResizeObserver(() => rebuild())
          : null;
      if (ro && element instanceof Element) {
        ro.observe(element);
      }

      return () => {
        ro?.disconnect();
        if (tween) {
          tween.scrollTrigger?.kill();
          tween.kill();
        }
      };
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
