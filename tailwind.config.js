/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        project: "Poppins, ui-serif",
      },
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        dark_violet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        gray_violet: "hsl(257, 7%, 63%)",
        very_dark_blue: "hsl(255, 11%, 22%)",
        very_dark_violet: "hsl(260, 8%, 14%)",
      },
      fontSize: {
        project: "18px",
      },
      backgroundImage: {
        "boost-mobile": "url(/bg-boost-mobile.svg)",
        "shorten-mobile": "url(/bg-shorten-mobile.svg)",
        "boost-desktop": "url(/bg-boost-desktop.svg)",
        "shorten-desktop": "url(/bg-shorten-desktop.svg)",
      },
    },
  },
  plugins: [],
};
