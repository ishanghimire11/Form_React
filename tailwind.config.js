/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "title": "#2C3345",
        "titleBg": "#585ea8",
        "subHeading": "#555555",
        "label": "6f6f6f",
        "title-hover": "#38425a"
      }
    },
  },
  plugins: [],
};