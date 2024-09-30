import { describe, test, expect } from "vitest"
import { extractClasses } from "@halvaradop/tailwindcss-core/utils"
import plugin from "../src/index.js"
import { toSlashCase } from "../src/utils.js"

export const generateClasses = extractClasses(plugin)

describe("Plugin", () => {
    describe("Loading plugin", () => {
        test.concurrent("should load utility classes from theme", async () => {
            const html = `<div class="animation-delay-100"></div>`
            const css = await generateClasses(html)
            expect(css).toMatch(".animation-delay-100{animation-delay:100ms}")
        })
    })

    describe("Conflict prevention", () => {
        test.concurrent("should not create conflicting classes", async () => {
            const html = `<div class="w-full px-2 flex items-center"></div>`
            const css = await generateClasses(html)
            expect(css).toMatch(".flex{display:flex}.w-full{width:100%}.items-center{align-items:center}.px-2{padding-left:0.5rem;padding-right:0.5rem}")
        })
    })
})

describe("Animate delay utility classes", () => {
    const testCases = [
        {
            className: "animation-delay-100",
            expected: ".animation-delay-100{animation-delay:100ms}",
        },
        {
            className: "animation-delay-200",
            expected: ".animation-delay-200{animation-delay:200ms}",
        },
        {
            className: "animation-delay-300",
            expected: ".animation-delay-300{animation-delay:300ms}",
        },
        {
            className: "animation-delay-[8ms]",
            expected: ".animation-delay-\\[8ms\\]{animation-delay:8ms}",
        },
        {
            className: "animation-delay-[32ms]",
            expected: ".animation-delay-\\[32ms\\]{animation-delay:32ms}",
        },
    ]

    testCases.forEach(({ className, expected }) => {
        test.concurrent(`animation delay with class ${className}`, async () => {
            const html = `<div class="${className}"></div>`
            const css = await generateClasses(html)
            expect(css).toMatch(expected)
        })
    })
})

describe("toSlashCase", () => {
    const testCases = [
        { input: "animation", expected: "animation" },
        { input: "animationDelay", expected: "animation-delay" },
        { input: "animationDuration", expected: "animation-duration" },
        { input: "animationIterationCount", expected: "animation-iteration-count" },
    ]

    testCases.forEach(({ input, expected }) => {
        test(`converts ${input} to ${expected}`, () => {
            expect(toSlashCase(input)).toBe(expected)
        })
    })
})
