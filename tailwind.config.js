/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      bg: "#000000",
      container: "#121212",
      text: "#ffffff",
      primary: "#1DD35E",
      secondary: "#ffffffb3",
      muted: "#262626",
      hover: "#333333",
    },
    extend: {
      fontFamily: {
        custom: ["Circular Spotify", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
