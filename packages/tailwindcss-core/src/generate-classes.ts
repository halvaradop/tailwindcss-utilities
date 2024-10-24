import postcss from "postcss"
import tailwindcss from "tailwindcss"
import minify from "@csstools/postcss-minify"
import { PluginsConfig } from "tailwindcss/types/config.js"
import { FlattenArrayType } from "@halvaradop/ts-utility-types"
import { isObject, isPrimitive } from "@halvaradop/ts-utility-types/utils"

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
export const extractClasses = (plugin: FlattenArrayType<PluginsConfig>) => {
    const generateCSS = async (htmlContent: string) => {
        const classes = await postcss([
            minify(),
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

/**
 * Create a new object by merging two objects which prioritize the object types
 *
 * @param source first object to merge
 * @param target second object to merge
 * @param priority true if the object type should be prioritized, false otherwise
 * @returns merged two objects
 */
export const merge = <S extends Record<string, unknown>, T extends Record<string, unknown>>(
    source: S,
    target: T,
    priority: boolean = true
) => {
    if (priority && isPrimitive(source) && isObject(target)) return target
    if (priority && isPrimitive(target) && isObject(source)) return source
    const merged: Record<string, unknown> = { ...source }
    for (const key in target) {
        if (!isObject(target[key])) {
            if ((priority && !isObject(source[key])) || !priority) {
                merged[key] = target[key]
            } 
        } else {
            merged[key] = merge(source[key] as S, target[key] as T, priority)
        }
    }
    return merged
}
