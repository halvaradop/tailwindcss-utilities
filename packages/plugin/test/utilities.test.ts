import { generateClasses } from "./utils"
import { describe, test, expect } from "vitest"

describe("Plugin", () => {
    test("generateClasses", async () => {
        const classes = await generateClasses("scroll")
        expect(classes).toBe("")
    })
})