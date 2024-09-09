import { defineConfig } from "tsup"

type TsupConfig = Parameters<typeof defineConfig>[0]

export const tsupConfig: TsupConfig = {
    entry: ["src"],
    format: ["cjs", "esm"],
    dts: true,
    minify: true,
    clean: true,
    splitting: false,
}
