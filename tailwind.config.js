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
        "dark-main": "#111215",
        "dark-second": "#1B1D21",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
