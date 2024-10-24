import { describe, test, expect } from "vitest"
import { extractClasses, merge } from "../src/generate-classes"

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

describe("Merge objects", () => {
    test("Merge two objects", () => {
        const source = { a: 1, b: 2 }
        const target = { b: 3, c: 4 }
        expect(merge(source, target)).toEqual({ a: 1, b: 3, c: 4 })
    })

    test("Merge two objects with nested objects", () => {
        const source = { a: 1, b: { c: 2 } }
        const target = { b: 3, c: 4 }
        expect(merge(source, target)).toEqual({ a: 1, b: { c: 2 }, c: 4 })
    })

    test("Merge two objects with nested objects and nested objects", () => {
        const source = { a: 1, b: { c: 2 } }
        const target = { b: { c: 3 }, c: 4 }
        expect(merge(source, target)).toEqual({ a: 1, b: { c: 3 }, c: 4 })
    })

    test("Merge two objects with nested objects and nested objects with different keys", () => {
        const source = { a: 1, b: { c: 2 } }
        const target = { b: { d: 3 }, c: 4 }
        expect(merge(source, target)).toEqual({ a: 1, b: { c: 2, d: 3 }, c: 4 })
    })

    test("Merge two objects with nested objects and nested objects with different keys and nested objects", () => {
        const source = { a: 1, b: { c: 2, d: { e: 3 } } }
        const target = { b: { d: 4 }, c: 5 }
        expect(merge(source, target)).toEqual({ a: 1, b: { c: 2, d: { e: 3 } }, c: 5 })
    })

    test("Merge two objects with nested objects and nested objects with different keys and nested objects with different keys", () => {
        const source = { a: 1, b: { c: 2, d: { e: 3 } } }
        const target = { b: { d: { f: 4 } }, c: 5 }
        expect(merge(source, target)).toEqual({ a: 1, b: { c: 2, d: { e: 3, f: 4 } }, c: 5 })
    })

    test("Merge two object with nested object and nested object without priority", () => {
        const source = { a: 1, b: { c: 2, d: { e: 3 } } }
        const target = { b: { d: 4 }, c: 5 }
        expect(merge(source, target, false)).toEqual({ a: 1, b: { c: 2, d: 4 }, c: 5 })
    })

})
