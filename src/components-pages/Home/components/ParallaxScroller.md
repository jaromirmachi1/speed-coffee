# `ParallaxScroller`

Continuous parallax section with layered visuals that:

- Auto-animates layers on load (even with no scroll)
- Boosts motion with **scroll velocity** (classic “alive” feel)
- Uses `transform: translate3d()` updates inside a single `requestAnimationFrame` loop for smooth 60fps
- Respects `prefers-reduced-motion` (no velocity boost, no continuous looping; simple scroll-based translate instead)

## Usage

`ParallaxScroller` is exported from `src/pages/Home/components/index.ts`.

```tsx
import { ParallaxScroller } from "./components";

<ParallaxScroller
  heightVh={140}
  direction="down"
  velocityFactor={0.22}
  layerSpacing={160}
  layers={[
    {
      depth: 0.25,
      baseSpeed: 10,
      content: <div>far layer</div>,
    },
    {
      depth: 1,
      baseSpeed: 22,
      content: <div>near layer</div>,
    },
  ]}
/>
```

## Layers

Each layer is an object:

- **`content`**: the visual element (shape/image/graphic)
- **`depth`**: \(0.2–1.0\). Higher = closer = moves more
- **`baseSpeed`**: base speed in px/sec (before depth scaling)
- **`className`**: optional extra classes for the layer wrapper
- **`initialY`**: optional starting Y offset (px)

## Tuning

- **`velocityFactor`**: how hard scroll velocity boosts movement.
  - Lower: `0.12` (subtle)
  - Default-ish: `0.22`
  - Higher: `0.30+` (more dramatic)

- **`layerSpacing`**: vertical spacing between layers while looping.
  - Increase if layers look crowded.

- **`maxVelocityBoost`**: caps scroll boost in px/sec to prevent crazy speeds on fast trackpads.

## Reduced motion behavior

If `prefers-reduced-motion: reduce` is enabled:

- No continuous auto loop
- No velocity boost
- Layers instead translate gently based on scroll position (simple parallax)

