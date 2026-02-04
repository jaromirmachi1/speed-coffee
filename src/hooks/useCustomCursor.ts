import { useEffect, useRef } from "react";

interface CustomCursorOptions {
  size?: number; // Base size in pixels
  hoverSize?: number; // Size when hovering over interactive elements
  color?: string; // Cursor color (rgba)
  transitionSpeed?: number; // Transition duration in seconds
  smoothing?: number; // Smoothing factor (0-1, lower = smoother)
}

/**
 * Custom cursor hook that creates a smooth, circular cursor that follows the mouse
 * and enlarges on hover over links and buttons.
 */
export const useCustomCursor = (options: CustomCursorOptions = {}) => {
  const {
    size = 20,
    hoverSize = 40,
    color = "rgba(0, 0, 0, 0.3)",
    transitionSpeed = 0.15,
    smoothing = 0.15,
  } = options;

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const isHoveringRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    // Get initial mouse position (center of screen)
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;

    // Create cursor element
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${color};
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
      transition: width ${transitionSpeed}s ease-out, height ${transitionSpeed}s ease-out;
      left: ${initialX}px;
      top: ${initialY}px;
      opacity: 1;
      will-change: transform;
    `;
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    // Track mouse position
    let mouseX = initialX;
    let mouseY = initialY;
    let cursorX = initialX;
    let cursorY = initialY;

    const updateCursor = () => {
      // Smooth interpolation for cursor position
      cursorX += (mouseX - cursorX) * smoothing;
      cursorY += (mouseY - cursorY) * smoothing;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      animationFrameRef.current = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      // Check if element is actually interactive
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.getAttribute("role") === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        if (cursor) {
          isHoveringRef.current = true;
          cursor.style.width = `${hoverSize}px`;
          cursor.style.height = `${hoverSize}px`;
          cursor.style.background = color; // Ensure color stays the same on hover
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        isHoveringRef.current = false;
        cursor.style.width = `${size}px`;
        cursor.style.height = `${size}px`;
      }
    };

    // Use event delegation for dynamic elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.getAttribute("role") === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        handleMouseEnter(e);
      }
    };

    const handleMouseOut = () => {
      handleMouseLeave();
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    // Start animation loop
    updateCursor();

    // Hide cursor when mouse leaves window
    const handleMouseLeaveWindow = () => {
      if (cursor) {
        cursor.style.opacity = "0";
      }
    };

    const handleMouseEnterWindow = () => {
      if (cursor) {
        cursor.style.opacity = "1";
      }
    };

    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, [size, hoverSize, color, transitionSpeed, smoothing]);

  return cursorRef;
};
