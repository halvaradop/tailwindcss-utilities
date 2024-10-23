import { describe, test } from "vitest"
import { extractClasses } from "@halvaradop/tailwindcss-core/utils"
import plugin from "../src"

const generateClasses = extractClasses(plugin)

describe("scroll utilities", () => {
    const testCases = [
        {
            input: `<div class="scroll:w-2"></div>`,
            output: ".scroll\\:w-2::-webkit-scrollbar{width:0.5rem}",
        },
        {
            input: `<div class="scroll:w-[10px]"></div>`,
            output: ".scroll\\:w-\\[10px\\]::-webkit-scrollbar{width:10px}",
        },
        {
            input: `<div class="thumb:my-4"></div>`,
            output: ".thumb\\:my-4::-webkit-scrollbar-thumb{margin-top:1rem;margin-bottom:1rem}",
        },
        {
            input: `<div class="thumb:my-[8px]"></div>`,
            output: ".thumb\\:my-\\[8px\\]::-webkit-scrollbar-thumb{margin-top:8px;margin-bottom:8px}",
        },
        {
            input: `<div class="track:border"></div>`,
            output: ".track\\:border::-webkit-scrollbar-track{border-width:1px}",
        },
        {
            input: `<div class="track:border-[3px]"></div>`,
            output: ".track\\:border-\\[3px\\]::-webkit-scrollbar-track{border-width:3px}",
        },
    ]
    testCases.forEach(({ input, output }) => {
        const extract = input.match(/class="([^"]*)"/)?.[1]
        test.concurrent(`generate the css for ${extract}`, async ({ expect }) => {
            const css = await generateClasses(input)
            expect(css).toMatch(output)
        })
    })
})
