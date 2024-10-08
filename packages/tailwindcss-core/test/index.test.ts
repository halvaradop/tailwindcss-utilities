import { describe, test, expect } from "vitest"
import { extractClasses } from "../src/generate-classes"

/**
 * Provide a mock implementation of the extractClasses function with an
 * empty plugin. The implementation is responsible for setting up the
 * plugin.
 */
const generateClasses = extractClasses({
    config: {},
    handler: () => {},
})

describe("Extract classes from tailwindcss", () => {
    test("Extract classes without provided HTML content", async () => {
        const html = ``
        const css = await generateClasses(html)
        expect(css).toMatch("")
    })

    test("Extract classes with provided empty HTML content", async () => {
        const html = `<div class=""></div>`
        const css = await generateClasses(html)
        expect(css).toMatch("")
    })

    test("Extract classes with provided HTML content and Tailwindcss class", async () => {
        const html = `<div class="text-lg"></div>`
        const css = await generateClasses(html)
        expect(css).toMatch(".text-lg{font-size:1.125rem;line-height:1.75rem}")
    })
})
