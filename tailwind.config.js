/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        velas: {
          50: '#f4f7f6',
          100: '#e3ebe9',
          200: '#c6d8d4',
          300: '#9ebcb6',
          400: '#769b94',
          500: '#567e78',
          600: '#43635f',
          700: '#374f4c',
          800: '#2f403e',
          900: '#293635',
        },
        gold: {
          500: '#c5a059',
          600: '#b08d45',
        }
      }
    },
  },
  plugins: [],
}