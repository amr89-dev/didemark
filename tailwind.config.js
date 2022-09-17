/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    letterSpacing: {
      mucho: ".5rem",
    },
    extend: {
      height: {
        inherit: "inherit",
      },
      objectPosition: {
        sliderPosition: "50% 0%",
      },
      width: {
        inherit: "inherit",
      },
      gridTemplateColumns: {
        sliderContainer: "50px minmax(0, 1fr) 50px",
      },
      backgroundImage: {
        imagenFondo: "url('/src/assets/fondo.png')",
        imagenFondo2: "url('/src/assets/Groupfondo2.png')",
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
