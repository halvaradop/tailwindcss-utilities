import type { Transition } from "motion"

export const cardVariants: Transition = {
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
