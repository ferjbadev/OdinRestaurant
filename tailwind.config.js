/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        iceBlue: "#a3d2fd",
        steelGray: "#4b4e6d",
        charcoal: "#1f1d36",
        asgardGold: "#e9c46a",
        woodBrown: "#6c584c",
      },
    },
  },
  plugins: [daisyui],
};
