module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          200: "#a3e635",
          300: "#84cc16",
          400: "#65a30d",
          500: "#4d7c0f",
          600: "#3f6212",
          800: "#1a2e05",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};