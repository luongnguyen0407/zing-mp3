/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#231B2E",
        secondary: "#170F23",
        active: "#3A3344",
        text01: "#dadada",
      },
    },
  },
  plugins: [],
};
