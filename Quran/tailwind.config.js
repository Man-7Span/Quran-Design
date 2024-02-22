/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#DAF5E6",
          200: "#B7EBD4",
          300: "#83C5AD",
          400: "#518B7C",
          500: "#1C3F39",
          600: "#143633",
          700: "#0E2C2D",
          800: "#082124",
          900: "#05191E"
        },
        secondary: {
          100: "#FEF5CE",
          200: "#FDE99D",
          300: "#FBD86C",
          400: "#F7C747",
          500: "#F2AC0D",
          600: "#D08D09",
          700: "#AE7006",
          800: "#8C5504",
          900: "#744302",
        },
        'BackGroundColor': '#E9E6D7',
        'BorderColor': '#315E56',
        'buttonBackgroud': '#D1CDB7'
      },
      backgroundImage: {
        'hero': "url('../img/BackQuran.svg')",
        'hero2': "url('../img/greenQuran.svg')",
      },
      borderRadius: {
        '50': '50%'
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1140px",
        xl: "1200px",
      },
    },
    fontFamily: {
      // Define your custom font families here
      Manrope: ["Manrope"],
    },
    fontWeight: {
      // Define your custom font weights here
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  plugins: [],
}

