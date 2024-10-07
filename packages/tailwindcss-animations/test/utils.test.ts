import { describe, test, expect } from "vitest"
import { toSlashCase, matchUtilitiesRegex } from "../src/utils.js"

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

describe("matchUtilitiesRegex", () => {
    test("matches animation utilities", () => {
        expect(matchUtilitiesRegex.test("animationDelay")).toBe(true)
        expect(matchUtilitiesRegex.test("animationDuration")).toBe(true)
        expect(matchUtilitiesRegex.test("animation")).toBe(false)
        expect(matchUtilitiesRegex.test("keyframes")).toBe(false)
    })
})
