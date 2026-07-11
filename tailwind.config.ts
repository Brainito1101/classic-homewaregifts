import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4B7F2B",
          dark: "#2F5A1B",
          darker: "#20400F",
          light: "#E8F1E0",
          hover: "#5F9938",
        },
        gold: {
          DEFAULT: "#C6A15B",
          light: "#E4D3AC",
        },
        ink: "#1E2318",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        xl2: "16px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(20, 40, 10, 0.08)",
        card: "0 8px 30px rgba(20, 40, 10, 0.1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
