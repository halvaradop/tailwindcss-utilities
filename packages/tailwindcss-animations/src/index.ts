import pluginCSS from "tailwindcss/plugin.js"
import { Config, PluginCreator } from "tailwindcss/types/config.js"
import { theme } from "./theme.js"

export const config: Partial<Config> = {
    theme,
}

export const creator: PluginCreator = configApi => {
    const { matchUtilities, theme } = configApi

    matchUtilities(
        {
            "animate-delay": value => ({
                "animation-delay": value,
            }),
        },
        theme("animationDelay")
    )
}

export const plugin = pluginCSS(creator, config)
export default plugin
