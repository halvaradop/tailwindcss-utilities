import { defineConfig } from "tsup"

type TsupConfig = Parameters<typeof defineConfig>[0]

export const tsupConfig: TsupConfig = {
    entry: ["src"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    splitting: false,
    external: ["tailwindcss", "postcss"],
}