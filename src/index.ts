import plugin from "tailwindcss/plugin"
import { PluginCreator } from "tailwindcss/types/config"

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
    const { addVariant } = configApi
    tags.forEach(tag => addVariant(tag, `:where(&:is(${tag}), & > ${tag})`))

    addVariant("scroll", "&::-webkit-scrollbar")
    addVariant("thumb", "&::-webkit-scrollbar-thumb")
    addVariant("track", "&::-webkit-scrollbar-track")
}

export default plugin(creator)