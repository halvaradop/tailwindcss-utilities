import postcss from "postcss"
import tailwindcss from "tailwindcss"
import { describe, expect, test } from "vitest"
import { generateClasses } from "./utils"

describe("Plugin Class Generation", () => {
    test("should generate correct classes", async () => {
        generateClasses(`<div class=""></div>`)
    })
})
