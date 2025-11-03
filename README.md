# Speed Coffee - Mobile Coffee Van Website

A pixel-accurate, accessible, responsive React application for Speed Coffee, a mobile coffee van business operating in the Czech Republic.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
speed-coffee/
├── public/
│   ├── placeholder.svg          # Placeholder images (replace with Figma exports)
│   └── vite.svg                 # Vite logo
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Responsive navigation with hamburger menu
│   │   ├── Hero.tsx             # Hero section with van image and mission statement
│   │   ├── About.tsx            # About Our Coffee Truck section
│   │   ├── Locations.tsx        # Where Can You Find Us section
│   │   ├── EventBooking.tsx     # Event booking section with CTA
│   │   └── MatchaSection.tsx    # Matcha promotion section
│   ├── pages/
│   │   └── Home.tsx             # Main page combining all sections
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Tailwind imports and global styles
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── vite.config.ts               # Vite configuration
```

## 🎨 Design Tokens

### Colors

Extracted from the Figma design:

- **Beige Light**: `#F8F5EF` - Primary background color
- **Matcha Green**: `#A8C6A8` - Secondary background for matcha section
- **Accent Brown**: `#8B5A3C` - Accent color for highlights and CTAs
- **Dark Text**: `#1F2937` (gray-900) - Primary text color

### Typography

- **Display Font**: Playfair Display (serif) - Used for headings
  - Weights: 400, 700, 900
  - Google Fonts link included in `index.html`

- **Body Font**: Open Sans (sans-serif) - Used for body text and navigation
  - Weights: 400, 600, 700
  - Google Fonts link included in `index.html`

### Spacing

- Base spacing scale: 4px (Tailwind default)
- Section padding: `py-16 px-4 md:px-8 lg:px-16`
- Container max-width: Tailwind default (1280px)

## 🖼️ Assets

### Current Status

All images are currently using placeholder SVGs (`/placeholder.svg`). 

### Replacing Placeholder Images

To swap in final Figma images:

1. Export images from Figma at the following sizes:
   - Hero image: ~1200x800px (or larger for retina)
   - About section barista image: ~800x1000px
   - Locations section images (2): ~600x800px each
   - Event booking image: ~800x600px
   - Matcha product image: ~400x600px

2. Export formats:
   - WebP (preferred) or PNG
   - Optimize images before adding

3. Replace placeholder files in `public/`:
   - `hero-van.jpg` - Hero section coffee van
   - `barista.jpg` - About section barista photo
   - `chalkboard.jpg` - Locations section chalkboard
   - `van-interior.jpg` - Locations section interior
   - `event.jpg` - Event booking section
   - `matcha-product.jpg` - Matcha product image

4. Update image paths in components:
   - `src/components/Hero.tsx` - Update hero image src
   - `src/components/About.tsx` - Update barista image src
   - `src/components/Locations.tsx` - Update both image srcs
   - `src/components/EventBooking.tsx` - Update event image src
   - `src/components/MatchaSection.tsx` - Update matcha product src

Example:
```tsx
// Before
<img src="/placeholder.svg" alt="..." />

// After
<img src="/hero-van.jpg" alt="Speed Coffee mobile van" />
```

## ♿ Accessibility Features

- Semantic HTML elements
- Keyboard navigation support
- ARIA labels for interactive elements
- Focus states on all clickable elements
- Proper heading hierarchy
- Alt text for all images
- Reduced motion support via `prefers-reduced-motion`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (default, mobile-first)
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Responsive Test Checklist

#### Mobile Viewport (360x800)
- [x] Stacked hero layout
- [x] Hamburger menu visible
- [x] Two-column sections stack vertically
- [x] Text remains readable
- [x] Touch targets are adequate size

#### Tablet (768px)
- [x] Two-column layouts fit properly
- [x] Navigation menu visible (no hamburger)
- [x] Images scale appropriately

#### Desktop (1280px+)
- [x] Hero image displays at full size
- [x] Large typography matches Figma
- [x] Spacing matches design specifications
- [x] All sections properly aligned

## 🎯 Features

- ✅ Responsive navigation with mobile hamburger menu
- ✅ Hero section with mission statement
- ✅ About section with two-column responsive layout
- ✅ Locations section with overlapping images
- ✅ Event booking section with CTA button
- ✅ Matcha promotion section with green background
- ✅ Smooth hover effects and transitions
- ✅ Accessibility-compliant
- ✅ Optimized for performance (lazy loading images)

## 🛠️ Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## 📝 Notes & Assumptions

1. **Images**: All images are currently placeholders. Replace with actual Figma exports as documented above.

2. **Spacing**: Spacing values were estimated from the design description. Adjust `section-padding` class in `index.css` if needed.

3. **Colors**: Exact color values were inferred from the design description. Adjust in `tailwind.config.js` if Figma values differ.

4. **Fonts**: Using Google Fonts (Playfair Display and Open Sans). If custom fonts are required, update `index.html` and `tailwind.config.js`.

5. **Interactive Elements**: 
   - Navigation links use hash anchors (#events, #reserve, #shop)
   - CTA buttons link to sections (update with actual URLs if needed)
   - Smooth scroll behavior can be added if desired

6. **Missing from Design**:
   - Footer component (not shown in design but can be added)
   - Contact form (booking CTA links to #contact section placeholder)

## 🐛 Troubleshooting

### Tailwind styles not applying
- Ensure `tailwind.config.js` content paths are correct
- Check that `index.css` imports Tailwind directives
- Restart dev server after config changes

### Images not loading
- Verify images are in `public/` directory
- Check image paths use leading `/` (e.g., `/image.jpg`)
- Ensure file extensions match

### Fonts not loading
- Check network tab for Google Fonts requests
- Verify font links in `index.html`
- Check font-family names in `tailwind.config.js`

## 📄 License

Private project for Speed Coffee.
