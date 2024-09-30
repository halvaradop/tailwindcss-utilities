import { describe, test } from "vitest"
import { extractClasses } from "@halvaradop/tailwindcss-core/utils"
import plugin from "../src"

const generateClasses = extractClasses(plugin)

describe("scroll utilities", () => {
    test.concurrent("generate the css for scroll utilities", async ({ expect }) => {
        const html = `<div class="scroll:w-2"></div>`
        const css = await generateClasses(html)
        expect(css).toMatch(".scroll\\:w-2::-webkit-scrollbar{width:0.5rem}")
    })

    test.concurrent("generate the css for scroll utilities with custom width", async ({ expect }) => {
        const html = `<div class="scroll:w-[10px]"></div>`
        const css = await generateClasses(html)
        expect(css).toMatch(".scroll\\:w-\\[10px\\]::-webkit-scrollbar{width:10px}")
    })

    test.concurrent("generate the css for scroll thumb utilities", async ({ expect }) => {
        const html = `<div class="thumb:my-4"></div>`
        const css = await generateClasses(html)
        expect(css).toMatch(".thumb\\:my-4::-webkit-scrollbar-thumb{margin-top:1rem;margin-bottom:1rem}")
    })

    test.concurrent("generate the css for scroll thumb utilities with custom margin", async ({ expect }) => {
        const html = `<div class="thumb:my-[8px]"></div>`
        const css = await generateClasses(html)
        expect(css).toMatch(".thumb\\:my-\\[8px\\]::-webkit-scrollbar-thumb{margin-top:8px;margin-bottom:8px}")
    })

    test.concurrent("generate the css for scroll track utilities", async ({ expect }) => {
        const html = `<div class="track:border"></div>`
        const css = await generateClasses(html)
        expect(css).toMatch(".track\\:border::-webkit-scrollbar-track{border-width:1px}")
    })

    test.concurrent("generate the css for scroll track utilities with custom border width", async ({ expect }) => {
        const html = `<div class="track:border-[3px]"></div>`
        const css = await generateClasses(html)
        expect(css).toMatch(".track\\:border-\\[3px\\]::-webkit-scrollbar-track{border-width:3px}")
    })
})
