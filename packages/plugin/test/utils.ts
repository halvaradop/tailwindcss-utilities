import postcss from "postcss"
import tailwindcss from "tailwindcss"
import plugin from "@halvaradop/tailwindcss-utilities"

const TAILWIND_UTILITIES_DIRECTIVE = "@tailwind utilities;"

export const generateClasses = async (className: string) => {
    const classes = await postcss([
        tailwindcss({
            content: [{ raw: className }],
            corePlugins: { preflight: false },
            plugins: [plugin],
        }),
    ]).process(TAILWIND_UTILITIES_DIRECTIVE, { from: undefined })
    return classes.css
}

