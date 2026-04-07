/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        romantic: {
          light: "#fce4ec",
          DEFAULT: "#f06292",
          dark: "#ad1457",
          gold: "#d4af37",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};