import { describe, test } from "vitest"
import { merge } from "../src/index.js"

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

describe("Multiple classes", () => {
    const testCases = [
        {
            message: "should merge padding and background color classes correctly",
            input1: "pt-2 px-2 pb-4 text-red-200 text-2xl bg-blue-500",
            input2: "pb-2 text-blue-100 bg-red-200",
            expected: "pt-2 px-2 text-2xl pb-2 text-blue-100 bg-red-200",
        },
        {
            message: "should merge layout and positioning classes correctly",
            input1: "flex items-center justify-center absolute",
            input2: "grid grid-cols-2 gap-x-4 relative",
            expected: "items-center justify-center grid grid-cols-2 gap-x-4 relative",
        },
        {
            message: "should merge border and shadow classes correctly",
            input1: "border border-red-500 shadow-md",
            input2: "border-2 border-blue-500 shadow-lg",
            expected: "border-2 border-blue-500 shadow-lg",
        },
        {
            message: "should merge width and height classes correctly",
            input1: "w-1/2 h-64",
            input2: "w-full h-auto",
            expected: "w-full h-auto",
        },
    ]
    testCases.forEach(({ message, input1, input2, expected }) => {
        test.concurrent(message, async ({ expect }) => {
            expect(await merge(input1, input2)).toBe(expected)
        })
    })
})
