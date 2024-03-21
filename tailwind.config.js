/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bg: '#000000',
      container: '#121212',
      text: '#ffffff',
      primary: "#1DD35E",
      secondary: '#ffffffb3',
      muted: "#262626",
      hover: "#333333", 
    },
    extend: {
      fontFamily: {
        custom: ['Circular Spotify', 'sans-serif']
      },
    },
  },
  plugins: [],
};
