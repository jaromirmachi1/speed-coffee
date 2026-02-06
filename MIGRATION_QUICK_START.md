# Next.js Migration - Quick Start Guide

## 📊 Current Analysis

Run `node prepare-nextjs-migration.js` to see:
- ✅ 20 files need `"use client"` directive
- ✅ Multiple relative imports to convert to `@/` alias
- ✅ Complete migration checklist

## 🚀 Quick Migration Steps

### Step 1: Install Next.js
```bash
npm install next@latest react@latest react-dom@latest
npm install -D @types/node @types/react @types/react-dom
```

### Step 2: Create Directory Structure
```bash
mkdir -p src/app
```

### Step 3: Create Core Files

**Create `src/app/layout.tsx`** - See `MIGRATION_EXAMPLES.md` for full code

**Create `src/app/page.tsx`** - See `MIGRATION_EXAMPLES.md` for full code

**Move `src/index.css` → `src/app/globals.css`**

### Step 4: Add "use client" to Components

Add `"use client";` as the first line to these files:
- `src/components/Footer.tsx`
- `src/components/Header/Header.tsx`
- `src/components/IntroLoader.tsx`
- `src/contexts/LanguageContext.tsx`
- `src/pages/Home/components/*.tsx` (all files)
- `src/lib/TextReveal.tsx`
- `src/lib/TextRevealLines.tsx`

### Step 5: Update Imports

Replace relative imports with `@/` alias:

**Before:**
```tsx
import Header from "../../components/Header/Header";
import logoSc from "../../../assets/images/logoSc.webp";
```

**After:**
```tsx
import Header from "@/components/Header/Header";
import logoSc from "@/assets/images/logoSc.webp";
```

### Step 6: Create Config Files

**Create `next.config.js`:**
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;
```

**Update `tsconfig.json`:**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Update `package.json` scripts:**
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

### Step 7: Handle Images

**Option A: Keep in `src/assets/`** (requires imports)
- No changes needed, imports work the same

**Option B: Move to `public/images/`** (direct URLs)
- Move images: `src/assets/images/*` → `public/images/`
- Update references: `import logoSc from "@/assets/..."` → `src="/images/logoSc.webp"`

### Step 8: Test & Verify

```bash
npm run dev
```

Check:
- ✅ Page loads
- ✅ Animations work (GSAP, Framer Motion)
- ✅ Smooth scroll works (Lenis)
- ✅ Custom cursor works
- ✅ Language switching works
- ✅ All images load
- ✅ Intro loader works

## 📝 Key Differences: Vite vs Next.js

| Feature | Vite | Next.js |
|---------|------|---------|
| Entry Point | `main.tsx` | `app/page.tsx` |
| Root Component | `App.tsx` | `app/layout.tsx` |
| Global CSS | `index.css` | `app/globals.css` |
| Client Components | All components | Need `"use client"` |
| Image Imports | Direct import | Import or `/public/` |
| Routing | React Router | File-based (App Router) |

## 🎯 Migration Priority

1. **High Priority** (Core functionality):
   - Layout & page setup
   - Add "use client" directives
   - Fix imports

2. **Medium Priority** (Optimization):
   - Update image handling
   - Add metadata
   - Optimize bundle

3. **Low Priority** (Nice to have):
   - Server Components where possible
   - Image optimization with `next/image`
   - Loading states

## 📚 Reference Documents

- `NEXTJS_MIGRATION_GUIDE.md` - Detailed migration guide
- `MIGRATION_EXAMPLES.md` - Example code transformations
- `prepare-nextjs-migration.js` - Analysis script

## ⚠️ Common Pitfalls

1. **Forgetting "use client"** - Any component using hooks/browser APIs needs it
2. **Wrong import paths** - Use `@/` alias instead of relative paths
3. **Image imports** - May need `.src` property in Next.js
4. **GSAP/ScrollTrigger** - Must be in client components
5. **Lenis smooth scroll** - Must initialize client-side

## ✅ Success Criteria

Your migration is successful when:
- ✅ App runs with `npm run dev`
- ✅ All animations work
- ✅ Smooth scroll works
- ✅ No console errors
- ✅ Build succeeds (`npm run build`)
- ✅ All features match current Vite app
