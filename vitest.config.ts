import { defineConfig } from "vitest/config"

/**
 * TODO: Update the CJS build of Vite's Node API as it is deprecated
 */
export default defineConfig({
    test: {
        include: ["packages/**/*.test.ts"],
        coverage: {
            provider: "v8",
            reporter: ["text", "html"],
            include: ["packages/**/*.test.ts"],
            exclude: ["node_modules", "dist"],
        },
    },
})