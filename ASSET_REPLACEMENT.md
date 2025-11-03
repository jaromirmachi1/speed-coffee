# Asset Replacement Guide

## Quick Reference: How to Swap in Final Figma Images

All components currently use `/placeholder.svg` for images. To replace with final assets:

### 1. Export Images from Figma

Export the following images at 2x resolution for retina displays:

- **Hero Van Image**: `hero-van.jpg` (1200x800px or larger)
- **Barista Photo**: `barista.jpg` (800x1000px)
- **Chalkboard Sign**: `chalkboard.jpg` (600x800px)
- **Van Interior**: `van-interior.jpg` (600x800px)
- **Event Photo**: `event.jpg` (800x600px)
- **Matcha Product**: `matcha-product.jpg` (400x600px)

### 2. Place Files in `/public` Directory

```
public/
  ├── hero-van.jpg
  ├── barista.jpg
  ├── chalkboard.jpg
  ├── van-interior.jpg
  ├── event.jpg
  └── matcha-product.jpg
```

### 3. Update Component Files

#### Hero.tsx
```tsx
// Line ~9
<img src="/hero-van.jpg" alt="Speed Coffee mobile van with chalkboard sign" />
```

#### About.tsx
```tsx
// Line ~21
<img src="/barista.jpg" alt="Barista holding coffee cups and pastries" />
```

#### Locations.tsx
```tsx
// Line ~19 (chalkboard)
<img src="/chalkboard.jpg" alt="Chalkboard sign with coffee quote" />

// Line ~26 (interior)
<img src="/van-interior.jpg" alt="Coffee van interior with drinks" />
```

#### EventBooking.tsx
```tsx
// Line ~20
<img src="/event.jpg" alt="Outdoor event with coffee van and people" />
```

#### MatchaSection.tsx
```tsx
// Line ~14
<img src="/matcha-product.jpg" alt="Speed Coffee matcha powder product" />
```

### 4. Optimize Images (Optional but Recommended)

Before adding images, optimize them:

```bash
# Using sharp (npm install -g sharp-cli)
sharp --input hero-van.jpg --output hero-van.webp --webp

# Or use online tools like:
# - Squoosh.app
# - TinyPNG.com
```

### 5. Verify

After replacing images:
1. Run `npm run dev`
2. Check all images load correctly
3. Verify responsive behavior on different screen sizes
4. Check image alt text is appropriate

---

**Note**: If using WebP format, update file extensions in component imports (e.g., `/hero-van.webp`).

