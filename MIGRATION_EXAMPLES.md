# Next.js Migration - Example Files

This document shows exactly how your current files should be transformed for Next.js.

## 1. Root Layout (`src/app/layout.tsx`)

**Replaces:** `src/App.tsx` + `src/main.tsx` + `index.html`

```tsx
import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "@/styles/fonts.css";
import "@/styles/animations.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Speed Coffee - Mobile Coffee Van",
  description: "Premium mobile coffee van serving the Czech Republic. Discover our signature coffee blends, matcha selections, and book us for your event.",
  keywords: ["coffee", "mobile coffee", "coffee van", "matcha", "czech republic", "events"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Scroll restoration script from index.html */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var hasHash = !!(window.location.hash && window.location.hash !== "#");
                  if ("scrollRestoration" in window.history && !hasHash) {
                    window.history.scrollRestoration = "manual";
                  }
                  var scrollTop = function () {
                    if (hasHash) return;
                    window.scrollTo(0, 0);
                  };
                  scrollTop();
                  document.addEventListener("DOMContentLoaded", scrollTop, { once: true });
                  window.addEventListener("load", scrollTop, { once: true });
                  window.addEventListener("pageshow", function (e) {
                    if (!hasHash && e && e.persisted) scrollTop();
                  });
                  requestAnimationFrame(scrollTop);
                  requestAnimationFrame(function () {
                    requestAnimationFrame(scrollTop);
                  });
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-beige">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
```

## 2. Home Page (`src/app/page.tsx`)

**Replaces:** `src/App.tsx` logic + `src/pages/Home/Home.tsx`

```tsx
"use client";

import { useRef, useState } from "react";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import IntroLoader from "@/components/IntroLoader";
import Home from "@/components-pages/Home/Home";
import { motion } from "framer-motion";

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [introComplete, setIntroComplete] = useState(false);

  // Initialize custom cursor
  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(111, 50, 65, 0.4)",
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });

  // Initialize smooth scroll
  useSpeedCoffeeMotion(rootRef, introComplete);

  return (
    <>
      <IntroLoader onComplete={() => setIntroComplete(true)} duration={3500} />
      {introComplete && (
        <motion.div
          ref={rootRef}
          id="top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Home />
        </motion.div>
      )}
    </>
  );
}
```

## 3. Move Home Component (`src/components-pages/Home/Home.tsx`)

**Keep as is, but ensure it has `"use client"`:**

```tsx
"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
// ... rest stays the same
```

## 4. Component Updates - Add `"use client"`

All these files need `"use client"` at the top:

- `src/components/Header/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/IntroLoader.tsx`
- `src/pages/Home/components/*.tsx` (all of them)
- `src/contexts/LanguageContext.tsx` (if it uses hooks)

## 5. Image Helper (`src/lib/imageHelper.ts`)

Create this helper to handle image imports consistently:

```tsx
// Helper to get image src for both Vite and Next.js
export function getImageSrc(image: string | { src?: string }): string {
  if (typeof image === "string") {
    return image;
  }
  // Next.js static import returns { src, ... }
  return image.src || "";
}
```

Then update image usage:
```tsx
// Before (Vite)
import logoSc from "../../assets/images/logoSc.webp";
<img src={logoSc} />

// After (Next.js compatible)
import logoSc from "@/assets/images/logoSc.webp";
import { getImageSrc } from "@/lib/imageHelper";
<img src={getImageSrc(logoSc)} />
```

## 6. Path Aliases Setup

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Then update all imports:
- `../../components/` → `@/components/`
- `../../../assets/` → `@/assets/`
- etc.

## 7. Next.js Config (`next.config.js`)

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    // If using static imports
    unoptimized: false,
  },
  // Handle font files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig;
```

## File Structure Comparison

### Current (Vite):
```
src/
├── App.tsx
├── main.tsx
├── pages/Home/
└── components/
```

### Next.js (App Router):
```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components-pages/   # Rename pages/ to components-pages/
│   └── Home/
└── components/
```

## Step-by-Step Migration

1. **Create `src/app/` directory**
2. **Move `src/index.css` → `src/app/globals.css`**
3. **Create `src/app/layout.tsx`** (use example above)
4. **Create `src/app/page.tsx`** (use example above)
5. **Rename `src/pages/` → `src/components-pages/`** (or keep as is)
6. **Add `"use client"` to all components using hooks**
7. **Update all imports to use `@/` alias**
8. **Create `next.config.js`**
9. **Update `tsconfig.json`**
10. **Install Next.js**: `npm install next@latest react@latest react-dom@latest`
11. **Update `package.json` scripts**
