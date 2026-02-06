# Next.js Migration Guide

This guide will help you migrate your React/Vite app to Next.js while maintaining all current functionality.

## Current Structure Analysis

### Current Setup (Vite + React)
- **Framework**: Vite + React 19
- **Routing**: Single page app (no routing library needed)
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion, Lenis (smooth scroll)
- **State**: React Context (LanguageContext)
- **Custom Hooks**: useCustomCursor, useSpeedCoffeeMotion

## Migration Steps

### 1. Install Next.js Dependencies

```bash
npm install next@latest react@latest react-dom@latest
npm install -D @types/node @types/react @types/react-dom
```

### 2. Update package.json Scripts

Replace Vite scripts with Next.js scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 3. File Structure Changes

#### Current Structure:
```
src/
├── App.tsx
├── main.tsx
├── pages/
│   └── Home/
└── components/
```

#### Next.js App Router Structure:
```
src/
├── app/
│   ├── layout.tsx          # Root layout (replaces App.tsx)
│   ├── page.tsx            # Home page (replaces pages/Home/Home.tsx)
│   ├── globals.css         # Global styles (move from index.css)
│   └── (shop)/             # Optional: shop route group
│       └── shop/
│           └── page.tsx
├── components/             # Keep as is
├── contexts/               # Keep as is
├── hooks/                  # Keep as is
├── lib/                    # Keep as is
└── styles/                 # Keep as is
```

### 4. Key Code Changes

#### A. Root Layout (`src/app/layout.tsx`)

**Current `App.tsx`:**
```tsx
import { useRef, useState } from "react";
import Home from "./pages/Home/Home";
import { useSpeedCoffeeMotion } from "./hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "./hooks/useCustomCursor";
import { LanguageProvider } from "./contexts/LanguageContext";
import IntroLoader from "./components/IntroLoader";
import { motion } from "framer-motion";
```

**New `src/app/layout.tsx`:**
```tsx
import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Speed Coffee - Mobile Coffee Van",
  description: "Premium mobile coffee van serving the Czech Republic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-beige">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
```

#### B. Home Page (`src/app/page.tsx`)

**Current `pages/Home/Home.tsx`** → **New `src/app/page.tsx`:**

```tsx
"use client"; // Required for hooks and client-side features

import { useRef, useState } from "react";
import Home from "@/components-pages/Home/Home";
import { useSpeedCoffeeMotion } from "@/hooks/useSpeedCoffeeMotion";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import IntroLoader from "@/components/IntroLoader";
import { motion } from "framer-motion";

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [introComplete, setIntroComplete] = useState(false);

  useCustomCursor({
    size: 20,
    hoverSize: 40,
    color: "rgba(111, 50, 65, 0.4)",
    transitionSpeed: 0.15,
    smoothing: 0.15,
  });

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

#### C. Component Changes

**All components that use:**
- Hooks (useState, useEffect, etc.)
- Browser APIs (window, document)
- Event listeners
- Framer Motion
- GSAP animations

**Must have `"use client"` directive at the top:**

```tsx
"use client";

import { useState } from "react";
// ... rest of component
```

#### D. Image Imports

**Current (Vite):**
```tsx
import logoSc from "./assets/images/logoSc.webp";
<img src={logoSc} alt="Logo" />
```

**Next.js (Option 1 - Static Import):**
```tsx
import logoSc from "@/assets/images/logoSc.webp";
<img src={logoSc.src} alt="Logo" />
// OR use next/image:
import Image from "next/image";
import logoSc from "@/assets/images/logoSc.webp";
<Image src={logoSc} alt="Logo" />
```

**Next.js (Option 2 - Public Folder):**
Move images to `public/images/` and reference:
```tsx
<img src="/images/logoSc.webp" alt="Logo" />
// OR
<Image src="/images/logoSc.webp" alt="Logo" width={100} height={100} />
```

### 5. Configuration Files

#### Create `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // If using custom fonts
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

#### Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 6. Asset Handling

#### Fonts
- Keep fonts in `src/assets/` or move to `public/fonts/`
- Import in `src/app/layout.tsx` or use CSS `@font-face`

#### Images
- Option 1: Keep in `src/assets/images/` (requires import)
- Option 2: Move to `public/images/` (direct URL access)

### 7. CSS Changes

#### Move `src/index.css` → `src/app/globals.css`

Update imports:
```css
/* Change relative paths */
@import "../styles/fonts.css";
@import "../styles/animations.css";
```

### 8. Client Component Checklist

Add `"use client"` to these files:
- ✅ `src/app/page.tsx`
- ✅ `src/components/Header/Header.tsx`
- ✅ `src/components/Footer.tsx`
- ✅ `src/components/IntroLoader.tsx`
- ✅ `src/pages/Home/Home.tsx` (or wherever it moves)
- ✅ All Home page components (Hero, About, Locations, etc.)
- ✅ `src/contexts/LanguageContext.tsx` (if it uses hooks)

### 9. Routing (If Needed)

Currently single-page, but if you add routes:

**App Router:**
```
src/app/
├── page.tsx           # / (home)
├── shop/
│   └── page.tsx       # /shop
└── layout.tsx         # Shared layout
```

**Pages Router (alternative):**
```
src/pages/
├── index.tsx          # / (home)
└── shop.tsx           # /shop
```

### 10. Environment Variables

Create `.env.local` for any environment-specific config:
```
NEXT_PUBLIC_API_URL=...
```

### 11. Build & Deploy

```bash
npm run build
npm run start
```

## Migration Checklist

- [ ] Install Next.js dependencies
- [ ] Update package.json scripts
- [ ] Create `src/app/layout.tsx`
- [ ] Create `src/app/page.tsx` (move Home logic)
- [ ] Move `index.css` → `app/globals.css`
- [ ] Add `"use client"` to all client components
- [ ] Update image imports (use `next/image` or adjust paths)
- [ ] Create `next.config.js`
- [ ] Update `tsconfig.json` with Next.js paths
- [ ] Test all animations (GSAP, Framer Motion)
- [ ] Test smooth scroll (Lenis)
- [ ] Test custom cursor
- [ ] Test language switching
- [ ] Test intro loader
- [ ] Verify all assets load correctly
- [ ] Test build process

## Common Issues & Solutions

### Issue: "use client" not working
**Solution**: Ensure it's the first line, before any imports

### Issue: Images not loading
**Solution**: Use `next/image` or move to `public/` folder

### Issue: GSAP/ScrollTrigger not working
**Solution**: Ensure components are client components and ScrollTrigger is registered

### Issue: Smooth scroll broken
**Solution**: Lenis needs to run client-side, ensure `"use client"` is present

### Issue: Fonts not loading
**Solution**: Import fonts in `layout.tsx` or use CSS `@font-face` in `globals.css`

## Next Steps After Migration

1. Optimize images with `next/image`
2. Add metadata for SEO
3. Consider Server Components where possible
4. Add loading states
5. Optimize bundle size
6. Add error boundaries
