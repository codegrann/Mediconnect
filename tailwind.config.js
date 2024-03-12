/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveColors: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(60deg)" },
        },
      },
      animation: {
        moveColors: "moveColors 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "corporate", "synthwave", "retro"],
  },
};
