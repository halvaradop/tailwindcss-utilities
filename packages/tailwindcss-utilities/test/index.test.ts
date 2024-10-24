import { describe, test } from "vitest"
import { extractClasses } from "@halvaradop/tailwindcss-core/css"
import plugin from "../src/index.js"

const generateClasses = extractClasses(plugin)

describe("scroll utilities", () => {
    const testCases = [
        {
            input: `<div class="scroll:w-2"></div>`,
            expected: ".scroll\\:w-2::-webkit-scrollbar{width:0.5rem}",
        },
        {
            input: `<div class="scroll:w-[10px]"></div>`,
            expected: ".scroll\\:w-\\[10px\\]::-webkit-scrollbar{width:10px}",
        },
        {
            input: `<div class="thumb:my-4"></div>`,
            expected: ".thumb\\:my-4::-webkit-scrollbar-thumb{margin-top:1rem;margin-bottom:1rem}",
        },
        {
            input: `<div class="thumb:my-[8px]"></div>`,
            expected: ".thumb\\:my-\\[8px\\]::-webkit-scrollbar-thumb{margin-top:8px;margin-bottom:8px}",
        },
        {
            input: `<div class="track:border"></div>`,
            expected: ".track\\:border::-webkit-scrollbar-track{border-width:1px}",
        },
        {
            input: `<div class="track:border-[3px]"></div>`,
            expected: ".track\\:border-\\[3px\\]::-webkit-scrollbar-track{border-width:3px}",
        },
    ]

    testCases.forEach(({ input, expected }) => {
        const extract = input.match(/class="([^"]*)"/)?.[1]
        test.concurrent(`generate the css for ${extract}`, async ({ expect }) => {
            const css = await generateClasses(input)
            expect(css).toMatch(expected)
        })
    })
})

describe("min-width utilities", () => {
    const testCases = [
        {
            input: `<div class="min-w-sm"></div>`,
            expected: ".min-w-sm{min-width:640px}",
        },
        {
            input: `<div class="min-w-md"></div>`,
            expected: ".min-w-md{min-width:768px}",
        },
        {
            input: `<div class="min-w-lg"></div>`,
            expected: ".min-w-lg{min-width:1024px}",
        },
        {
            input: `<div class="min-w-xl"></div>`,
            expected: ".min-w-xl{min-width:1280px}",
        },
        {
            input: `<div class="min-w-2xl"></div>`,
            expected: ".min-w-2xl{min-width:1526px}",
        },
    ]

    testCases.forEach(({ input, expected }) => {
        const extract = input.match(/class="([^"]*)"/)?.[1]
        test.concurrent(`generate the css for ${extract}`, async ({ expect }) => {
            const css = await generateClasses(input)
            expect(css).toMatch(expected)
        })
    })
})

describe("psuedo classes utilities", () => {
    const testCases = [
        {
            input: `<div class="where-[div]:w-10"></div>`,
            expected: ".where-\\[div\\]\\:w-10:where(div){width:2.5rem}",
        },
        {
            input: `<div class="is-[div]:w-10"></div>`,
            expected: ".is-\\[div\\]\\:w-10:is(div){width:2.5rem}",
        },
        {
            input: `<div class="w-10 not-[ul]:w-1.5"></div>`,
            expected: "w-10{width:2.5rem}.not-\\[ul\\]\\:w-1\\.5:not(ul){width:0.375rem}",
        },
    ]

    testCases.forEach(({ input, expected }) => {
        const extract = input.match(/class="([^"]*)"/)?.[1]
        test.concurrent(`generate the css for ${extract}`, async ({ expect }) => {
            const css = await generateClasses(input)
            expect(css).toMatch(expected)
        })
    })
})
