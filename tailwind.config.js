const plugin = require("tailwindcss/plugin");


module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      "2xl": "1200px",
      "3xl": "1300px",
    },
    fontSize: {
      xxs: ".75rem",
      xs: ".8125rem",
      sm: ".875rem",
      tiny: ".9375rem",
      base: "1rem",
    },
    extend: {
    },
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ["poppins"],
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    plugin(function ({ addComponents, matchComponents, theme }) {
      addComponents({
        ".container-lg": {
          maxWidth: "1300px",
          width: "100%",
          margin: "auto",
        },
      });
    }),
  ],
};
