import postcss from "postcss"
import tailwindcss from "tailwindcss"

const TAILWIND_UTILITIES_DIRECTIVE = "@tailwind utilities;"

export const generateClasses = async (className: string) => {
    const classes = await postcss([
        tailwindcss({
            plugins: [],
            content: [{ raw: className }],
            corePlugins: { preflight: false },
        }),
    ]).process(TAILWIND_UTILITIES_DIRECTIVE, { from: undefined })
    return classes.css
}