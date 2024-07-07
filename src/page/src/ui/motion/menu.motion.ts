import { m, Variants } from "framer-motion"

export const menuVariants: Variants = {
    hidden: {
        x: "100%"
    },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            mass: 3,
            damping: 35,
            bounce: 0.8,
            delayChildren: 0.2,
            staggerChildren: 0.05,
        }
    },
    exit: {
        x: "100%",
        transition: {
            type: "spring",
            stiffness: 100,
            mass: 4,
            damping: 25,
        }
    }
}


export const itemVariants: Variants = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeOut"
        }
    },
    exit: {
        x: 50,
        opacity: 0,
        transition: {
            type: "tween",
            ease: "circIn",
        }
    }
}