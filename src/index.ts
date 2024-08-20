import plugin from "tailwindcss/plugin"
import { KeyValuePair, PluginCreator, ResolvableTo } from "tailwindcss/types/config"
import { scrollUtilities } from "./utilities/scroll-utility"
import { fluencyUtilities } from "./utilities/fluency-utility"
import { selectorUtilities } from "./utilities/selector-utility"
import { pseudoClassesUtilities } from "./utilities/pseudo-classes-utility"
import { minWidthUtilities } from "./utilities/min-width-utility"

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
