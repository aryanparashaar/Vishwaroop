/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0b1220",     // main text / headings
          gold: "#c99e2d",     // buttons, accents
          cream: "#f7f1e5",    // page background
          soft: "#fdfaf5",     // cards / hero surface
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "serif"],
        nav: ["Playfair Display", "serif"],
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
