module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { 50: "#efe3e3" },
        blue_gray: {
          100: "#d9d9d9",
          700: "#4c495c",
          900: "#2d283e",
          "900_01": "#252133",
          "900_00": "#2c273d00",
          "700_01": "#564f70",
        },
        indigo: {
          50: "#e6ebf1",
          A700_9c: "#243dff9c",
          A700: "#243dff",
          "50_01": "#e7ebf1",
        },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
        purple: { 600: "#812bb2" },
      },
      fontFamily: { poppins: "Poppins", outfit: "Outfit", roboto: "Roboto" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#2d283e,#000000)",
        gradient1: "linear-gradient(180deg ,#2c273d00,#252133)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
