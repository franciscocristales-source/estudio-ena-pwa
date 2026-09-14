/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        deepin: {
          blue: '#0082fa',
          cyan: '#00c3ff',
          emerald: '#10b981'
        }
      }
    },
  },
  plugins: [],
}
