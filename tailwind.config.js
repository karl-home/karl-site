module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cardinal": '#8C1515',
        "light-cardinal": "#B83A4B",
        "dark-cardinal": "#820000",
      },
      fontFamily: {
        "sourcesans": ["SourceSansPro", "Segoe UI"]
      },
      boxShadow: {
        "material-2": "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
