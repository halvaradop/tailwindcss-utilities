import { describe, test, expect } from "vitest"
import { extractClasses } from "@halvaradop/tailwindcss-core/utils"
import { plugin } from "../src/index.js"

export const generateClasses = extractClasses(plugin)

describe("Plugin", () => {
    describe("Loading plugin", () => {
        test.concurrent("Utility classes from theme should be loaded", async () => {
            const html = `<div class="animate-delay-100"></div>`
            const css = await generateClasses(html)
            expect(css).toMatch(".animate-delay-100{animation-delay:100ms}")
        })
    })

    describe("Verify plugin does not create conflicting classes", () => {
        test.concurrent("Loaded utility classes do not create conflicts", async () => {
            const html = `<div class="w-full px-2 flex items-center"></div>`
            const css = await generateClasses(html)
            expect(css).toMatch(
                ".flex{display:flex}.w-full{width:100%}.items-center{align-items:center}.px-2{padding-left:0.5rem;padding-right:0.5rem}"
            )
        })
    })
})
