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
      },
    },
    colors: {
      'darkBlue': '#161C2A',
      'categories': '#990078',
      'lightBlue': '#75DAFF',
      'pink': '#FF678B',
      'lightPink':'#FFF5F5',
      'border': '#581919',
      'gradientAuth': '#9A60BF',
      'gradientAuth2': '#FFF4E6',
      'gradientPink': '#E6BFFF',
      'gradientPink2': '#FFBFC4',
      'gradientBlue': '#8A97FF',
      'gradientBlue2': '#66FFFF',
      'gradientBlue3':'#171BB5'
      
      

      
    },
    screens: {
        'mobile': '320px',
        'tablet': '768px',
        'deskttop':'1440px'// => @media (min-width: 1440px) { ... }
      },
  },
  plugins: [],
};
