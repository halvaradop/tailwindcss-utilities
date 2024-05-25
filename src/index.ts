import plugin from "tailwindcss/plugin"
import { PluginCreator } from "tailwindcss/types/config"
import { verifySelectorsTheme } from "./utils";
import { scrollUtilities } from "./scroll-utilities";
import { fluencyUtilities } from "./fluency-utilities";


const tags = [
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
    "main",
    "body",
    "article",
    "label",
    "img",
    "figure",
    "picture",
    "caption",
    "footer"
]


export const creator: PluginCreator = (configApi) => {
    const { addVariant, theme } = configApi

    const selectors = verifySelectorsTheme(theme("selectors")).concat(tags)
    selectors.forEach(tag => addVariant(tag, `:where(&:is(${tag}), & > ${tag})`))

    fluencyUtilities(configApi)
    scrollUtilities(configApi)
}

export default plugin(creator)