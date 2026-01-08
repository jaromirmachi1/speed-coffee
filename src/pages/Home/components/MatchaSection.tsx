import { useEffect, useRef } from "react";
import Container from "../../../components/Container";
import matchaSc from "../../../assets/matchaSc.webp";

const MatchaSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgImageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bgImage = bgImageRef.current;
    const text = textRef.current;
    if (!section || !bgImage || !text) return;

    let rafId = 0;

    // Ease-out only (per spec); no spring/bounce.
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 2);
    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    /**
     * Scroll progress across this section:
     * - 0 when section top hits viewport top
     * - 1 when section bottom hits viewport bottom
     */
    const computeProgress = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const scrollable = Math.max(1, rect.height - vh);
      const scrolled = -rect.top;
      return clamp01(scrolled / scrollable);
    };

    const update = () => {
      const p = computeProgress();
      const vh = window.innerHeight || 1;

      // Background image parallax: moves bottom -> top while the section background color stays static.
      // No opacity changes; subtle motion only.
      // Start lower, then travel upward (per request).
      const bgTranslateY = lerp(vh * 0.45, -vh * 0.15, easeOut(p));
      bgImage.style.transform = `translate3d(-50%, calc(-50% + ${bgTranslateY.toFixed(
        2
      )}px), 0)`;

      // 4️⃣ TEXT APPEARANCE: only after scroll begins.
      const textT = clamp01((p - 0.05) / 0.25);
      const textOpacity = lerp(0, 1, easeOut(textT));
      const textY = lerp(20, 0, easeOut(textT));

      text.style.opacity = String(textOpacity);
      // Keep the heading centered (base -50%) while animating only the extra Y offset.
      text.style.transform = `translate3d(-50%, calc(-50% + ${textY.toFixed(
        2
      )}px), 0)`;

      rafId = 0;
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    // Initial paint: keep product centered and text hidden before scrolling starts.
    update();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="shop"
      ref={sectionRef}
      className="py-16 bg-matcha"
      // Provide scroll room for the "scene" without global CSS or extra wrappers.
      // Full-bleed: escape the global `#root` horizontal padding for this section only.
      style={{
        minHeight: "200vh",
        // Use dvw to avoid the classic 100vw horizontal overflow caused by scrollbar width.
        width: "100dvw",
        marginLeft: "calc(50% - 50dvw)",
        marginRight: "calc(50% - 50dvw)",
        // Prevent any tiny horizontal overflow (e.g., sub-pixel math / large absolute text) from
        // creating a page-level horizontal scrollbar.
        overflowX: "hidden",
      }}
    >
      <Container
        className="text-center"
        // Sticky viewport-centered stage (respects the existing py-16 via top/height math).
        style={{
          position: "sticky",
          top: "4rem",
          height: "calc(100vh - 8rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Background mock image (moves bottom -> top on scroll). Replace `src` later. */}
        <img
          ref={bgImageRef}
          src={matchaSc}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "min(400px, 95vw)",
            height: "auto",
            transform: "translate3d(-50%, -50%, 0)",
            willChange: "transform",
            zIndex: 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        {/* 4️⃣ TEXT: big MATCHA heading sits behind the product and fades/slides in after scroll begins */}
        <h2
          ref={textRef}
          className="font-sans font-black text-beige"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate3d(-50%, calc(-50% + 20px), 0)",
            opacity: 0,
            // Big “back” heading
            fontSize: "min(26vw, 280px)",
            lineHeight: 1,
            letterSpacing: "0.02em",
            zIndex: 1,
            pointerEvents: "none",
            whiteSpace: "nowrap",
            willChange: "transform, opacity",
          }}
        >
          MATCHA
        </h2>
      </Container>
    </section>
  );
};

export default MatchaSection;
