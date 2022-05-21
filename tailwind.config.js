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
      light: process.env.THEME_COLOR_LIGHT,
      dark: process.env.THEME_COLOR_DARK,
      primary: process.env.THEME_COLOR_PRIMARY,
      secondary: process.env.THEME_COLOR_SECONDAIRY,
      tertiary: process.env.THEME_COLOR_TERTIARY,
    },
    fontFamily: {
      sans: [process.env.THEME_FONT_FAMILY_NAME, "sans-serif"],
    },
  },
};
