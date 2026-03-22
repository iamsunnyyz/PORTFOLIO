import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#38bdf8",
        "accent-light": "rgba(56, 189, 248, 0.12)",
        "bg-secondary": "rgba(15, 23, 42, 0.92)",
        "dark-800": "#0f172a",
        "dark-600": "#334155",
      },
      fontFamily: {
        agustina: ["var(--font-agustina)"],
      },
    },
  },
  plugins: [],
};
export default config;
