import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: React.ReactElement;
  animateOnScroll?: boolean;
  delay?: number;
}

const TextReveal = ({
  children,
  animateOnScroll = true,
  delay = 0,
}: TextRevealProps) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const letters = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      letters.current = [];
      const element = containerRef.current;

      const existingLetters = Array.from(
        element.querySelectorAll<HTMLElement>(".letter")
      );

      if (existingLetters.length === 0) {
        const splitTextIntoLetters = (node: Node): Node[] => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent || "";
            const nodes: Node[] = [];

            for (let i = 0; i < text.length; i++) {
              const char = text[i];

              if (char === " ") {
                nodes.push(document.createTextNode(" "));
              } else {
                const span = document.createElement("span");
                span.className = "letter";
                span.style.display = "inline-block";
                span.style.overflow = "hidden";
                span.style.verticalAlign = "top";
                span.textContent = char;
                nodes.push(span);
              }
            }

            return nodes;
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            const newElement = element.cloneNode(false) as HTMLElement;
            
            // Preserve all attributes including style
            Array.from(element.attributes).forEach((attr) => {
              newElement.setAttribute(attr.name, attr.value);
            });
            
            // Preserve inline styles explicitly
            if (element.style.cssText) {
              newElement.style.cssText = element.style.cssText;
            }

            Array.from(element.childNodes).forEach((child) => {
              const splitNodes = splitTextIntoLetters(child);
              splitNodes.forEach((splitNode) => {
                newElement.appendChild(splitNode);
              });
            });
            
            // Ensure the element maintains its display property for flex layouts
            const computedStyle = window.getComputedStyle(element);
            if (computedStyle.display === 'flex' || computedStyle.display === 'inline-flex') {
              newElement.style.display = computedStyle.display;
            }

            return [newElement];
          }

          return [node];
        };

        const newNodes: Node[] = [];
        Array.from(element.childNodes).forEach((node) => {
          const splitNodes = splitTextIntoLetters(node);
          newNodes.push(...splitNodes);
        });

        element.innerHTML = "";
        newNodes.forEach((node) => {
          element.appendChild(node);
          if (node instanceof HTMLElement) {
            const letterElements = node.querySelectorAll<HTMLElement>(".letter");
            if (letterElements.length > 0) {
              letters.current.push(...Array.from(letterElements));
            } else if (node.classList.contains("letter")) {
              letters.current.push(node);
            }
          }
        });
      } else {
        letters.current = existingLetters;
      }

      gsap.set(letters.current, {
        opacity: 0,
        y: -40,
      });

      const animationProps = {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: {
          amount: 0.8,
          from: "start" as const,
        },
        ease: "expo.out" as const,
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(letters.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        });
      } else {
        gsap.to(letters.current, animationProps);
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
      data-text-reveal-wrapper="true"
    >
      {children}
    </div>
  );
};

export default TextReveal;

