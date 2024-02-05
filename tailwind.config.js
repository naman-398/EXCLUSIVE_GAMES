/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize:{
        '100%' :  '100% 100%',
        '300%' :  '300% 100%',
      },
      fontFamily:{
        'Anton': 'Anton, sans-serif',
        'inter': 'Inter, sans-serif'
      },
      screens:{
        '450': '450px',
        '576': '576px',
        '500': '500px',
        '900': '900px',
        '992': '992px',
      }
    },
  },
  plugins: [],
}