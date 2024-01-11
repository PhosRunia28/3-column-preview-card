/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bigShoulder: ["Big Shoulders Display", "sans-serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        BrightOrange: "hsl(31, 77%, 52%)",
        darkCyan: "hsl(184, 100%, 22%)",
        veryDarkCyan: "hsl(179, 100%, 13%)",
        info: "hsla(0, 0%, 100%, 0.75)",
        secondary: "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
};
