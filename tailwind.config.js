/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '90%': '90%',
      '16': '4rem',
    },
    extend: {
      fontSize: {
        "title-2xl": ["72px", "90px"],
        "title-xl": ["60px", "72px"],
        "title-lg": ["48px", "60px"],
        "title-md": ["36px", "44px"],
        "title-sm": ["30px", "38px"],
        "theme-xl": ["20px", "30px"],
        "theme-sm": ["14px", "20px"],
        "theme-xs": ["12px", "18px"],
      },
      
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#101828",
        "color-purple-light": "#8c4ea3",
        "color-purple-lighter": "#a678b9",
        "color-purple-normal": "#6e1d89",
        "color-purple-dark": "#4d1969",
      },
    },
  },
  // plugins: [require("@tailwindcss/forms"), require("autoprefixer")],
};
