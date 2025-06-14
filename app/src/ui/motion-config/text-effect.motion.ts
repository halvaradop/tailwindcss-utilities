import type { Variants } from "motion"
import type { PerType, PresetType } from "@/lib/@types/types"

export const defaultStaggerTimes: Record<PerType, number> = {
    char: 0.03,
    word: 0.05,
    line: 0.1,
}

export const defaultContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
    exit: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

export const defaultItemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    },
    exit: { opacity: 0 },
}

export const presetVariants: Record<PresetType, { container: Variants; item: Variants }> = {
    blur: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, filter: "blur(12px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
            exit: { opacity: 0, filter: "blur(12px)" },
        },
    },
    "fade-in-blur": {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 20, filter: "blur(12px)" },
        },
    },
    scale: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0 },
        },
    },
    fade: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
            exit: { opacity: 0 },
        },
    },
    slide: {
        container: defaultContainerVariants,
        item: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 20 },
        },
    },
}
