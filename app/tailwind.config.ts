import type { Config } from "tailwindcss"
import utilities from "@halvaradop/tailwindcss-utilities"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "node_modules/@halvaradop/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                base: "900px",
            },
            colors: {
                black: {
                    DEFAULT: "#101111",
                },
                gray: {
                    DEFAULT: "#C0C0C0",
                    100: "#262626",
                    200: "#1B1B1B",
                    300: "#161616",
                },
                orange: {
                    DEFAULT: "#F78C6C",
                },
                purple: {
                    100: "#B985EE",
                    200: "#9761F4",
                    300: "#2C2933",
                },
            },
            backgroundImage: {
                hero: "url(/assets/hero-mobile.svg)",
            },
        },
    },
    plugins: [utilities],
}
export default config
