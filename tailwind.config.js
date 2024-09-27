/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'spicy': ['"Spicy Rice"', 'cursive'],
        'cinzel': ['"Cinzel Decorative"', 'serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



