const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brands: {
          "dark-pink": "#FE9AA0",
          "light-pink": "#FFE7E7",
          "dark-cyan": "#008b8b",
          "viridian-cyan": "#33a2a2",
          "light-cyan": "#66b9b9",
          "powder-cyan": "#99d1d1",
          "cyan-cyan": "#cce8e8",
        },
      },
    },
  },
  plugins: [
    iconsPlugin({
      collection: getIconCollections(["material-symbols"]),
    }),
  ],
};
