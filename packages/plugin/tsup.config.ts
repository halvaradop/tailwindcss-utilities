import { defineConfig } from "tsup"

export default defineConfig({
    entry: ["src"],
    format: ["cjs", "esm"],
    dts: true,
    minify: true,
    clean: true,
    splitting: false,
})