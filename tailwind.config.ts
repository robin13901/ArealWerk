import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          // Deep, trustworthy blue (water + craft)
          50: "#EFF8FB",
          100: "#D6EEF5",
          200: "#AEDCEB",
          300: "#7CC4DD",
          400: "#46A6CB",
          500: "#1F88B3",
          600: "#0E6E96",
          700: "#0A587A",
          800: "#0B4661",
          900: "#0C3A50",
        },
        accent: {
          // Fresh cyan / water highlight
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
        },
        cta: {
          // Call-to-action green (trust + go)
          400: "#34D399",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
        },
        ink: {
          // Body text + muted
          900: "#0F172A",
          700: "#1E293B",
          500: "#475569",
          400: "#64748B",
          200: "#E2E8F0",
          100: "#F1F5F9",
          50: "#F8FAFC",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.06)",
        "soft-md":
          "0 2px 4px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.08)",
        "soft-lg":
          "0 4px 8px rgba(15,23,42,0.06), 0 16px 40px rgba(15,23,42,0.10)",
        "ring-brand": "0 0 0 4px rgba(31,136,179,0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      transitionDuration: {
        250: "250ms",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 250ms ease-out both",
        "scale-in": "scale-in 200ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
