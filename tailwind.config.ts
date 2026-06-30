import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1f1d1a",
          50: "#f6f5f3",
          100: "#e9e7e2",
          200: "#cfccc3",
          300: "#aaa599",
          400: "#827c6e",
          500: "#5f5a4f",
          600: "#46423a",
          700: "#34312b",
          800: "#262420",
          900: "#1f1d1a",
          950: "#141310",
        },
        stone: {
          warm: "#cabfae",
          soft: "#e7e0d4",
        },
        offwhite: "#f7f4ee",
        beige: "#efe9df",
        brass: {
          DEFAULT: "#b08d57",
          light: "#c8a878",
          dark: "#8c6d3f",
        },
        wood: "#a9805a",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(31, 29, 26, 0.35)",
        card: "0 30px 80px -30px rgba(31, 29, 26, 0.45)",
        float: "0 18px 40px -18px rgba(31, 29, 26, 0.55)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
