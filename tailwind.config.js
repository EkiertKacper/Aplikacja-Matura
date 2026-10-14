/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          950: "#09090b",
          900: "#0f0f11",
          850: "#151517",
          800: "#1c1c1f",
          700: "#26262a",
          600: "#33333a",
        },
        subject: {
          matR: "#f97316",   // matematyka R - priorytet 10
          fizR: "#ef4444",   // fizyka R - priorytet 10
          infR: "#8b5cf6",   // informatyka R - priorytet 8
          polski: "#22c55e", // polski - priorytet 6
          angR: "#06b6d4",   // angielski R - priorytet 6
          matPP: "#64748b",  // matematyka PP - priorytet 4
          angPP: "#71717a",  // angielski PP - priorytet 2
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-out",
        "slide-up": "slideUp 0.25s ease-out",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
      },
    },
  },
  plugins: [],
};
