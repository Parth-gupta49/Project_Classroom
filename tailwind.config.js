/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
        acme:["Acme", "sans-serif"],
        contrailOne:[ "Contrail One", "sans-serif"],
        poppins:["Poppins", "sans-serif"]
      },
      colors: {
        blue2:"#181c2e",
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
        bgColor:"#181818",
        yellowMain:"#F7B41A",
        footerMain:"#2C2B2B"
      },
      backgroundImage: {
        'sec2': "url('./assets/images/payment-suite.png')",
      },
      boxShadow:{
        'cardShadow':" 0px 0 25px 5px rgba(0, 0, 0, 0.35)",
      }
    },
  },
  plugins: [],
};
