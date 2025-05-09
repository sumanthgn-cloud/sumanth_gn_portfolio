/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#121212', // Dark background
        'neon-blue': '#00c3ff',
        'neon-green': '#39ff14',
        'cloud-white': '#f0f8ff',
      },
      fontFamily: {
          sans: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      keyframes: {
          // Keyframes for terminal intro, more below
      },
      animation: {
          // Animations for terminal intro, more below
      },
    },
  },
  plugins: [],
};