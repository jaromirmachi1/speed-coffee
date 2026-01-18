import { forwardRef, useImperativeHandle, useRef } from "react";
import coffeeSell from "../../../assets/coffeeSell.png";

export interface CoffeeSectionUpdateParams {
  scrolledPx: number;
  vh: number;
  matchaImgBottom: number;
  sectionHeight: number;
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
  const cameraRef = useRef<HTMLSpanElement | null>(null);

  const startPxRef = useRef<number | null>(null);

  const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 2);
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const reset = () => {
    startPxRef.current = null;

    wrapperRef.current!.style.transform = "translate3d(0,0,0)";
    bgRef.current!.style.transform = "translate3d(0,100%,0)";
    imageRef.current!.style.opacity = "0";
    textRef.current!.style.opacity = "0";

    prefixRef.current!.style.opacity = "0";
    prefixRef.current!.style.display = "block";

    cameraRef.current!.style.transform = "translateX(0px) scale(1)";
  };

  const update = ({
    scrolledPx,
    vh,
    matchaImgBottom,
    sectionHeight,
  }: CoffeeSectionUpdateParams) => {
    if (
      !wrapperRef.current ||
      !bgRef.current ||
      !imageRef.current ||
      !textRef.current ||
      !prefixRef.current ||
      !cameraRef.current
    )
      return;

    // Arm after Matcha exits
    if (startPxRef.current === null && matchaImgBottom <= -40) {
      startPxRef.current = scrolledPx;
    }
    if (startPxRef.current === null) return;

    const elapsed = Math.max(0, scrolledPx - startPxRef.current);

    // Phase durations for other elements
    const BG_PX = 260;
    const TEXT_PX = 220;

    // Image movement - wait for BG and TEXT, then move slowly like MatchaSection
    // Use a large scroll distance to match MatchaSection's speed
    // MatchaSection uses the full section height (520vh), so use a similar large distance
    const IMAGE_PX = Math.max(3000, sectionHeight * 0.5); // Large distance for slow movement
    const imageStartPx = BG_PX + TEXT_PX;
    const imageElapsed = Math.max(0, elapsed - imageStartPx);
    const imgT = easeOut(clamp01(imageElapsed / IMAGE_PX));

    const bgT = easeOut(clamp01(elapsed / BG_PX));
    const textT = easeOut(clamp01((elapsed - BG_PX) / TEXT_PX));

    /* ---------------- BACKGROUND ---------------- */
    bgRef.current.style.transform = `translate3d(0, ${(1 - bgT) * 100}%, 0)`;

    /* ---------------- IMAGE ---------------- */
    // Use EXACT same calculation as MatchaSection for image movement
    // MatchaSection: lerp(vh * 0.9, -vh * 1.25, easeOut(p))
    // Image only starts moving after BG + TEXT phases complete, then moves slowly
    const imgY = lerp(vh * 0.9, -vh * 1.25, imgT);
    imageRef.current.style.transform = `translate3d(-50%, calc(-50% + ${imgY}px), 0)`;

    // Get image position after transform to check when it goes above viewport
    const imgRect = imageRef.current.getBoundingClientRect();

    // ZOOM phase starts when image bottom goes above viewport top (similar to MatchaSection)
    // Increased distance for slower, smoother zoom: starts at ~40px above, ends by ~400px above
    const zoomProgress = clamp01((-40 - imgRect.bottom) / 360);
    // Use smoother easing for zoom (easeOut is already smooth, but we can make it even smoother)
    const zoomT = easeOut(zoomProgress);

    // Only start zoom when image bottom is above viewport top (imgRect.bottom <= -40)
    // Before that, zoomT will be 0, so zoom won't happen
    const finalZoomT = imgRect.bottom <= -40 ? zoomT : 0;

    imageRef.current.style.opacity = String(1 - finalZoomT);

    /* ---------------- TEXT ---------------- */
    textRef.current.style.opacity = String(textT);

    // Prefix fades out right before zoom begins (when image approaches viewport top)
    // Start fading when image bottom reaches ~20px above viewport, complete by ~40px (when zoom starts)
    const prefixFadeProgress = clamp01((-20 - imgRect.bottom) / 20);
    const prefixFadeT = easeOut(prefixFadeProgress);
    prefixRef.current.style.opacity = String(1 - prefixFadeT);
    // Hide prefix when zoom starts (image above viewport)
    prefixRef.current.style.display = finalZoomT >= 1 ? "none" : "block";

    /* ---------------- CAMERA ZOOM (yamamatcha-style) ---------------- */
    // Zoom only happens when image is above viewport top
    const scale = lerp(1, 48, finalZoomT);
    const offsetX = lerp(0, -10, finalZoomT); // only bias DURING zoom

    cameraRef.current.style.transform = `
      translateX(${offsetX}px)
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
          whiteSpace: "nowrap",
          textAlign: "center",
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

        {/* CAMERA */}
        <span
          ref={cameraRef}
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
