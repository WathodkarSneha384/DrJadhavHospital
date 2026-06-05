import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Enterprise Royal Navy */
        brand: {
          50: "#eef1f9",
          100: "#d4daf0",
          200: "#a9b5e1",
          300: "#7e90d2",
          400: "#536bc3",
          500: "#2846b4",
          600: "#1e3897",
          700: "#162b7a",
          800: "#0e1f5e",
          900: "#0a1745",
          950: "#060e2e",
        },
        /* Prestige Gold — primary CTAs */
        accent: {
          50: "#fdf9ee",
          100: "#f9efcc",
          200: "#f2da8e",
          300: "#ebc552",
          400: "#e4b02a",
          500: "#c9973e",
          600: "#b8860b",
          700: "#9a6f0a",
          800: "#7c5908",
          900: "#5e4206",
        },
        /* Cool white surfaces */
        surface: {
          50: "#f8f9fc",
          100: "#f0f2f8",
          200: "#e2e6f2",
          300: "#cdd3ea",
        },
        /* Premium gold highlights */
        gold: {
          300: "#f2da8e",
          400: "#e4b02a",
          500: "#c9973e",
          600: "#b8860b",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(13, 31, 74, 0.10)",
        "card-hover": "0 12px 40px -8px rgba(13, 31, 74, 0.18)",
      },
      animation: {
        "pulse-soft": "pulse-soft 2.5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(37, 211, 102, 0)" },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /^(bg|text|border|from|to|via|ring|divide)-(surface|brand|accent|gold)-(50|100|200|300|400|500|600|700|800|900|950)$/ },
    { pattern: /^shadow-(card|card-hover)$/ },
    "shadow-card",
    "shadow-card-hover",
    "animate-pulse-soft",
  ],
};

export default config;
