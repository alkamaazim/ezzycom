/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          "primary-color": "#2A2F4F",
          "light-purple-color": "#917FB3",
          "light-pink-color": "#E5BEEC",
          "light-color": "#FDE2F3",
          "black-color": "#18122B",
        },
      },
    },
  },
  plugins: [],
};
