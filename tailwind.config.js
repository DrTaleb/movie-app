const plugin = require("tailwindcss/plugin");

const customColors = {
  primary: "#ffcc00",
  secondary: "#ffdbdb",
  softGray: "#F2F4F7",
  "primary-light-1": "#FFDB4D",
  title: "#222222",
  caption: "#8A8A8E",
  captionLight: "#C5C5C7",
  grey: "#F2F4F7",
  border: "#d9d9d9",
  orangeCu: "#fabb00",
  redCu: "#f06f5e",
  primaryDark: "#141414",
  primaryDark2: "#1f1f1f",
  edit: "#fabb00",
  delete: "#f06f5e",
  success: "#52c41a",
  info: "#1A73E8",
  greenCu: "#00b96b",
};

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
      colors: {
        ...customColors,
      },
      boxShadow: {
        card: "0 2px 8px #00000026",
        "card-hover": "0 5px 12px #0003",
      },
      height: {
        96: "28rem",
      },
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
        ":root": {
          ...mapColors(customColors),
        },
        ".container-lg": {
          maxWidth: "1300px",
          width: "100%",
          margin: "auto",
        },
      });
    }),
  ],
};

const mapColors = (colors) => {
  let object = {};
  for (let item in colors) {
    object[`--color-${item} `] = colors[item];
  }
  return object;
};
