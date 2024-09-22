/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inner-3xl" : "inset 3px 3px 50px 30px rgba(0, 0, 0, 0.1);"

      }
    },
  },
  plugins: [],
}