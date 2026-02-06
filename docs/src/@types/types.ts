export type ArgsFunction = (...args: any) => void

export type PresetType = "fade" | "slide" | "scale" | "blur" | "blur-slide" | "zoom" | "flip" | "bounce" | "rotate" | "swing"

export type PerType = "word" | "char" | "line"

export interface SeparatorContext {
    index: number
    increment: () => void
    reset: () => void
}
