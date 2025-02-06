import { Config as DefaultConfig } from "tailwindcss"

/**
 * This file contains the types and interfaces used throughout the application.
 * It allows us to define the types required for the different utilities.
 */
export type FontFluency = Pick<CSSStyleDeclaration, "fontSize" | "lineHeight" | "letterSpacing">

export type Tag = keyof HTMLElementTagNameMap

interface ConfigTheme {
    fluency?: Record<string, Partial<FontFluency>>
    selectors?: Tag[]
}

/**
 * Extends the default TailwindCSS configuration type and adds extra values
 * supported by the plugin like `fluency` and `selectors`.
 */
export interface Config extends DefaultConfig {
    theme: ConfigTheme & DefaultConfig["theme"]
}
