import type { PluginAPI } from "tailwindcss/types/config.js"
import { verifySelectorsTheme } from "../lib/utils.js"

/**
 * This array contains the default tags supported by the selector variant
 * utilities. It provides a list of commonly used tags.
 */
const tags: string[] = [
    "div",
    "span",
    "a",
    "p",
    "img",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ul",
    "ol",
    "li",
    "table",
    "tr",
    "td",
    "form",
    "input",
    "button",
    "section",
    "header",
    "nav",
    "main",
    "body",
    "article",
    "label",
    "img",
    "figure",
    "picture",
    "caption",
    "footer",
]

/**
 * unstable
 *
 * Defines a set of tag variant utilities that allow you to customize different
 * HTML tags within a project. This enables more specific styling of elements.
 * The plugin also allows users to extend the default set of supported tags.
 *
 * To extend the default tags, you can add an array of new tags within the theme
 * property and set a `selectors` property in the Tailwind configuration file.
 *
 * @param configApi The configuration API object obtained from tailwindcss.config.ts
 */
export const unstable_selector_utilities = (configApi: PluginAPI) => {
    const { addVariant, theme } = configApi

    const selectors = verifySelectorsTheme(theme("selectors")).concat(tags)
    selectors.forEach(tag => addVariant(tag, `:where(&:is(${tag}), & > ${tag})`))
}
