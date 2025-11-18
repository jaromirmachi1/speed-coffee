/**
 * Typography constants for consistent font sizing across the application
 */

export const typography = {
  nav: {
    desktop: "text-2xl", // 1.5rem / 24px
    tablet: "md:text-2xl",
    mobile: "text-xl", // 1.25rem / 20px
  },
  navMobile: {
    desktop: "text-xl",
    tablet: "md:text-xl",
    mobile: "text-lg", // 1.125rem / 18px
  },
} as const;

