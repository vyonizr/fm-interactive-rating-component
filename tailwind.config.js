/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        customOrange: 'hsl(25, 97%, 53%)',
        customLightGrey: 'hsl(217, 12%, 63%)',
        customMediumGrey: 'hsl(216, 12%, 54%)',
        customDarkBlue: 'hsl(210, 19%, 18%)',
        customVeryDarkBlue: 'hsl(215, 22%, 15%)',
        woodSmoke: 'hsl(228, 11%, 9%)'
      },
      fontFamily: {
        sans: [
          'Overpass',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      }
    },
  },
  plugins: [],
}
