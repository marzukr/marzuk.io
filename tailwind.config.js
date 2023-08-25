/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    fontFamily: {
      sans: '\'Lexend Deca\', sans-serif',
      serif: '\'Lora\', serif',
    },
    extend: {
      screens: {
        'xs': '321px',
      },
    },
  },
  plugins: [],
}
