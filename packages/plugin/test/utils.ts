import postcss from "postcss"
import tailwindcss from "tailwindcss"
import plugin from "../src/index"
import minify from "@csstools/postcss-minify"

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
 * const css = await generateClasses(html);
 */
export const generateClasses = async (htmlContent: string) => {
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
