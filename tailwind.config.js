/** @type {(function({}=): any)|{}} */
const konstaConfig = require("konsta/config");

module.exports = konstaConfig({
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
