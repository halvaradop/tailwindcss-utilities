import type { Transition, Variants } from "motion"

export const hoverVariants: Transition = {
    scale: {
        type: "spring",
        stiffness: 260,
        damping: 20,
    },
    backgroundColor: {
        duration: 0.3,
    },
    boxShadow: {
        duration: 0.3,
    },
}

export const hoverTitleVariants: Variants = {
    hidden: {
        y: 0,
        opacity: 1,
    },
    visible: {
        y: "var(--benefit-title-y)",
        opacity: 0,
    },
    exit: {
        y: 0,
        opacity: 1,
    },
}

export const hoverDescVariants: Variants = {
    hidden: {
        y: "var(--benefit-desc-y)",
        opacity: 0,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: 32,
    },
}

export const hoverTransition: Transition = {
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1],
}
