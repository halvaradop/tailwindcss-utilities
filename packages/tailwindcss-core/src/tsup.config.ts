import { Options } from "tsup"

export const tsupConfig: Options = {
    entry: ["src"],
    format: ["cjs", "esm"],
    dts: true,
    minify: true,
    clean: true,
    splitting: false,
}
