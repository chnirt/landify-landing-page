import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#7C3AED",
        secondary: "#D5FAFC",
        tertiary: "#EDE9FE",
        quaternary: "#1DB5BE",
      },
      width: {
        "1/7": (1 / 7) * 100 + "%",
      },
      gap: {
        "1/7": (1 / 7) * 100 + "%",
      },
      margin: {
        "1/7": (1 / 7) * 100 + "%",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "octocat-wave": "octocat-wave 560ms ease-in-out",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "octocat-wave": {
          "0%, 100%": {
            transform: "rotate(0)",
          },
          "20%, 60%": {
            transform: "rotate(-25deg)",
          },
          "40%, 80%": {
            transform: "rotate(10deg)",
          },
        },
        
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
