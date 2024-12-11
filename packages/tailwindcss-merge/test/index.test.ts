import { describe, test } from "vitest"
import { merge } from "../src/index"

describe("tailwindcss-merge", () => {
    const testCases = [
        {
            message: "should keep the last background color",
            input: "red-500 blue-500 bg-green-500 bg-blue-700",
            expected: "bg-blue-700",
        },
        {
            message: "should keep the last text color",
            input: "px-4 py-2 text-center font-bold text-red-400 text-blue-400",
            expected: "px-4 py-2 text-center font-bold text-blue-400",
        },
        {
            message: "should remove redundant margins",
            input: "mx-auto mx-2 mt-2 mb-3 text-gray-100 bg-red-500 bg-blue-500 text-white",
            expected: "mx-2 mt-2 mb-3 bg-blue-500 text-white",
        },
        {
            message: "should keep the last padding",
            input: "p-4 p-2 text-center font-bold text-red-400 text-blue-400",
            expected: "p-2 text-center font-bold text-blue-400",
        },
        {
            message: "should keep the last font weight",
            input: "font-bold font-medium font-normal font-light",
            expected: "font-light",
        },
        {
            message: "should maintain the order of classes",
            input: "px-2 text-center bg-white font-bold text-red-200 py-2 bg-blue-100",
            expected: "px-2 text-center font-bold text-red-200 py-2 bg-blue-100",
        },
    ]

    testCases.forEach(({ message, input, expected }) => {
        test.concurrent(message, async ({ expect }) => {
            expect(await merge(input)).toBe(expected)
        })
    })
})
