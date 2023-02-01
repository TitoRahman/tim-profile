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
        gradient: {
          100: "#12c2e9",
          200: "#c471ed",
          300: "#f64f59",
        },
        gradient2: {
          100: "#12c2e9",
          200: "#c471ed",
          300: "#f64f59",
        },
      },
      backgroundImage: {
        "hero-slider1": "url('/src/assets/img/sliders/01.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
