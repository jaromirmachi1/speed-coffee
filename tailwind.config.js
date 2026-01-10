/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          light: "#EAE1CF",
          DEFAULT: "#EAE1CF",
        },
        matcha: {
          green: "#A0B08C",
          DEFAULT: "#A0B08C",
        },
        accent: {
          brown: "#8B5A3C",
          DEFAULT: "#8B5A3C",
        },
        dark: {
          text: "#222222",
          DEFAULT: "#222222",
        },
      },
      fontFamily: {
        manuka: ['"Manuka Condensed"', "sans-serif"],
        display: ['"Manuka Condensed"', "sans-serif"],
        sans: ['"Manuka Condensed"', "sans-serif"],
        agright: ['"Agright"', "sans-serif"],
        manrope: ['"Manrope"', "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        100: "100px",
      },
      fontSize: {
        hero: "clamp(120px, 20vw, 330px)",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
