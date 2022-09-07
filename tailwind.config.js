/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        imagenFondo: "url('/src/assets/fondo.png')",
      },
      colors: {
        first: "#1d56b8",
        second: "#d3dfed",
        third: "#fefa00",
        white: "#fff",
        black: "#000",
        link: "#509ee3",
        text: "#4e5764",
      },
    },
    fontFamily: {
      robot: ["Roboto Condensed"],
    },
  },
  plugins: [],
};
