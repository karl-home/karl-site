module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cardinal": '#8C1515',
        "light-cardinal": "#B83A4B"
      },
      fontFamily: {
        "sourcesans": ["SourceSansPro", "Segoe UI"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
