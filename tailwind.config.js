/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    mytheme: {
      prime: "#C97F5F",
      darkish: "#3C3836",
    },
    extend: {},
    fontFamily: {
      rubik: ['Rubik']

    }
  },
  plugins: [require("daisyui")],
}
