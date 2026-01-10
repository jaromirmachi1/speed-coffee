import { forwardRef, useImperativeHandle, useRef } from "react";
import coffeeSell from "../../../assets/coffeeSell.png";

export interface CoffeeSectionUpdateParams {
  scrolledPx: number;
  vh: number;
  matchaImgBottom: number;
}

export interface CoffeeSectionHandle {
  update: (params: CoffeeSectionUpdateParams) => void;
  reset: () => void;
}

const CoffeeSection = forwardRef<CoffeeSectionHandle>((_, ref) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const prefixRef = useRef<HTMLSpanElement | null>(null);

  // 🔥 CAMERA (this is the magic)
  const coffeeCameraRef = useRef<HTMLSpanElement | null>(null);

  const stage2StartPxRef = useRef<number | null>(null);

  const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 2);
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const reset = () => {
    stage2StartPxRef.current = null;

    wrapperRef.current!.style.transform = "translate3d(0,0,0)";
    wrapperRef.current!.style.opacity = "1";

    bgRef.current!.style.transform = "translate3d(0,100%,0)";
    imageRef.current!.style.opacity = "0";
    textRef.current!.style.opacity = "0";
    prefixRef.current!.style.opacity = "0";
    prefixRef.current!.style.display = "block";

    coffeeCameraRef.current!.style.transform = "translateX(-10%) scale(1)";
  };

  const update = ({
    scrolledPx,
    vh,
    matchaImgBottom,
  }: CoffeeSectionUpdateParams) => {
    if (
      !wrapperRef.current ||
      !bgRef.current ||
      !imageRef.current ||
      !textRef.current ||
      !prefixRef.current ||
      !coffeeCameraRef.current
    )
      return;

    // 🔒 Arm coffee after Matcha exits
    if (stage2StartPxRef.current === null && matchaImgBottom <= -40) {
      stage2StartPxRef.current = scrolledPx;
    }

    if (stage2StartPxRef.current === null) return;

    const elapsed = Math.max(0, scrolledPx - stage2StartPxRef.current);

    // --- PX-BASED PHYSICS (MATCH MATCHA) ---
    const BG_PX = 260;
    const TEXT_PX = 220;
    const IMAGE_PX = 600;
    const ZOOM_PX = 520;

    const bgT = easeOut(clamp01(elapsed / BG_PX));
    const textT = easeOut(clamp01((elapsed - BG_PX) / TEXT_PX));
    const imgT = easeOut(clamp01((elapsed - BG_PX - TEXT_PX) / IMAGE_PX));
    const zoomT = easeOut(
      clamp01((elapsed - BG_PX - TEXT_PX - IMAGE_PX) / ZOOM_PX)
    );

    // --- BACKGROUND ---
    bgRef.current.style.transform = `translate3d(0, ${(1 - bgT) * 100}%, 0)`;

    // --- IMAGE ---
    const imgY = lerp(vh * 0.9, -vh * 1.25, imgT);
    imageRef.current.style.transform = `translate3d(-50%, calc(-50% + ${imgY}px), 0)`;
    imageRef.current.style.opacity = String(1 - zoomT);

    // --- TEXT ---
    textRef.current.style.opacity = String(textT);
    prefixRef.current.style.opacity = String(
      1 - clamp01((elapsed - 700) / 200)
    );
    if (zoomT > 0) prefixRef.current.style.display = "none";

    // 🔥🔥🔥 CAMERA ZOOM (YAMAMATCHA STYLE)
    const scale = lerp(1, 48, zoomT);
    coffeeCameraRef.current.style.transform = `
      translateX(-10%)
      scale(${scale})
    `;
  };

  useImperativeHandle(ref, () => ({ update, reset }), []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 30,
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#BEA791",
          transform: "translate3d(0,100%,0)",
        }}
      />

      <h2
        ref={textRef}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          whiteSpace: "nowrap",
          opacity: 0,
        }}
      >
        <span
          ref={prefixRef}
          style={{
            fontFamily: "Agright, sans-serif",
            fontSize: "min(6vw, 60px)",
            color: "#EAE1CF",
            display: "block",
            marginBottom: "-0.6em",
          }}
        >
          Or sticking with
        </span>

        {/* 🎥 CAMERA */}
        <span
          ref={coffeeCameraRef}
          style={{
            display: "inline-block",
            transformOrigin: "58% 50%",
            willChange: "transform",
          }}
        >
          <span
            style={{
              fontSize: "min(26vw, 520px)",
              letterSpacing: "0.04em",
              lineHeight: 0.9,
              color: "#EAE1CF",
              display: "inline-block",
            }}
          >
            COFFEE
          </span>
        </span>
      </h2>

      <img
        ref={imageRef}
        src={coffeeSell}
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "min(420px, 95vw)",
          transform: "translate(-50%, -50%)",
          borderRadius: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,.18)",
          opacity: 0,
        }}
      />
    </div>
  );
});

CoffeeSection.displayName = "CoffeeSection";
export default CoffeeSection;
