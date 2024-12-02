import { describe, test } from "vitest"
import { extractClasses } from "../src/generate-classes.js"
import { merge, keysToTransform, toSlashCase } from "../src/index.js"

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

describe("Merge objects with primitive values and expected errors", () => {
    const testCases = [
        {
            description: "Merge with primitive values",
            source: 1,
            target: 2,
            expected: 2,
        },
        {
            description: "Merge with primitive values and one object",
            source: {
                a: 1,
            },
            target: 2,
            expected: { a: 1 },
        },
        {
            description: "Merge with primitive values and one object",
            source: 2,
            target: {
                a: 1,
            },
            expected: { a: 1 },
        },
        {
            description: "Merge two objects with nested objects",
            source: {
                a: 1,
                b: {
                    c: 2,
                },
                e: 5,
            },
            target: {
                b: {
                    d: 3,
                },
                c: 4,
                e: 7,
            },
            expected: {
                a: 1,
                b: {
                    c: 2,
                    d: 3,
                },
                c: 4,
                e: 7,
            },
        },
        {
            description: "Merge two empty objects",
            source: {},
            target: {},
            expected: {},
        },
        {
            description: "Merge one empty object and one nullish value",
            source: {},
            target: null,
            expected: {},
        },
        {
            description: "Merge two nullish values",
            source: null,
            target: null,
            expected: null,
        },
        {
            description: "Merge two objects and remove nullish values",
            source: {
                a: null,
                b: null,
            },
            target: {
                a: undefined,
                b: undefined,
                c: null,
            },
            expected: {},
            nullishValues: false,
        },
        {
            description: "Merge two objects and remove nullish values",
            source: {
                a: 1,
                b: {
                    c: null,
                },
            },
            target: {
                a: undefined,
                b: {
                    c: 2,
                },
                d: 3,
            },
            expected: {
                b: {
                    c: 2,
                },
                d: 3,
            },
        },
    ]
    testCases.forEach(({ description, source, target, expected, nullishValues }) => {
        test.concurrent(description, ({ expect }) => {
            // @ts-ignore
            expect(merge(source, target, false, nullishValues)).toEqual(expected)
        })
    })
})

describe("Transform keys", () => {
    const testCases = [
        {
            description: "",
            input: {
                fontSize: 1,
                UpperCase: 2,
            },
            expected: {
                "font-size": 1,
                "upper-case": 2,
            },
        },
    ]
    testCases.forEach(({ description, input, expected }) => {
        test.concurrent(description, ({ expect }) => {
            expect(keysToTransform(input, toSlashCase)).toEqual(expected)
        })
    })
})
