import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            brand: {
                primary: "#0C4A6E",
                accent: "#F97316",
                light: "#E0F2FE",
            },
        },
    },
  },
  plugins: [],
};

export default config;