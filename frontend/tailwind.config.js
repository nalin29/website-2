module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        cyan:{
          500: "#06B6D4"
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}