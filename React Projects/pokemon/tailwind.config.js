/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px', // Custom screen for smaller devices
        's': '320px',
        'xxl': '2048px'
      },
    },
  },
  plugins: [],
}