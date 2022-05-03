const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    colors: {
      ...colors,
      primarycolor: {
        50: "#ffde85",
        100: "#ffd47b",
        200: "#ffca71",
        300: "#ffc067",
        400: "#ffb65d",
        500: "#fdac53",
        600: "#f3a249",
        700: "#e9983f",
        800: "#df8e35",
        900: "#d5842b",
      },
    },
    extend: {
      fontFamily: {
        Raleway: ['"Raleway"'],
      },
    },
  },
  plugins: [],
};
