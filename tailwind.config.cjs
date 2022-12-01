/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': '#2d3446',
        'red': {
          'default': 'rgb(230, 68, 68)',
          'lighter': 'rgb(90, 20, 20)',
          'darker': 'rgb(233, 102, 102)',
        },
      },
    },
  },
  plugins: [],
};
