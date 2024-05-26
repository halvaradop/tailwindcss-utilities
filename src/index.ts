import plugin from "tailwindcss/plugin"
import { PluginCreator } from "tailwindcss/types/config"
import { scrollUtilities } from "./scroll-utilities";
import { fluencyUtilities } from "./fluency-utilities";
import { selectorUtilities } from "./selector-utilities";

/**
 * Entry point of the application. This encapsulates the utilities offered
 * by the plugin.
 * 
 * @param configApi The configuration API object obtained from tailwindcss.config.ts
 */
export const creator: PluginCreator = (configApi) => {
    selectorUtilities(configApi)
    fluencyUtilities(configApi)
    scrollUtilities(configApi)
}

export default plugin(creator)