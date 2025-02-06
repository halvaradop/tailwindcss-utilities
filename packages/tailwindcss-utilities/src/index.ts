import plugin from "tailwindcss/plugin.js"
import { PluginAPI } from "tailwindcss/types/config.js"
import { PluginCreator } from "tailwindcss/types/config.js"
import { scrollUtilities } from "./utilities/scroll-utility.js"
import { fluencyUtilities } from "./utilities/fluency-utility.js"
import { unstable_selector_utilities } from "./utilities/selector-utility.js"
import { pseudoClassesUtilities } from "./utilities/pseudo-classes-utility.js"
import { minWidthUtilities } from "./utilities/min-width-utility.js"

/**
 * Entry point of the application. This encapsulates the utilities offered
 * by the plugin.
 *
 * @param {PluginAPI} configApi The configuration API object obtained from tailwindcss.config.ts
 */
export const creator: PluginCreator = (configApi: PluginAPI) => {
    unstable_selector_utilities(configApi)
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
