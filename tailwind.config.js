/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradientBorder: "linear-gradient(from #161C2A via #990078 to #161C2A ",
      },
      screens: {
        mobile: "320px",
        secondMobile: "375px",
        tablet: "768px",
        deskttop: "1440px", // => @media (min-width: 1440px) { ... }
      },
      colors: {
        darkBlue: "#161C2A",
        eggPlant: "#990078",
        lightBlue: "#75DAFF",
        pink: "#FF678B",
        lightPink: "#FFF5F5",
        red: "#FF003D",
        border: "#581919",
        inputBorder: "#A9A9A9",
        gradientAuth: "#9A60BF",
        gradientAuth2: "#FFF4E6",
        gradientPink: "#E6BFFF",
        gradientPink2: "#FFBFC4",
        gradientBlue: "#66FFFF",
        gradientBlue2: "#9966FF75",
        gradientBlue3: "#66FFFF",
      },
    },
  },
  plugins: [],
};
