import postcss from "postcss"
import tailwindcss from "tailwindcss"
import minifyCSS from "@csstools/postcss-minify"
import { PluginsConfig } from "tailwindcss/types/config.js"
import { Flatten } from "@halvaradop/ts-utility-types/arrays"

const TAILWIND_UTILITIES_DIRECTIVE = "@tailwind utilities;"

/**
 * Extracts CSS classes from the provided HTML content and generates the corresponding CSS.
 *
 * @param htmlContent The HTML content from which the classes are extracted
 * @returns A string containing the generated CSS from the extracted classes.
 * @example
 * const html = `<div class="bg-red-500"></div>`;
 *
 * // Expected: ".bg-red-500 { background-color: #f56565; }"
 * const generateClasses = extractClasses(plugin);
 * const css = await generateClasses(html);
 */
export const extractClasses = (plugin: Flatten<PluginsConfig>, minify: boolean = true) => {
    const generateCSS = async (htmlContent: string) => {
        const classes = await postcss([
            minify ? minifyCSS() : () => {},
            tailwindcss({
                plugins: [plugin],
                content: [{ raw: htmlContent }],
                corePlugins: { preflight: false },
            }),
        ]).process(TAILWIND_UTILITIES_DIRECTIVE, { from: undefined })
        return classes.css
    }
    return generateCSS
}
