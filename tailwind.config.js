/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#44bb92",
        "secondary-color": "#30e2a5",
        "primary-light-color": "#5de2b4",
        "hero-hover": "#25e770",
      },
    },
  },
  plugins: [],
};
