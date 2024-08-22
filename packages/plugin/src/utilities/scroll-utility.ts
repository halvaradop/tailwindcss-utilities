import { PluginAPI } from "tailwindcss/types/config"

/**
 * Defines a set of variants to customize the scrollbar of a component or
 * element that presents overflow. These variants support the standard TailwindCSS
 * variants like :hover, :focus, and others.
 *
 * @param configApi The configuration API object obtained from tailwindcss.config.ts
 */
export const scrollUtilities = (configApi: PluginAPI) => {
    const { addVariant } = configApi

    addVariant("scroll", "&::-webkit-scrollbar")
    addVariant("thumb", "&::-webkit-scrollbar-thumb")
    addVariant("track", "&::-webkit-scrollbar-track")
}
