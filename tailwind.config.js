/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        '2xl-custom': '2000px', // Define custom screen size for 2000px+
      },
    },
  },
  plugins: [],
}

