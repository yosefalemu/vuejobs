/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["popins", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {},
  },
};
