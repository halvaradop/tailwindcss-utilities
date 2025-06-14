"use client"
import { motion } from "motion/react"
import { useMouse } from "@/hooks/use-mouse-position"

export const Cursor = () => {
    const {
        position: { x, y },
    } = useMouse()

    return (
        <motion.span
            className="size-10 block rounded-full bg-white pointer-events-none mix-blend-difference fixed z-50"
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
            style={{ translateX: "-50%", translateY: "-50%" }}
        />
    )
}
