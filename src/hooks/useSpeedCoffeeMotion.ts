import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import type { RefObject } from "react";

/**
 * SpeedCoffee motion system
 * - Calm easing + slightly heavier wheel feel (Lenis)
 * - Keeps GSAP ScrollTrigger in sync with Lenis (ScrollTrigger.update)
 * - Disables itself when prefers-reduced-motion is enabled
 *
 * NOTE: Uses gsap.context for safe scoping + cleanup during HMR/dev.
 */
export function useSpeedCoffeeMotion(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef?.current;
    if (!root) return;

    // By default, browsers restore scroll position on refresh/back-forward.
    // For this site we want a clean "start at top" on reload, but still respect deep links (#hash).
    const hasHash = Boolean(window.location.hash && window.location.hash !== "#");
    const canControlRestoration = "scrollRestoration" in window.history;
    const prevRestoration =
      canControlRestoration && window.history.scrollRestoration
        ? window.history.scrollRestoration
        : null;
    if (!hasHash && canControlRestoration) {
      window.history.scrollRestoration = "manual";
    }

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    gsap.registerPlugin(ScrollTrigger);
    if (reduceMotion) {
      // Ensure we also reset scroll on refresh even when motion system is disabled.
      if (!hasHash) window.scrollTo(0, 0);

      const onPageShow = (e: PageTransitionEvent) => {
        if (!hasHash && e.persisted) window.scrollTo(0, 0);
      };
      window.addEventListener("pageshow", onPageShow);

      return () => {
        window.removeEventListener("pageshow", onPageShow);
        if (!hasHash && canControlRestoration && prevRestoration) {
          window.history.scrollRestoration = prevRestoration;
        }
      };
    }

    const lenis = new Lenis({
      duration: 1.18,
      smoothWheel: true,
      smoothTouch: false,
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // close to power2.out
    });

    // Force top on refresh/load (unless URL has a hash deep link).
    if (!hasHash) {
      window.scrollTo(0, 0);
      // Lenis may apply its own internal scroll state; sync it immediately.
      try {
        lenis.scrollTo(0, { immediate: true });
      } catch {
        // ignore
      }
    }

    // Keep ScrollTrigger synced with Lenis scroll.
    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    // Drive Lenis via GSAP ticker (standard integration).
    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    gsap.defaults({ ease: "power2.out" });

    // Optional selector-based animations (safe if elements don’t exist).
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".site-header",
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0, duration: 1.6, ease: "power2.out", delay: 0.05 }
      );

      gsap.fromTo(
        ".hero-content",
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 2.1, ease: "power2.out", delay: 0.15 }
      );

      gsap.fromTo(
        ".hero-media img",
        { scale: 1.02 },
        {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        ".material-card",
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#materials",
            start: "top 72%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".process-copy > *",
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".process", start: "top 75%", once: true },
        }
      );

      gsap.fromTo(
        ".process-media",
        { clipPath: "inset(0 0 100% 0 round 22px)" },
        {
          clipPath: "inset(0 0 0% 0 round 22px)",
          duration: 2.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".process",
            start: "top 72%",
            end: "bottom 55%",
          },
        }
      );

      const panels = gsap.utils.toArray<HTMLElement>(".gallery-panel");
      if (panels.length) {
        gsap.set(panels, {
          autoAlpha: 0,
          scale: 1.04,
          transformOrigin: "center",
        });
        gsap.set(panels[0], { autoAlpha: 1, scale: 1.01 });

        const tl = gsap.timeline({
          defaults: { ease: "power1.out" },
          scrollTrigger: {
            trigger: ".gallery",
            start: "top top",
            end: `+=${Math.max(2400, panels.length * 1200)}`,
            scrub: 1.15,
            pin: ".gallery-pin",
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        for (let i = 1; i < panels.length; i += 1) {
          tl.to(
            panels[i - 1],
            { autoAlpha: 0, scale: 1.02, duration: 1.1 },
            "+=0.35"
          );
          tl.to(panels[i], { autoAlpha: 1, scale: 1.0, duration: 1.2 }, "<");
        }

        gsap.fromTo(
          ".gallery-copy",
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 1.8,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".gallery",
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      gsap.fromTo(
        ".cta-inner",
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.7,
          ease: "power2.out",
          scrollTrigger: { trigger: ".cta", start: "top 78%", once: true },
        }
      );
    }, root);

    // Smooth anchor clicks with Lenis (keeps the same eased feel as wheel).
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const a = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;

      const href = a.getAttribute("href") || "";
      if (!href.startsWith("#") || href === "#") return;

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el, { duration: 1.18, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
      history.pushState(null, "", href);
    };
    root.addEventListener("click", onClick);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    const onPageShow = (e: PageTransitionEvent) => {
      // When coming from bfcache, the browser may restore scroll. Keep it consistent.
      if (!hasHash && e.persisted) {
        window.scrollTo(0, 0);
        try {
          lenis.scrollTo(0, { immediate: true });
        } catch {
          // ignore
        }
        ScrollTrigger.refresh();
      }
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("pageshow", onPageShow);
      root.removeEventListener("click", onClick);
      ctx.revert();
      lenis.off("scroll", onLenisScroll);
      try {
        lenis.destroy();
      } catch {
        // ignore
      }
      gsap.ticker.remove(onTick);
      if (!hasHash && canControlRestoration && prevRestoration) {
        window.history.scrollRestoration = prevRestoration;
      }
    };
  }, [rootRef]);
}


