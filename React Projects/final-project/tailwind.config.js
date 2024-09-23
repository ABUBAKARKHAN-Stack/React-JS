/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2md": "998px",
        "xsm": "500px",
      },
      dropShadow: {
        "normal" : '0px 0px 5px  white',
        "custom" : '0px 0px 5px  #6365e4'
      }
    },
  },
  plugins: [],
}