/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vBlack: "#12161f",
        vRed: "#ff2c20",
        vRedLight: "#ff0e00",
        vGray: "#7b7b7b",
        vGrayLight: "#1e2129",
      },
    },
  },
  plugins: [],
};
