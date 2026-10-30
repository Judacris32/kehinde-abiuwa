import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#15120E", 900: "#100D0A", 800: "#1C1814", 700: "#252019", 600: "#2F2920" },
        backdrop: "#362E21",
        paper: "#FFFDF9",
        ivory: { DEFAULT: "#F3EEE3", 200: "#E9E2D3", 300: "#D9CFBC", muted: "#B5AB98" },
        brass: { DEFAULT: "#C29F62", light: "#D8BC88", deep: "#7A5B2B" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { label: "0.22em" },
      maxWidth: { prose: "64ch", site: "1240px" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "marquee-reverse": { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } },
      },
      animation: {
        marquee: "marquee 48s linear infinite",
        "marquee-reverse": "marquee-reverse 56s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
