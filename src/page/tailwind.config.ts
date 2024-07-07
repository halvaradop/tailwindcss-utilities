import type { Config } from "tailwindcss";
import utilities from "@halvaradop/tailwindcss-utilities"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#101111"
        },
        gray: {
          DEFAULT: "#C0C0C0",
          100: "#262626",
          200: "#1B1B1B",
        },
        orange: {
          DEFAULT: "#F78C6C"
        }
      }
    },
  },
  plugins: [
    utilities
  ],
};
export default config;
