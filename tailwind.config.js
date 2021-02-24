module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00adb5",
        offwhite: "#eeeeee",
        bgc: "#393e46",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
