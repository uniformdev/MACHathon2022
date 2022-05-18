module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
  theme: {
    colors: {
      light: "#ffffff",
      dark: "#333333",
      primary: "#693A25",
      secondary: "#AE9A91",
      tertiary: "#EEE0DB",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
};
