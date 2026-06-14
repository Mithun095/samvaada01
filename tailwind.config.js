/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#C4D4E1",
          dim: "#89A3B6",
          faint: "#5C7689",
        },
        brand: {
          900: "#13202A",
          800: "#1A2C39",
          700: "#243E51",
          600: "#2F4D63",
          500: "#496980",
          400: "#5C7B92",
          glow: "#86AECB",
        },
        ground: {
          DEFAULT: "#06090C",
          soft: "#0B1116",
          card: "#0F171E",
        },
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(134, 174, 203, 0.35)",
        card: "0 24px 60px -20px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "lens-glow":
          "radial-gradient(120% 80% at 50% -10%, rgba(73,105,128,0.30) 0%, rgba(73,105,128,0.06) 40%, transparent 70%)",
        "grid-faint":
          "linear-gradient(rgba(137,163,182,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(137,163,182,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "rec-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.15" },
        },
        "aperture-spin": {
          to: { transform: "rotate(360deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "rec-blink": "rec-blink 1.6s ease-in-out infinite",
        "aperture-spin": "aperture-spin 40s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "scan": "scan 6s linear infinite",
        "glow-pulse": "glow-pulse 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    logs: false,
  },
};
