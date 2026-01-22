import { forwardRef, useImperativeHandle, useRef } from "react";
import coffeeSell from "../../../assets/images/coffeeSell.png";

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
  // Mobile detection for performance optimization
  const isMobileRef = useRef(window.innerWidth < 768);
  // Cache for getBoundingClientRect on mobile
  const cachedImgBottomRef = useRef(0);
  const rectCacheFrameRef = useRef(0);

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
    // Reduce precision on mobile for better performance
    const precision = isMobileRef.current ? 0 : 2;
    imageRef.current.style.transform = `translate3d(-50%, calc(-50% + ${imgY.toFixed(
      precision
    )}px), 0)`;

    // Get image position after transform to check when it goes above viewport
    // On mobile: cache getBoundingClientRect to reduce reflows (only update every few frames)
    let imgRectBottom: number;
    if (isMobileRef.current && rectCacheFrameRef.current % 3 !== 0) {
      // Use cached value on mobile, estimate based on transform
      imgRectBottom = cachedImgBottomRef.current + (imgY - (cachedImgBottomRef.current - vh * 0.5));
    } else {
      const imgRect = imageRef.current.getBoundingClientRect();
      imgRectBottom = imgRect.bottom;
      cachedImgBottomRef.current = imgRectBottom;
      rectCacheFrameRef.current++;
    }

    // ZOOM phase starts when image bottom goes above viewport top (similar to MatchaSection)
    // Increased distance for slower, smoother zoom: starts at ~40px above, ends by ~400px above
    const zoomProgress = clamp01((-40 - imgRectBottom) / 360);
    // Use smoother easing for zoom (easeOut is already smooth, but we can make it even smoother)
    const zoomT = easeOut(zoomProgress);

    // Only start zoom when image bottom is above viewport top (imgRectBottom <= -40)
    // Before that, zoomT will be 0, so zoom won't happen
    const finalZoomT = imgRectBottom <= -40 ? zoomT : 0;

    // Round opacity on mobile for better performance
    imageRef.current.style.opacity = String(
      isMobileRef.current
        ? Math.round((1 - finalZoomT) * 100) / 100
        : 1 - finalZoomT
    );

    /* ---------------- TEXT ---------------- */
    textRef.current.style.opacity = String(
      isMobileRef.current ? Math.round(textT * 100) / 100 : textT
    );

    // Prefix fades out right before zoom begins (when image approaches viewport top)
    // Start fading when image bottom reaches ~20px above viewport, complete by ~40px (when zoom starts)
    const prefixFadeProgress = clamp01((-20 - imgRectBottom) / 20);
    const prefixFadeT = easeOut(prefixFadeProgress);
    prefixRef.current.style.opacity = String(
      isMobileRef.current ? Math.round((1 - prefixFadeT) * 100) / 100 : 1 - prefixFadeT
    );
    // Hide prefix when zoom starts (image above viewport)
    prefixRef.current.style.display = finalZoomT >= 1 ? "none" : "block";

    /* ---------------- CAMERA ZOOM (yamamatcha-style) ---------------- */
    // Zoom only happens when image is above viewport top
    // On mobile, use larger scale to ensure full coverage and hide brown background
    const maxScale = isMobileRef.current ? 80 : 48;
    const scale = lerp(1, maxScale, finalZoomT);
    const offsetX = lerp(0, -10, finalZoomT); // only bias DURING zoom

    // Reduce precision on mobile for better performance
    cameraRef.current.style.transform = `
      translateX(${offsetX.toFixed(precision)}px)
      scale(${scale.toFixed(precision)})
    `;
    
    // On mobile, also scale the background to ensure it covers during zoom and hides brown background
    if (isMobileRef.current && finalZoomT > 0) {
      const bgScale = lerp(1, maxScale * 0.8, finalZoomT);
      bgRef.current.style.transform = `translate3d(0, ${(1 - bgT) * 100}%, 0) scale(${bgScale.toFixed(precision)})`;
    }
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
            marginBottom: "-0.2em",
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
        className="w-[min(280px,70vw)] md:w-[min(420px,95vw)]"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
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
