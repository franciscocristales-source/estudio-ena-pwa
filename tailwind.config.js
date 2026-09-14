/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'mac-relief': '0 20px 40px -15px rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
        'mac-card': '0 10px 30px -10px rgba(0, 0, 0, 0.2), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
        'mac-button': '0 4px 12px rgba(16, 185, 129, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
      }
    },
  },
  plugins: [],
}