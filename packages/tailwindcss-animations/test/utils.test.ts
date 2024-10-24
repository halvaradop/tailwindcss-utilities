import { describe, test, expect } from "vitest"
import { toSlashCase, matchUtilitiesRegex } from "../src/utils.js"

describe("toSlashCase", () => {
    const testCases = [
        {
            input: "animation",
            expected: "animation",
        },
        {
            input: "animationDelay",
            expected: "animation-delay",
        },
        {
            input: "animationDuration",
            expected: "animation-duration",
        },
        {
            input: "animationIterationCount",
            expected: "animation-iteration-count",
        },
    ]

    testCases.forEach(({ input, expected }) => {
        test(`converts ${input} to ${expected}`, () => {
            expect(toSlashCase(input)).toBe(expected)
        })
    })
})

describe("matchUtilitiesRegex", () => {
    const testCases = [
        {
            input: "animationDelay",
            expected: true,
        },
        {
            input: "animationDuration",
            expected: true,
        },
        {
            input: "animation",
            expected: false,
        },
        {
            input: "keyframes",
            expected: false,
        },
    ]

    testCases.forEach(({ input, expected }) => {
        test.concurrent(`matches ${input} as ${expected}`, ({ expect }) => {
            expect(matchUtilitiesRegex.test(input)).toBe(expected)
        })
    })
})
