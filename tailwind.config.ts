import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#e7ff00",
          light: "#f0ff4d",
        },
        brand: {
          DEFAULT: "#0A0A0A",
          alt: "#0d0d0d",
          footer: "#050505",
          text: "#F2F2F2",
          muted: "#909090",
          subtle: "#5A5A5A",
        },
      },
      animation: {
        "rain-fall": "rain-fall linear infinite",
        "lightning-flash": "lightning-flash ease-out forwards",
        "lightning-bolt": "lightning-bolt ease-out forwards",
        "bounce-y": "bounce-y 2s ease-in-out infinite",
        "fade-up-1": "fade-slide-up 0.7s ease-out 0.10s both",
        "fade-up-2": "fade-slide-up 0.7s ease-out 0.20s both",
        "fade-up-3": "fade-slide-up 0.7s ease-out 0.35s both",
        "fade-up-4": "fade-slide-up 0.7s ease-out 0.50s both",
        "fade-up-5": "fade-slide-up 0.6s ease-out 0.65s both",
        "fade-up-6": "fade-slide-up 0.6s ease-out 0.80s both",
        "fade-in-down": "fade-in-down 0.8s ease-out both",
        "fade-in-up": "fade-in-up 0.8s ease-out both",
      },
      keyframes: {
        "rain-fall": {
          "0%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(calc(100vh + 20px))" },
        },
        "lightning-flash": {
          "0%": { opacity: "0" },
          "10%": { opacity: "1" },
          "20%": { opacity: "0.3" },
          "30%": { opacity: "1" },
          "40%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        "lightning-bolt": {
          "0%": { opacity: "0" },
          "10%": { opacity: "1" },
          "20%": { opacity: "0.7" },
          "30%": { opacity: "1" },
          "40%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
          "60%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        "bounce-y": {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(8px)" },
        },
        "fade-slide-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
