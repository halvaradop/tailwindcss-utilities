import { describe, test } from "vitest"
import { extractClasses } from "../src/generate-classes"
import { merge } from "../src/merge"

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
    const testCases = [
        {
            input: ``,
            expected: "",
        },
        {
            input: `<div class=""></div>`,
            expected: "",
        },
        {
            input: `<div class="text-lg"></div>`,
            expected: ".text-lg{font-size:1.125rem;line-height:1.75rem}",
        },
    ]

    testCases.forEach(({ input, expected }) => {
        const extract = input.match(/class="([^"]*)"/)?.[1]
        test(`Extract classes from HTML content: ${extract}`, async ({ expect }) => {
            const css = await generateClasses(input)
            expect(css).toMatch(expected)
        })
    })
})

describe("Merge objects", () => {
    const testCases = [
        {
            description: "Merge two objects",
            source: { a: 1, b: 2 },
            target: { b: 3, c: 4 },
            expected: { a: 1, b: 3, c: 4 },
        },
        {
            description: "Merge two objects with nested objects",
            source: { a: 1, b: { c: 2 } },
            target: { b: 3, c: 4 },
            expected: { a: 1, b: { c: 2 }, c: 4 },
        },
        {
            description: "Merge two objects with nested objects and nested objects",
            source: { a: 1, b: { c: 2 } },
            target: { b: { c: 3 }, c: 4 },
            expected: { a: 1, b: { c: 3 }, c: 4 },
        },
        {
            description: "Merge two objects with nested objects and nested objects with different keys",
            source: { a: 1, b: { c: 2 } },
            target: { b: { d: 3 }, c: 4 },
            expected: { a: 1, b: { c: 2, d: 3 }, c: 4 },
        },
        {
            description: "Merge two objects with nested objects and nested objects with different keys and nested objects",
            source: { a: 1, b: { c: 2, d: { e: 3 } } },
            target: { b: { d: 4 }, c: 5 },
            expected: { a: 1, b: { c: 2, d: { e: 3 } }, c: 5 },
        },
        {
            description: "Merge two objects with nested objects and nested objects with different keys and nested objects with different keys",
            source: { a: 1, b: { c: 2, d: { e: 3 } } },
            target: { b: { d: { f: 4 } }, c: 5 },
            expected: { a: 1, b: { c: 2, d: { e: 3, f: 4 } }, c: 5 },
        },
        {
            description: "Merge two object with nested object and nested object without priority",
            source: { a: 1, b: { c: 2, d: { e: 3 } } },
            target: { b: { d: 4 }, c: 5 },
            expected: { a: 1, b: { c: 2, d: 4 }, c: 5 },
            priority: false,
        },
    ]

    testCases.forEach(({ description, source, target, expected, priority = true }) => {
        test.concurrent(description, ({ expect }) => {
            expect(merge(source, target, priority)).toEqual(expected)
        })
    })
})
