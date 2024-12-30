/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14131a",
        secondary: "#211f2b",
        background: "#14131a",
        "card-bg": "#211f2b",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A0A0A0",
        "vip-gold": "#FFD700",
        success: "#00B894",
        error: "#FF7675",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        bangers: ["Bangers", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
