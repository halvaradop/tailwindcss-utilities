import { Options } from "tsup"

/**
 * Base tsup configuration for the package.
 */
export const tsupConfig: Options = {
    entry: ["src"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    splitting: false,
    external: ["tailwindcss", "postcss"],
}
