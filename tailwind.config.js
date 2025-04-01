/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{ts,tsx}"
  ],
  theme: {
    screens: {
      'xsm': '410px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
      '4xl': '1800px',
      '5xl': '200px',
      '6xl': '2200px',
    },
    colors: {
      'primary-main': '#fff',
    },
    fontFamily: {},
    extend: {},
  },
  plugins: [],
}
