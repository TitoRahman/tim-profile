module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-purle": "#8366B0",
        "grayish-pink": "#311D27",
        "dark-grayish-pink": "#22191F",
        "main-dark": "#1B1D21",
        "second-dark": "#111215",
        secondt: "#a4a7b1",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require('tw-elements/dist/plugin')],
};
