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
        "subHeading": "#555555",
        "label": "6f6f6f"
      }
    },
  },
  plugins: [],
};