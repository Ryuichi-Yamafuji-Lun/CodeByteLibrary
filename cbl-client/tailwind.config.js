/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color schema for the website
        'background-main': '#1E1E1E',
        'secondary-color': '#00A3E0',// Blue
        'third-color': '#FF6B6B',// Red
        'header-color': '#FFFFFF', 
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