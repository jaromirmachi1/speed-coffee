"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import matchaSc from "@/assets/images/matchaSc.webp";
import CoffeeSection, { type CoffeeSectionHandle } from "./CoffeeSection";

const MatchaSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgImageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const coffeeRef = useRef<CoffeeSectionHandle | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bgImage = bgImageRef.current;
    const text = textRef.current;
    if (!section || !bgImage || !text) return;

    let rafId = 0;
    // Mobile detection for performance optimization
    const isMobile = window.innerWidth < 768;
    // Cache for getBoundingClientRect on mobile to reduce reflows
    let cachedImgBottom = 0;
    let cachedRectHeight = 0;
    let rectCacheFrame = 0;

    // Ease-out only (per spec); no spring/bounce.
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 2);
    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const update = () => {
      const vh = window.innerHeight || 1;
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - vh);
      const scrolled = -rect.top;
      /**
       * Scroll progress across this section:
       * - 0 when section top hits viewport top
       * - 1 when section bottom hits viewport bottom
       */
      const p = clamp01(scrolled / scrollable);

      // Background image parallax: moves bottom -> top while the section background color stays static.
      // No opacity changes; subtle motion only.
      // Start lower, then travel upward (per request).
      // Travel far enough that the image fully exits the top of the viewport.
      const bgTranslateY = lerp(vh * 0.9, -vh * 1.25, easeOut(p));
      // Reduce precision on mobile for better performance
      const precision = isMobile ? 0 : 2;
      bgImage.style.transform = `translate3d(-50%, calc(-50% + ${bgTranslateY.toFixed(
        precision
      )}px), 0)`;

      // 4️⃣ TEXT APPEARANCE: only after scroll begins.
      // Show sooner: start essentially immediately as the user begins to scroll this section.
      const textT = clamp01((p - 0.0) / 0.18);
      const textOpacityIn = lerp(0, 1, easeOut(textT));
      const textY = lerp(20, 0, easeOut(textT));

      // Fade OUT once the image is out of sight (top). We use the image's actual rect (post-transform).
      // On mobile: cache getBoundingClientRect to reduce reflows (only update every few frames)
      let imgRectBottom: number;
      if (isMobile && rectCacheFrame % 3 !== 0) {
        // Use cached value on mobile, only update every 3rd frame
        imgRectBottom = cachedImgBottom + (bgTranslateY - (cachedImgBottom - vh * 0.5));
      } else {
        const imgRect = bgImage.getBoundingClientRect();
        imgRectBottom = imgRect.bottom;
        cachedImgBottom = imgRectBottom;
        cachedRectHeight = rect.height;
        rectCacheFrame++;
      }

      const outT = clamp01((-40 - imgRectBottom) / 120);
      const textOpacityOut = 1 - easeOut(outT);

      text.style.opacity = String(Math.round(textOpacityIn * textOpacityOut * 100) / 100);
      // Keep the heading centered (base -50%) while animating only the extra Y offset.
      text.style.transform = `translate3d(-50%, calc(-50% + ${textY.toFixed(
        precision
      )}px), 0)`;

      // Coffee stage is handled by CoffeeSection (separate file).
      coffeeRef.current?.update({
        scrolledPx: scrolled,
        vh,
        matchaImgBottom: imgRectBottom,
        sectionHeight: cachedRectHeight || rect.height,
      });

      rafId = 0;
    };

    // Full-bleed WITHOUT viewport units:
    // Instead of width:100vw/dvw (which can cause 1–2px overflow), we “cancel out”
    // the global `#top` padding by applying equal negative margins on this section.
    const syncFullBleedToRootPadding = () => {
      const rootEl = document.getElementById("top");
      if (!rootEl) return;
      const cs = window.getComputedStyle(rootEl);
      const pl = Number.parseFloat(cs.paddingLeft) || 0;
      const pr = Number.parseFloat(cs.paddingRight) || 0;
      section.style.marginLeft = `${-pl}px`;
      section.style.marginRight = `${-pr}px`;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    const onResize = () => {
      syncFullBleedToRootPadding();
      onScroll();
    };

    // Initial paint
    syncFullBleedToRootPadding();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId) window.cancelAnimationFrame(rafId);
      // Cleanup inline margins
      section.style.marginLeft = "";
      section.style.marginRight = "";
      coffeeRef.current?.reset();
    };
  }, []);

  return (
    <section
      id="shop"
      ref={sectionRef}
      className="py-16 bg-matcha"
      // Provide scroll room for the "scene" without global CSS or extra wrappers.
      style={{
        // More runway so you can add another image underneath and keep the scroll feeling long/smooth.
        // Increased height to wait more time before ProductsSection appears
        minHeight: "700vh",
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
          src={typeof matchaSc === 'string' ? matchaSc : matchaSc.src}
          alt=""
          aria-hidden="true"
          className="w-[min(280px,70vw)] md:w-[min(400px,95vw)]"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            height: "auto",
            transform: "translate3d(-50%, -50%, 0)",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
            willChange: "transform",
            zIndex: 2,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        {/* 4️⃣ TEXT: big MATCHA heading sits behind the product and fades/slides in after scroll begins */}
        <h2
          ref={textRef}
          className="text-beige"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate3d(-50%, calc(-50% + 20px), 0)",
            opacity: 0,
            display: "flex",
            flexDirection: "column",
            gap: 0,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 1,
            pointerEvents: "none",
            // Keep typography tight and stable (no wrapping)
            whiteSpace: "nowrap",
            willChange: "transform, opacity",
          }}
        >
          <span
            style={{
              fontFamily: "Agright, sans-serif",
              fontWeight: 400,
              fontSize: "min(6vw, 60px)",
              lineHeight: 1,
              marginBottom: "-0.45em",
            }}
          >
            {t("matcha.fallenFor")}
          </span>
          <span
            className="font-sans font-black"
            style={{
              // Keep the big MATCHA exactly as the main visual
              fontSize: "min(26vw, 520px)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
            }}
          >
            {t("matcha.title")}
          </span>
          <span
            style={{
              fontFamily: "Agright, sans-serif",
              fontWeight: 400,
              fontSize: "min(6vw, 60px)",
              lineHeight: 1,
              marginTop: "-0.25em",
            }}
          >
            {t("matcha.yet")}
          </span>
        </h2>

        <CoffeeSection ref={coffeeRef} />
      </Container>
    </section>
  );
};

export default MatchaSection;
