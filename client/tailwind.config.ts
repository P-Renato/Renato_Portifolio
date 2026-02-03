import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // App Router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",      // if using src/ folder
  ],
  theme: {
    extend: {
      screens: {
        'sm': '740px',
        'md': '968px', 
      },
    },
  },
  plugins: [],
};

export default config;
