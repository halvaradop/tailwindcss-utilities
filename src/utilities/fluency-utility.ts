import { PluginAPI } from "tailwindcss/types/config";
import { EntryCSS, FontFluency } from "../types";
import { removeEmptyProperties } from "../utils/utils";

/**
 * This object contains the values used for font utilities. Each property 
 * defines the styles for a particular font size utility.
 */
const fontSizeUtilities: Record<string, EntryCSS<FontFluency>> = {
    "xs": {
        fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
        lineHeight: "1.25rem",
        letterSpacing: "0.05em",
    },
    "sm": {
        fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
        lineHeight: "1.375rem",
        letterSpacing: "0.025em"
    },
    "base": {
        fontSize: "clamp(1rem, 2vw, 1.25rem)",
        lineHeight: "1.5rem",
        letterSpacing: "0em"
    },
    "lg": {
        fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
        lineHeight: "1.75rem",
        letterSpacing: "-0.005em"
    },
    "xl": {
        fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
        lineHeight: "1.875rem",
        letterSpacing: "-0.01em"
    },
    "2xl": {
        fontSize: "clamp(1.5rem, 4vw, 2rem)",
        lineHeight: "2rem",
        letterSpacing: "-0.015em"
    },
    "3xl": {
        fontSize: "clamp(1.875rem, 5vw, 2.5rem)",
        lineHeight: "2.25rem",
        letterSpacing: "-0.02em"
    },
    "4xl": {
        fontSize: "clamp(2.25rem, 6vw, 3rem)",
        lineHeight: "2.5rem",
        letterSpacing: "-0.025em"
    },
    "5xl": {
        fontSize: "clamp(3rem, 7vw, 3.5rem)",
        lineHeight: "1",
        letterSpacing: "-0.03em"
    },
    "6xl": {
        fontSize: "clamp(3.75rem, 8vw, 4.5rem)",
        lineHeight: "1",
        letterSpacing: "-0.035em"
    },
};

/**
 * Defines a set of utilities that allow an element's font size to grow based 
 * on the viewport size of the device. These utilities support the responsive 
 * utility variants offered by TailwindCSS like :sm, :md, :lg.
 * 
 * To extend the default utilities, add the new values within the theme property 
 * in the configuration file under the "fluency" key with the following structure:
 * 
 * Partial<{
 *  fontSize?: string,
 *  lineHeight?: string,
 *  letterSpacing?: string
 * }>
 * 
 * @param configApi The configuration API object obtained from tailwindcss.config.ts
 */
export const fluencyUtilities = (configApi: PluginAPI) => {
    const { addUtilities, theme, e } = configApi

    const fluencyTheme = theme("fluency") ?? {}
    const merge = { ...fontSizeUtilities, ...fluencyTheme }

    const entries = Object.keys(merge).reduce<Record<string, EntryCSS>>((previous, size) => {
        const hasUpdate = !!fluencyTheme[size]
        const newValues = fluencyTheme[size]

        return {
            ...previous,
            [`.${e(`fluency-${size}`)}`]: {
                "font-size": (hasUpdate ? newValues["fontSize"] : undefined) ?? fontSizeUtilities[size]["fontSize"],
                "line-height": (hasUpdate ? newValues["lineHeight"] : undefined) ?? fontSizeUtilities[size]["lineHeight"],
                "letter-spacing": (hasUpdate ? newValues["letterSpacing"] : undefined) ?? fontSizeUtilities[size]["letterSpacing"]
            }
        }
    }, {})

    Object.keys(entries).forEach(key => removeEmptyProperties(entries[key]))
    addUtilities(entries)
};