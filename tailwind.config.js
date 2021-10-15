module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: "-CenturyGothic"
      },
      colors: {
        primary: "#ff6fff",
        secondary: "#9555f1",
        third: "#6d9bfb",
        fourth: "#00ffd1",
        form: "#d9bfff",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
