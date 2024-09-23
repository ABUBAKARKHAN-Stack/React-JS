/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '550px': '550px',
        '450px': '450px',
        '400px': '400px'
      }
    },
  },
  plugins: [],
}