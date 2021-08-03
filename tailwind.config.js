module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cardinal": '#8C1515'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
