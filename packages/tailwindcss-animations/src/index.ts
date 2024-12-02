import pluginCSS from "tailwindcss/plugin.js"
import { toSlashCase } from "@halvaradop/tailwindcss-core"
import { Config, PluginCreator } from "tailwindcss/types/config.js"
import { theme as themeDefault } from "./theme.js"
import { matchUtilitiesRegex } from "./utils.js"

export const config: Partial<Config> = {
    theme: themeDefault,
}

export const creator: PluginCreator = configApi => {
    const { matchUtilities, theme } = configApi

    Object.keys(themeDefault).forEach(key => {
        const toSlashKey = toSlashCase(key)
        if (matchUtilitiesRegex.test(key)) {
            matchUtilities(
                {
                    [toSlashKey]: value => ({
                        [toSlashKey]: value,
                    }),
                },
                { values: theme(key) }
            )
        }
    })
}

export const plugin = pluginCSS(creator, config)
export default plugin
