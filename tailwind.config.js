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
          green: "#A8C6A8",
          DEFAULT: "#A8C6A8",
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
        manuka: ["Manuka", "sans-serif"],
        display: ["Playfair Display", "serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      container: {
        center: true,
        padding: "100px",
      },
    },
  },
  plugins: [],
};
