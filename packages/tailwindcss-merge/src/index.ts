import { extractClasses } from "@halvaradop/tailwindcss-core/css"
import { Entry } from "./types.js"

/**
 * Extracts the classes from the generated CSS
 */
const generateClasses = extractClasses(() => {}, false)

/**
 * Parses the CSS classes from the provided CSS string, extracting the class name,
 * property, and value. Excludes CSS variables (those that start with `--`).
 *
 * @param {string} css - CSS string extracted from the `generateClasses` function
 * @returns {Entry[]} - Array of objects with the class name, property, and value
 */
const parseCSSClasses = (css: string): Entry[] => {
    let classMatch
    const parse = []
    const classRegex = /\.([a-zA-Z0-9_-]+)\s*\{([^}]*)\}/g
    const propertyRegex = /([a-zA-Z-]+)\s*:\s*([^;\n]+)[;\n]?/g
    while ((classMatch = classRegex.exec(css))) {
        const [_, name, body] = classMatch
        let propertyMatch
        while ((propertyMatch = propertyRegex.exec(body))) {
            const property = propertyMatch[1].trim()
            const value = propertyMatch[2].trim()
            if (property.startsWith("--")) continue
            parse.push({ name, property, value })
        }
    }
    return parse
}

/**
 * Merges the provided classes, keeping the last class that defines a property.
 *
 * @param {string} classes - Classes to merge
 * @returns {Promise<string>} - Merged classes
 * @example
 * // Expected: "bg-blue-700"
 * const merged = await merge("red-500 blue-500 bg-green-500", "bg-blue-700")
 *
 * // Expected: "px-4 py-2 text-center font-bold text-blue-400"
 * const merged = await merge("px-2 text-center font-bold text-red-200 py-2 bg-blue-100")
 */
export const merge = async (...classes: string[]): Promise<string> => {
    const unionClasses = classes.join(" ")
    const classNames = await generateClasses(`<div class="${unionClasses}"></div>`)
    const cssClasses = parseCSSClasses(classNames)
    const indexes = new Map<string, number>()
    unionClasses.split(" ").forEach((substring, key) => indexes.set(substring, key))
    const priority = new Map<string, string>()
    for (const { name, property } of cssClasses) {
        if (!priority.has(property) || indexes.get(name)! > indexes.get(priority.get(property)!)!) {
            priority.set(property, name)
        }
    }
    const entries = [...new Set([...priority.values()])].sort((a, b) => indexes.get(a)! - indexes.get(b)!)
    return entries.join(" ")
}
