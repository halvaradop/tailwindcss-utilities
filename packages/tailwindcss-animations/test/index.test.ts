import { describe, test, expect } from "vitest"
import { extractClasses } from "@halvaradop/tailwindcss-core/utils"
import { plugin } from "../src/index.js"
import { theme } from "../src/theme.js"

export const generateClasses = extractClasses(plugin)

describe("Plugin", () => {
    describe("Loading plugin", () => {
        test.concurrent("should load utility classes from theme", async () => {
            const html = `<div class="animation-delay-100"></div>`
            const css = await generateClasses(html)
            expect(css).toMatch(".animation-delay-100{animation-delay:100ms}")
            expect(css).not.toMatch(".animation-delay-200{animation-delay:200ms}")
        })
    })

    test("Loaded keyframes utility classes", async () => {
        expect(plugin.config?.theme?.keyframes).toEqual(theme.keyframes)
        expect(plugin.config?.theme?.keyframes).not.toEqual({})
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

describe("Keyframes utility classes", () => {
    const testCases = [
        {
            className: "animate-fade-in",
            expected: "@keyframes fade-in{0%{opacity:0}100%{opacity:1}}",
        },
        {
            className: "animate-fade-out",
            expected: "@keyframes fade-out{0%{opacity:1}100%{opacity:0}}",
        },
        {
            className: "animate-rotate-90",
            expected: "@keyframes rotate-90{0%{transform:rotate(0deg)}100%{transform:rotate(90deg)}}",
        },
    ]

    testCases.forEach(({ className, expected }) => {
        test.concurrent(`keyframes with class ${className}`, async () => {
            const html = `<div class="${className}"></div>`
            const css = await generateClasses(html)
            expect(css).toMatch(expected)
        })
    })
})
