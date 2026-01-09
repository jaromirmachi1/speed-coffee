import { useEffect, useRef } from "react";
import Container from "../../../components/Container";
import matchaSc from "../../../assets/matchaSc.webp";
import coffeeSell from "../../../assets/coffeeSell.png";

const MatchaSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgImageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const stage2BgRef = useRef<HTMLDivElement | null>(null);
  const stage2ImageRef = useRef<HTMLImageElement | null>(null);
  const stage2TextRef = useRef<HTMLHeadingElement | null>(null);
  const stage2StartPRef = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bgImage = bgImageRef.current;
    const text = textRef.current;
    const stage2Bg = stage2BgRef.current;
    const stage2Image = stage2ImageRef.current;
    const stage2Text = stage2TextRef.current;
    if (
      !section ||
      !bgImage ||
      !text ||
      !stage2Bg ||
      !stage2Image ||
      !stage2Text
    )
      return;

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
      // Travel far enough that the image fully exits the top of the viewport.
      const bgTranslateY = lerp(vh * 0.9, -vh * 1.25, easeOut(p));
      bgImage.style.transform = `translate3d(-50%, calc(-50% + ${bgTranslateY.toFixed(
        2
      )}px), 0)`;

      // 4️⃣ TEXT APPEARANCE: only after scroll begins.
      // Show sooner: start essentially immediately as the user begins to scroll this section.
      const textT = clamp01((p - 0.0) / 0.18);
      const textOpacityIn = lerp(0, 1, easeOut(textT));
      const textY = lerp(20, 0, easeOut(textT));

      // Fade OUT once the image is out of sight (top). We use the image's actual rect (post-transform).
      // Starts fading when the image bottom reaches ~40px above the viewport, ends by ~160px above.
      const imgRect = bgImage.getBoundingClientRect();
      const outT = clamp01((-40 - imgRect.bottom) / 120);
      const textOpacityOut = 1 - easeOut(outT);

      text.style.opacity = String(textOpacityIn * textOpacityOut);
      // Keep the heading centered (base -50%) while animating only the extra Y offset.
      text.style.transform = `translate3d(-50%, calc(-50% + ${textY.toFixed(
        2
      )}px), 0)`;

      /**
       * Stage 2 (COFFEE) — duplicate of Matcha behavior:
       * - starts ONLY after Matcha heading is fully faded out
       * - same easing/timing patterns (image motion + heading in/out)
       * - different background color + different image + different text
       */
      // Stage 2 timing: match the Matcha "physics" by driving stage2 off section scroll progress (p),
      // not off image pixels (which compresses the motion and feels faster).
      // We "arm" stage2 once the Matcha image has fully cleared the top.
      const stage2ArmPx = -200; // px threshold (below -160 so Matcha is fully gone)
      if (stage2StartPRef.current === null && imgRect.bottom <= stage2ArmPx) {
        stage2StartPRef.current = p;
      }
      const stage2StartP = stage2StartPRef.current ?? 1;
      const stage2DurationP = 0.5; // portion of section scroll reserved for stage 2
      const stage2P = clamp01((p - stage2StartP) / stage2DurationP);
      // Stage 2 physics: match the "feel" of the Matcha part (single ease-out, no double-easing).
      // Split stage2 into 3 sequential phases (requested):
      // 1) background slide in (0.00 -> 0.25)
      // 2) then text fades in (0.25 -> 0.43)  [same 0.18 ramp as Matcha heading]
      // 3) then image moves bottom -> top (0.43 -> 1.00)
      const bgT = easeOut(clamp01(stage2P / 0.25));
      const stage2TextT = easeOut(clamp01((stage2P - 0.25) / 0.18));
      const imgT = easeOut(clamp01((stage2P - 0.43) / 0.57));

      // Stage 2 background: slide in to cover the full viewport (no partial height).
      stage2Bg.style.transform = `translate3d(0, ${(1 - bgT) * 100}%, 0)`;

      // Stage 2 image motion starts ONLY after text is visible.
      const coffeeTranslateY = lerp(vh * 0.9, -vh * 1.25, imgT);
      stage2Image.style.transform = `translate3d(-50%, calc(-50% + ${coffeeTranslateY.toFixed(
        2
      )}px), 0)`;
      // Make the image clearly sit "on top" once phase 3 begins by fading it in quickly to opaque.
      const imgOpacityT = easeOut(clamp01((stage2P - 0.43) / 0.07));
      stage2Image.style.opacity = String(imgOpacityT);

      // Stage 2 text: fade in only after background is in (phase 2).
      const coffeeOpacityIn = stage2TextT;

      // Only start computing fade-out after the image is actually moving/visible.
      let coffeeOpacityOut = 1;
      if (imgT > 0.01) {
        const coffeeRect = stage2Image.getBoundingClientRect();
        const coffeeOutT = clamp01((-40 - coffeeRect.bottom) / 120);
        coffeeOpacityOut = 1 - easeOut(coffeeOutT);
      }

      stage2Text.style.opacity = String(coffeeOpacityIn * coffeeOpacityOut);
      stage2Text.style.transform = `translate3d(-50%, calc(-50% + ${lerp(
        20,
        0,
        coffeeOpacityIn
      ).toFixed(2)}px), 0)`;

      rafId = 0;
    };

    // Full-bleed WITHOUT viewport units:
    // Instead of width:100vw/dvw (which can cause 1–2px overflow), we “cancel out”
    // the global `#root` padding by applying equal negative margins on this section.
    const syncFullBleedToRootPadding = () => {
      const rootEl = document.getElementById("root");
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
        minHeight: "520vh",
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
              marginBottom: "-0.65em",
            }}
          >
            Fallen for
          </span>
          <span
            className="font-sans font-black"
            style={{
              // Keep the big MATCHA exactly as the main visual
              fontSize: "min(26vw, 420px)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
            }}
          >
            MATCHA
          </span>
          <span
            style={{
              fontFamily: "Agright, sans-serif",
              fontWeight: 400,
              fontSize: "min(6vw, 60px)",
              lineHeight: 1,
              marginTop: "-0.35em",
            }}
          >
            yet?
          </span>
        </h2>

        {/* Stage 2 (COFFEE): same scene structure as Matcha, but with a different background + image + text */}
        <div
          // Single fixed overlay wrapper to guarantee layering order (matches Matcha behavior).
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 30,
            pointerEvents: "none",
          }}
        >
          <div
            ref={stage2BgRef}
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#BEA791",
              transform: "translate3d(0, 100%, 0)",
              willChange: "transform",
            }}
          />

          {/* Text is below the image */}
          <h2
            ref={stage2TextRef}
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
                marginBottom: "-0.65em",
                color: "#EAE1CF",
              }}
            >
              Or sticking with
            </span>
            <span
              className="font-sans"
              style={{
                // Keep the big MATCHA exactly as the main visual
                fontSize: "min(26vw, 420px)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                color: "#EAE1CF",
              }}
            >
              COFFEE
            </span>
          </h2>

          {/* Image is on top of text */}
          <img
            ref={stage2ImageRef}
            src={coffeeSell}
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "min(420px, 95vw)",
              height: "auto",
              transform: "translate3d(-50%, -50%, 0)",
              backgroundColor: "#EAE1CF",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.18)",
              opacity: 0,
              willChange: "transform, opacity",
              zIndex: 2,
              userSelect: "none",
            }}
          />
        </div>
      </Container>
    </section>
  );
};

export default MatchaSection;
