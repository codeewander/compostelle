/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    stroke: {
      current: 'currentColor',
    },
    stroke: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
    }),
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};

