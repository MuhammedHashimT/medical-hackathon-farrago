import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        blurblue: "url('/img/blur-blue.jpg')",
      },
      colors: {
        primary: "#1349a4",
        light: "#2566d1",
        lighter: "#3981f8",
        dark: "#082d6a",
        smoke: "#a9c9ff",
        smoker: "#cae5d8",
      },
    },
  },
  plugins: [],
};

export default config;
