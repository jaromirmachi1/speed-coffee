import { forwardRef, useImperativeHandle, useRef } from "react";
import coffeeSell from "../../../assets/coffeeSell.png";

export interface CoffeeSectionUpdateParams {
  /** Section scroll progress from the Matcha parent (0..1). */
  p: number;
  /** Current viewport height in px. */
  vh: number;
  /** Matcha image rect.bottom in viewport coordinates (post-transform). */
  matchaImgBottom: number;
}

export interface CoffeeSectionHandle {
  update: (params: CoffeeSectionUpdateParams) => void;
  reset: () => void;
}

/**
 * Coffee stage overlay.
 * All "coffee section" refs + animation math live here.
 * Parent drives it by calling `ref.current.update({ p, vh, matchaImgBottom })`.
 */
const CoffeeSection = forwardRef<CoffeeSectionHandle>((_, ref) => {
  const stage2BgRef = useRef<HTMLDivElement | null>(null);
  const stage2ImageRef = useRef<HTMLImageElement | null>(null);
  const stage2TextRef = useRef<HTMLHeadingElement | null>(null);
  const stage2PrefixRef = useRef<HTMLSpanElement | null>(null);
  const stage2CoffeeRef = useRef<HTMLSpanElement | null>(null);
  const stage2WrapperRef = useRef<HTMLDivElement | null>(null);

  const stage3BgRef = useRef<HTMLDivElement | null>(null);
  const stage3ContentRef = useRef<HTMLDivElement | null>(null);

  const stage2StartPRef = useRef<number | null>(null);

  const easeOut = (t: number) => 1 - Math.pow(1 - t, 2);
  const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const reset = () => {
    stage2StartPRef.current = null;

    stage2WrapperRef.current?.style.setProperty(
      "transform",
      "translate3d(0, 0%, 0)"
    );
    stage2WrapperRef.current?.style.setProperty("opacity", "1");

    stage2BgRef.current?.style.setProperty(
      "transform",
      "translate3d(0, 100%, 0)"
    );
    stage2BgRef.current?.style.setProperty("background-color", "#BEA791");

    stage2ImageRef.current?.style.setProperty("opacity", "0");
    stage2TextRef.current?.style.setProperty("opacity", "0");
    stage2PrefixRef.current?.style.setProperty("opacity", "0");
    stage2PrefixRef.current?.style.setProperty("display", "block");
    // Restore responsive base sizing and remove any zoom-time overrides.
    stage2CoffeeRef.current?.style.setProperty("font-size", "min(26vw, 520px)");
    stage2CoffeeRef.current?.style.setProperty("transform", "none");

    stage3BgRef.current?.style.setProperty(
      "transform",
      "translate3d(0, 100%, 0)"
    );
    stage3BgRef.current?.style.setProperty("background-color", "#BEA791");
    stage3ContentRef.current?.style.setProperty("opacity", "0");
  };

  const update = ({ p, vh, matchaImgBottom }: CoffeeSectionUpdateParams) => {
    const stage2Bg = stage2BgRef.current;
    const stage2Image = stage2ImageRef.current;
    const stage2Text = stage2TextRef.current;
    const stage2Prefix = stage2PrefixRef.current;
    const stage2Coffee = stage2CoffeeRef.current;
    const stage2Wrapper = stage2WrapperRef.current;
    const stage3Bg = stage3BgRef.current;
    const stage3Content = stage3ContentRef.current;

    if (
      !stage2Bg ||
      !stage2Image ||
      !stage2Text ||
      !stage2Prefix ||
      !stage2Coffee ||
      !stage2Wrapper ||
      !stage3Bg ||
      !stage3Content
    ) {
      return;
    }

    // STRICT gating: stage2 must NOT begin until Matcha is fully out AND the Matcha heading is gone.
    // Matcha heading fade-out completes when matchaImgBottom is around -160 (see Matcha outT mapping).
    const stage2ArmPx = -160;
    if (stage2StartPRef.current === null && matchaImgBottom <= stage2ArmPx) {
      stage2StartPRef.current = p;
    }

    // Reserve scroll space AFTER stage 2 for the "beige exits → brown fills → new section" transition.
    const stage2DurationP = 0.55;
    const stage3DurationP = 0.18;

    const stage2StartP = stage2StartPRef.current;
    // If stage2 arms late, we must still allow it to reach the zoom before stage3 starts.
    // So we shrink the stage2 duration to whatever scroll remains before the stage3 window.
    const stage2MaxEndP = 1 - stage3DurationP;
    const stage2DurationEffective =
      stage2StartP === null
        ? stage2DurationP
        : Math.max(
            0.001,
            Math.min(stage2DurationP, stage2MaxEndP - stage2StartP)
          );

    const stage2P =
      stage2StartP === null
        ? 0
        : clamp01((p - stage2StartP) / stage2DurationEffective);

    // Split stage2 into 4 sequential phases:
    // 1) background slide in (0.00 -> 0.20)
    // 2) heading fades in (0.20 -> 0.35)
    // 3) image moves bottom -> top (0.35 -> 0.75)
    // 4) cinematic zoom into the center of "COFFEE" (0.75 -> 1.00)
    const bgT = easeOut(clamp01(stage2P / 0.2));
    const stage2TextT = easeOut(clamp01((stage2P - 0.2) / 0.15));
    const imgT = easeOut(clamp01((stage2P - 0.35) / 0.4));
    const zoomT = easeOut(clamp01((stage2P - 0.75) / 0.25));

    // Stage 2 background: slide in to cover the full viewport.
    stage2Bg.style.transform = `translate3d(0, ${(1 - bgT) * 100}%, 0)`;
    stage2Bg.style.backgroundColor = "#BEA791";

    // Stage 2 image motion (matcha settings, later start).
    const coffeeTranslateY = lerp(vh * 0.9, -vh * 1.25, imgT);
    stage2Image.style.transform = `translate3d(-50%, calc(-50% + ${coffeeTranslateY.toFixed(
      2
    )}px), 0)`;
    const imgOpacityT = easeOut(clamp01((stage2P - 0.35) / 0.06));
    stage2Image.style.opacity = String(imgOpacityT * (1 - zoomT));

    // Text in; only fade out the "Or sticking with" line.
    stage2Text.style.opacity = String(stage2TextT);
    const prefixOutT = easeOut(clamp01((stage2P - 0.55) / 0.15));
    stage2Prefix.style.opacity = String(stage2TextT * (1 - prefixOutT));
    stage2Text.style.transform = `translate3d(-50%, calc(-50% + ${lerp(
      20,
      0,
      stage2TextT
    ).toFixed(2)}px), 0)`;

    // Zoom: keep text crisp by animating font-size (no transform-based scaling).
    // Initial size matches CSS: min(26vw, 520px)
    const vw = window.innerWidth || 0;
    const initialFontPx = Math.min(vw * 0.26, 520);
    // Large cinematic target; cap to avoid extreme layout values on very large screens.
    const cinematicFontPx = Math.min(initialFontPx * 40, 12000);
    const coffeeFontPx = lerp(initialFontPx, cinematicFontPx, zoomT);
    stage2Coffee.style.fontSize = `${coffeeFontPx.toFixed(2)}px`;
    // After the prefix fully fades, remove it from layout to keep the zoom centered on "COFFEE".
    stage2Prefix.style.display =
      prefixOutT >= 0.999 || zoomT > 0 ? "none" : "block";

    stage2Wrapper.style.opacity = "1";

    // Stage 3: only start after stage2 has started AND completed.
    const stage2Complete = stage2StartP !== null && stage2P >= 1;
    const stage2EndP =
      stage2StartP === null ? 1 : stage2StartP + stage2DurationEffective;
    const stage3P = stage2Complete
      ? clamp01((p - stage2EndP) / stage3DurationP)
      : 0;
    const stage3T = easeOut(stage3P);

    // Keep stage 3 using the SAME background color as stage 2 (enter into it).
    stage3Bg.style.backgroundColor =
      stage2Bg.style.backgroundColor || "#BEA791";

    // Beige exits (slides up out of the viewport)
    stage2Wrapper.style.transform = `translate3d(0, ${(-stage3T * 100).toFixed(
      3
    )}%, 0)`;

    // Brown expands (slides up) to fill the whole viewport
    stage3Bg.style.transform = `translate3d(0, ${(1 - stage3T) * 100}%, 0)`;

    // Once brown is fully in, introduce a new section on top.
    const stage3ContentT = easeOut(clamp01((stage3P - 0.9) / 0.1));
    stage3Content.style.opacity = String(stage3ContentT);
    stage3Content.style.transform = `translate3d(-50%, calc(-50% + ${
      (1 - stage3ContentT) * 20
    }px), 0)`;
  };

  useImperativeHandle(ref, () => ({ update, reset }), []);

  return (
    <>
      {/* Stage 2 (COFFEE): fixed overlay */}
      <div
        ref={stage2WrapperRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 30,
          pointerEvents: "none",
          opacity: 1,
          transform: "translate3d(0, 0%, 0)",
          willChange: "transform, opacity",
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
            ref={stage2PrefixRef}
            style={{
              fontFamily: "Agright, sans-serif",
              fontWeight: 400,
              fontSize: "min(6vw, 60px)",
              lineHeight: 1,
              marginBottom: "-0.65em",
              color: "#EAE1CF",
              opacity: 0,
              willChange: "opacity",
            }}
          >
            Or sticking with
          </span>
          <span
            className="font-sans"
            ref={stage2CoffeeRef}
            style={{
              fontSize: "min(26vw, 520px)",
              lineHeight: 0.9,
              letterSpacing: "0.04em",
              color: "#EAE1CF",
              willChange: "font-size",
            }}
          >
            COFFEE
          </span>
        </h2>

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

      {/* Stage 3: coffee background becomes locked base */}
      <div
        ref={stage3BgRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#BEA791",
          transform: "translate3d(0, 100%, 0)",
          willChange: "transform",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />

      <div
        ref={stage3ContentRef}
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate3d(-50%, calc(-50% + 20px), 0)",
          opacity: 0,
          zIndex: 40,
          pointerEvents: "none",
          textAlign: "center",
          color: "#EAE1CF",
          willChange: "transform, opacity",
        }}
      >
        <div
          style={{
            fontFamily: "Agright, sans-serif",
            fontWeight: 400,
            fontSize: "min(6vw, 60px)",
            lineHeight: 1,
            marginBottom: "-0.2em",
          }}
        >
          Next up
        </div>
        <div
          className="font-sans font-black"
          style={{
            fontSize: "min(18vw, 240px)",
            lineHeight: 0.9,
            letterSpacing: "0.04em",
          }}
        >
          COFFEE
        </div>
      </div>
    </>
  );
});

CoffeeSection.displayName = "CoffeeSection";

export default CoffeeSection;
