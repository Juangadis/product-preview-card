/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      DawnPink: '#f3eae3',
      White: 'rgb(255 255 255)',
      Viridian: '#3e8168',
      DarkBlue: '#2E353D',
      Aluminium: '#A4a6b0'
    },
    fontFamily: {
      'montserrat' : ['Montserrat', 'sans-serif'],
      'fraunces' : ['Fraunces', 'serif']
    },
  },
  plugins: [],
}
