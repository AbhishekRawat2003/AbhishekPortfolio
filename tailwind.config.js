/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "Navy": "#10375C", //Navy
        "Yellow": "#F3C623", // Yellow
        "White": "#F4F6FF",
        "Orange" :" #EB8317" 
      },
      fontFamily: {
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
        "cherry-bomb": ['"Cherry Bomb One","sans-serif"'],
        "corinthia":['"Corinthia", "cursive"'],
        "montserrat":['"Montserrat", "sans-serif"'],
        "poppins":['"Poppins", "sans-serif"'],
        "billy-argel": ['Billy Argel','sans-serif'],
        "amsterdam" : ['Amsterdam','sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(145deg, #dbd5d5, #fffefe)', // Custom linear gradient
      },
      boxShadow: {
        'custom-shadow': '11px 11px 22px #cfc9c9, -11px -11px 22px #ffffff', // Custom shadow
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
