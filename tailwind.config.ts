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
      "slate-50": "#F8FAFC",
      "slate-100": "#F1F5F9",
      "slate-200": "#E2E8F0",
      "slate-400": "#94A3B8",
      "slate-500": "#64748B",
      "slate-950": "#020617",
      "cyan-50": "#ECFEFF",
      "cyan-200": "#A5F3FC",
      "cyan-300": "#67E8F9",
      "cyan-800": "#155E75",
      "emerald-200": "#A7F3D0",
      "yellow-200": "#FEF08A",
      "blue-50": "#EFF6FF",
      "blue-900": "#1E3A8A",
      "border-color": "#0a0f0f14",
      "fuchsia-50": "#FDF4FF",
      "fuchsia-900": "#701A75",
      "lime-50": "#F7FEE7",
      "lime-800": "#3F6212",
      "purple-200": "#E9D5FF",
      "red-100": "#FEE2E2",
      "red-800": "#991B1B",
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
