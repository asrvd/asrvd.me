/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /(bg|text|fill|hover:shadow|shadow)-.+/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  darkMode: "class",
};
