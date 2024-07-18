/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: "#003FCA",
        Green: "#01A26D",
        darkBlue:"#051E5C",
        
      },
      screens: {
        sm: "640px",
        md: "768px",
        xl: "1280px",
      },
      width: {
        'custom': '1440px', 
      },
    },
  },
  plugins: [],
};
