export type ArgsFunction = (...args: any) => void

export type PresetType = "blur" | "fade-in-blur" | "scale" | "fade" | "slide"

export type PerType = "word" | "char" | "line"

export interface SeparatorContext {
    index: number
    increment: () => void
    reset: () => void
}
