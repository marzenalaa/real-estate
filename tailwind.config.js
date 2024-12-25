/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bitBlack: "#00001C",
        bonusBlue: "#2226F7",
        midnightMirage: "#001F3E",
        nuitBlanche: "#1E4890",
        yummyYellow: "#FFD527",
      },
    },
  },
  plugins: [],
};
