/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        bgCover: "url('/background.png')",
        'nlw-esports':
          'linear-gradient(89.86deg, #7291FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%);',
        'box-game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);',
      },
    },
  },
  plugins: [],
}
