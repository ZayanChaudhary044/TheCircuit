/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "dark-blue": "#2C3E50",
        "light-blue": "#3498DB",
        white: "#FFFFFF",
        "light-gray": "#BDC3C7",
        orange: "#E67E22",
        green: "#27AE60",
        "dark-gray": "#2C3E50",
        "muted-gray": "#7F8C8D",
        "border-gray": "#E0E0E0",
      },
      backgroundImage: {
        homeback: "url('./images/homepage.jpg')",
        weather: "url('./images/weather.jpg')",
      },
    },
  },
  plugins: [],
};
