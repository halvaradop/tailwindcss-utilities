import { PluginAPI } from "tailwindcss/types/config"

/**
 * Defines a set of variant utilities for grouping elements and customizing
 * them in an easy way to create powerful classes and increase the specificity
 * of the elements.
 *
 * @param configApi The configuration API object obtained from tailwindcss.config.ts
 */
export const pseudoClassesUtilities = (configApi: PluginAPI) => {
    const { matchVariant } = configApi

    matchVariant("is", value => `&:is(${value})`)
    matchVariant("not", value => `&:not(${value})`)
    matchVariant("where", value => `&:where(${value})`)
}
