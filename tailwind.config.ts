import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      "slate-100": "#F1F5F9",
      "slate-200": "#E2E8F0",
      "slate-500": "#64748B",
      "slate-950": "#020617",
      "cyan-200": "#A5F3FC",
      "emerald-200": "#A7F3D0",
      "yellow-200": "#FEF08A",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Satoshi: ["Satoshi", "sans"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
