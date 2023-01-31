/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "light-purle": "#8366B0",
      "grayish-pink": "#311D27",
      "dark-grayish-pink": "#22191F",
      "main-bg": "#111215",
      "second-bg": "#1B1D21",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
