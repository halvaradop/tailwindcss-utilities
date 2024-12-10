import { describe, test } from "vitest"
import { merge } from "../src/index"

describe("tailwindcss-merge", () => {
    const testCases = [
        {
            message: "remove background color and keep the last one",
            input: "red-500 blue-500 bg-green-500 bg-blue-700 animations-spin animations-spin-slow",
            expected: "red-500 blue-500 bg-blue-700 animations-spin-slow",
        },
        {
            message: "remove background color and keep the last one",
            input: "px-4 py-2 text-center font-bold text-red-400 text-blue-400",
            expected: "red-500 blue-500 bg-blue-700 animations-spin-slow",
        },
    ]

    testCases.forEach(({ message, input, expected }) => {
        test.concurrent(message, async ({ expect }) => {
            expect(merge(input)).toBe(expected)
        })
    })
})
