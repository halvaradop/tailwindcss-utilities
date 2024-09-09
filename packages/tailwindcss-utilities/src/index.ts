import plugin from "tailwindcss/plugin.js"
import { PluginCreator } from "tailwindcss/types/config.js"
import { scrollUtilities } from "./utilities/scroll-utility.js"
import { fluencyUtilities } from "./utilities/fluency-utility.js"
import { selectorUtilities } from "./utilities/selector-utility.js"
import { pseudoClassesUtilities } from "./utilities/pseudo-classes-utility.js"
import { minWidthUtilities } from "./utilities/min-width-utility.js"

/**
 * Entry point of the application. This encapsulates the utilities offered
 * by the plugin.
 *
 * @param configApi The configuration API object obtained from tailwindcss.config.ts
 */
export const creator: PluginCreator = configApi => {
    selectorUtilities(configApi)
    fluencyUtilities(configApi)
    scrollUtilities(configApi)
    pseudoClassesUtilities(configApi)
}

export default plugin(creator, {
    theme: {
        extend: {
            minWidth: minWidthUtilities,
        },
    },
})