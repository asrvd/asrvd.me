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
        "work-sans": ["Work Sans", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
