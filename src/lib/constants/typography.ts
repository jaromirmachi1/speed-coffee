/**
 * Typography System - Centralized font size rules
 *
 * Usage:
 * import { typography } from '@/lib/constants/typography';
 * className={typography.manuka.hero}
 */

export const typography = {
  // Manuka Font (Condensed) - Used for headings, navigation, hero text
  manuka: {
    // Hero Section - Main "SPEED COFFEE" heading
    hero: "text-[100px] sm:text-[180px] md:text-[220px] lg:text-[380px]",

    // HeroIntro - Large paragraph text
    heroIntro: "text-2xl sm:text-3xl md:text-[64px] lg:text-[104px]",

    // HeroIntro CTA - "DISCOVER OUR SPEED" link
    heroIntroCta: "text-lg lg:text-[64px]",

    // Navigation Links (Desktop)
    navDesktop: "text-3xl md:text-4xl lg:text-5xl",

    // Navigation Links (Mobile Menu)
    navMobile: "text-xl md:text-2xl",

    // Mobile Logo
    mobileLogo: "clamp(20px, 5vw, 24px)",

    // Language Switcher Label
    languageLabel: "text-xl",
  },

  // Agright Font - Used for section headings and product titles
  agright: {
    // Section Headings (About, Locations, Event Booking)
    sectionHeading: "text-2xl sm:text-3xl md:text-4xl lg:text-[64px]",

    // Products Section Main Heading
    productsMain: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl",

    // Product Titles (Apple & Ginger, Matcha, Speed Coffee)
    productTitle: "text-2xl sm:text-3xl md:text-5xl lg:text-6xl",

    // Footer Brand Name
    footerBrand: "text-4xl sm:text-6xl md:text-5xl lg:text-[164px]",
  },

  // Manrope Font - Used for body text, descriptions, buttons
  manrope: {
    // Body Text / Descriptions (About, Locations, Event Booking)
    body: "text-sm sm:text-base md:text-lg lg:text-[24px]",

    // Product Subtitles (e.g., "FRUIT POWERED BOOST")
    productSubtitle: "text-base sm:text-lg md:text-[24px]",

    // Product Descriptions
    productDescription: "text-sm sm:text-base md:text-[24px]",

    // Button Text
    button: "text-sm md:text-[18px]",

    // Footer Small Text (Copyright, Made by)
    footerSmall: "text-xs md:text-lg",
  },
} as const;

/**
 * Font weight constants
 */
export const fontWeights = {
  manuka: {
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  },
  agright: {
    normal: "font-normal",
    extrabold: "font-extrabold",
  },
  manrope: {
    light: "font-light",
    normal: "font-normal",
    bold: "font-bold",
  },
} as const;

/**
 * Line height constants
 */
export const lineHeights = {
  tight: "leading-tight",
  none: "leading-none",
  relaxed: "leading-relaxed",
  custom: {
    hero: "leading-none",
    heroIntro: "leading-[1.1] md:leading-[0.8] lg:leading-[0.8]",
    sectionHeading: "leading-[1]",
    body: "leading-relaxed",
    bodyCompact: "leading-[1.2]",
    bodyTight: "leading-[1.0]",
  },
} as const;
