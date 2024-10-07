import { defineConfig } from "vitest/config"

/**
 * TODO: Update the CJS build of Vite's Node API as it is deprecated
 */
export default defineConfig({
    test: {
        coverage: {
            provider: "v8",
            reporter: ["text", "html"],
            include: ["packages/**/*.ts", "!packages/**/*.config.ts"],
            exclude: ["**/node_modules", "**/dist"],
        },
    },
})
