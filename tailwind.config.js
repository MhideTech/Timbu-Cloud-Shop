/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #774B34, #C28153)",
      },
      colors: {
        "custom-brown": "#774B34",
        "custom-white": "#FAFAFA",
        "custom-wheat": "#FBF9F3",
        "custom-wheat-hover": "#fbf9f34d",
        "custom-deep-browm": "#4B3515",
        white: "#FAFAFA",
        brown: "#4F3322",
        orange: "#FF8A00",
      },
      fontFamily: {
        textFont: ["Poppins", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(.9)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
