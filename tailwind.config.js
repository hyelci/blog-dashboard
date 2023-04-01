/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
};
