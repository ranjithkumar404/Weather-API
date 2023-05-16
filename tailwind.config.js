/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'weather': "url('/src/assets/weather.jpg')"
      }
    },
  },
  plugins: [],
}
