
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0A0F18", // Dark blue like the night sky in Avengers
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#E23636", // Marvel red
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#518CCA", // Captain America blue
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F0E6A8", // Iron Man gold
          foreground: "#0A0F18",
        },
        muted: {
          DEFAULT: "#6D7684", // Muted color
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#121A29", // Darker blue for cards
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(240, 230, 168, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(240, 230, 168, 0.8)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s infinite",
        glow: "glow 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
