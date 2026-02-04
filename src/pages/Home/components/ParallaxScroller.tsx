import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/**
 * ParallaxScroller: Infinite horizontal marquee with parallax and scroll velocity.
 *
 * Uses leapfrog marquee pattern:
 * - Each row contains exactly TWO identical tracks
 * - Each track has its own independent X position
 * - Tracks always overlap viewport (one always covers it)
 * - Wrap before gap becomes visible: if (x <= -trackWidth + viewportWidth)
 * - Reposition behind other track: trackAX = trackBX + trackWidth
 * - No blank gaps, no snapping, seamless infinite loop
 */

export type ParallaxDirection = "left" | "right";

export interface ParallaxLayer {
  content: React.ReactNode;
  depth: number;
  baseSpeed?: number; // px/sec (positive = right, negative = left)
  className?: string;
  yOffset?: number;
}

export interface ParallaxScrollerProps {
  layers: ParallaxLayer[];
  heightVh?: number;
  direction?: ParallaxDirection;
  velocityFactor?: number;
  maxVelocityBoost?: number;
  layerSpacing?: number;
  className?: string;
}

export default function ParallaxScroller({
  layers,
  heightVh = 70,
  velocityFactor = 0.22,
  maxVelocityBoost = 1400,
  layerSpacing = 140,
  className = "",
}: ParallaxScrollerProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const rowElsRef = useRef<Array<HTMLDivElement | null>>([]); // [layerIndex]
  const trackElsRef = useRef<Array<Array<HTMLDivElement | null>>>([]); // [layerIndex][trackIndex]

  // Independent X positions for each track: [layerIndex][trackIndex]
  const trackXRef = useRef<Array<[number, number]>>([]); // [trackA, trackB]
  const trackWidthsRef = useRef<number[]>([]); // Width of first track for each layer
  const rowHeightsRef = useRef<number[]>([]); // Height of first track for each layer

  const normalizedLayers = useMemo(() => {
    return layers.map((l) => ({
      ...l,
      depth: Math.min(1, Math.max(0.05, l.depth)),
      baseSpeed: l.baseSpeed ?? 18,
      yOffset: l.yOffset ?? 0,
    }));
  }, [layers]);

  // Measure track size and set row height so CSS gap/margins work.
  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const { width: vw } = viewport.getBoundingClientRect();

      for (let layerIdx = 0; layerIdx < normalizedLayers.length; layerIdx += 1) {
        const row = rowElsRef.current[layerIdx];
        const firstTrack = trackElsRef.current[layerIdx]?.[0];
        if (!row || !firstTrack) continue;

        const r = firstTrack.getBoundingClientRect();
        const w = Math.max(1, r.width || vw);
        const h = Math.max(1, r.height);

        trackWidthsRef.current[layerIdx] = w;
        rowHeightsRef.current[layerIdx] = h;

        // Critical: give the row a real height, otherwise rows overlap forever.
        row.style.height = `${h}px`;
      }

      // Initialize track positions after we know widths.
      trackXRef.current = normalizedLayers.map((_, i) => {
        const trackWidth = trackWidthsRef.current[i] || vw;
        return [0, trackWidth];
      });

      // Apply initial X transforms
      for (let layerIdx = 0; layerIdx < normalizedLayers.length; layerIdx += 1) {
        const tracks = trackElsRef.current[layerIdx] || [];
        if (!tracks[0] || !tracks[1]) continue;
        const [trackAX, trackBX] = trackXRef.current[layerIdx] || [0, 0];
        tracks[0].style.transform = `translate3d(${trackAX}px, 0, 0)`;
        tracks[1].style.transform = `translate3d(${trackBX}px, 0, 0)`;
      }
    };

    // Run once, then keep in sync on resizes.
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(viewport);

    for (let layerIdx = 0; layerIdx < normalizedLayers.length; layerIdx += 1) {
      const firstTrack = trackElsRef.current[layerIdx]?.[0];
      if (firstTrack) ro.observe(firstTrack);
    }

    return () => ro.disconnect();
  }, [normalizedLayers]);

  // Main animation loop (single rAF for all rows)
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    // Reduced motion: no loop, no velocity boost
    if (prefersReducedMotion) {
      const onScroll = () => {
        const scrollY = window.scrollY || 0;
        for (
          let layerIdx = 0;
          layerIdx < normalizedLayers.length;
          layerIdx += 1
        ) {
          const tracks = trackElsRef.current[layerIdx] || [];
          if (!tracks[0] || !tracks[1]) continue;

          const depth = normalizedLayers[layerIdx].depth;
          const x = scrollY * depth * 0.08;
          const trackWidth = trackWidthsRef.current[layerIdx] || 1;

          tracks[0].style.transform = `translate3d(${x}px, 0, 0)`;
          tracks[1].style.transform = `translate3d(${x + trackWidth}px, 0, 0)`;
        }
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    let raf = 0;
    let lastT = performance.now();

    let lastScrollY = window.scrollY || 0;
    let vel = 0; // px/sec

    const tick = (t: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (t - lastT) / 1000));
      lastT = t;

      // Calculate scroll velocity with smooth decay
      const curScrollY = window.scrollY || 0;
      const rawVel = (curScrollY - lastScrollY) / dt; // px/sec
      lastScrollY = curScrollY;

      // Smooth velocity (low-pass filter for inertia)
      vel = vel * 0.85 + rawVel * 0.15;
      const velBoostRaw = Math.max(
        -maxVelocityBoost,
        Math.min(maxVelocityBoost, vel * velocityFactor)
      );

      // Only apply scroll-velocity boost when section is in view
      const r = viewport.getBoundingClientRect();
      const inView = r.top < window.innerHeight && r.bottom > 0;
      const velBoost = inView ? velBoostRaw : 0;

      const viewportWidth = Math.max(1, viewport.getBoundingClientRect().width);

      // Animate each layer
      for (
        let layerIdx = 0;
        layerIdx < normalizedLayers.length;
        layerIdx += 1
      ) {
        const tracks = trackElsRef.current[layerIdx] || [];
        if (!tracks[0] || !tracks[1]) continue;

        const layer = normalizedLayers[layerIdx];
        const depth = layer.depth;
        const trackWidth = trackWidthsRef.current[layerIdx] || viewportWidth;

        // Calculate movement: base speed + scroll velocity boost
        // Positive baseSpeed = going right (x decreases/becomes negative)
        // Negative baseSpeed = going left (x increases/becomes positive)
        const base = -layer.baseSpeed * depth; // px/sec
        const dx = (base + velBoost * depth) * dt;

        // Get current independent track positions
        let [trackAX, trackBX] = trackXRef.current[layerIdx] || [0, trackWidth];

        // Update both track positions independently
        trackAX += dx;
        trackBX += dx;

        // Wrap logic: reposition before gap becomes visible
        // Critical: wrap condition is (x <= -trackWidth + viewportWidth)
        // This ensures we reposition before the track fully exits viewport
        if (layer.baseSpeed > 0) {
          // Going right: tracks move left (x decreases)
          // When trackA exits left, reposition it behind trackB
          if (trackAX <= -trackWidth + viewportWidth) {
            trackAX = trackBX + trackWidth;
          }
          // When trackB exits left, reposition it behind trackA
          if (trackBX <= -trackWidth + viewportWidth) {
            trackBX = trackAX + trackWidth;
          }
        } else {
          // Going left: tracks move right (x increases)
          // When trackA exits right, reposition it behind trackB
          if (trackAX >= viewportWidth) {
            trackAX = trackBX - trackWidth;
          }
          // When trackB exits right, reposition it behind trackA
          if (trackBX >= viewportWidth) {
            trackBX = trackAX - trackWidth;
          }
        }

        // Store updated positions
        trackXRef.current[layerIdx] = [trackAX, trackBX];

        tracks[0].style.transform = `translate3d(${trackAX}px, 0, 0)`;
        tracks[1].style.transform = `translate3d(${trackBX}px, 0, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [
    prefersReducedMotion,
    normalizedLayers,
    velocityFactor,
    maxVelocityBoost,
  ]);

  return (
    <section
      className={`bg-beige w-full mt-16 md:mt-24 ${className}`}
      style={{ height: `${heightVh}vh` }}
    >
      <div
        ref={viewportRef}
        className="relative w-full h-full overflow-hidden flex flex-col justify-center"
        style={{ gap: `${Math.max(0, layerSpacing)}px` }}
      >
        {normalizedLayers.map((layer, layerIdx) => (
          <div
            key={layerIdx}
            ref={(node) => {
              rowElsRef.current[layerIdx] = node;
            }}
            className="parallax-row relative w-full"
            style={{
              willChange: "transform",
              transform: layer.yOffset ? `translateY(${layer.yOffset}px)` : undefined,
            }}
          >
            {/* Exactly TWO tracks per layer - each with independent position */}
            <div
              ref={(node) => {
                if (!trackElsRef.current[layerIdx]) {
                  trackElsRef.current[layerIdx] = [];
                }
                trackElsRef.current[layerIdx][0] = node;
              }}
              className={`track absolute top-0 left-0 ${layer.className || ""}`}
              style={{
                willChange: "transform",
                transform: "translate3d(0, 0, 0)",
                whiteSpace: "nowrap",
              }}
            >
              {layer.content}
            </div>
            <div
              ref={(node) => {
                if (!trackElsRef.current[layerIdx]) {
                  trackElsRef.current[layerIdx] = [];
                }
                trackElsRef.current[layerIdx][1] = node;
              }}
              className={`track absolute top-0 left-0 ${layer.className || ""}`}
              style={{
                willChange: "transform",
                transform: "translate3d(0, 0, 0)",
                whiteSpace: "nowrap",
              }}
            >
              {layer.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
