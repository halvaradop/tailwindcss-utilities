import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config"

/**
 * Defines default values for the minWidth theme in TailwindCSS.
 * It provides a set of predefined minimum widths.
 */
export const minWidthUtilities: ResolvableTo<KeyValuePair<string, string>> = {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1526px"
}