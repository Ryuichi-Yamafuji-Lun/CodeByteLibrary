/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color schema for the website
        'background-main': '#030F33',
        'secondary-color': '#EDEEFF',
      },

      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },

      backgroundImage: {
        'test-pattern': "url('./assets/image/temp.jpg')",
      },
    },
  },
  plugins: [],
}