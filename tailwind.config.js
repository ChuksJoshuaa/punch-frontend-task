/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sx: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "700px",
      // => @media (min-width: 700px) { ... }

      md: "1100px",
      // => @media (min-width: 1100px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontSize: {
        14: "14px",
      },

      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.015em",
        normal: "0",
        wide: ".025em",
        wider: ".04em",
        widest: ".1em",
        widest: ".25em",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
    },
  },
  plugins: [],
};
