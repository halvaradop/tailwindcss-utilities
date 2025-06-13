"use client"
import { useState } from "react"
import { TextScrambleEffect } from "./text-scramble-effect"
import { TextScrambleProps } from "@/lib/@types/props"

export const TextScramble = ({ children, as = "p", characterSet }: TextScrambleProps) => {
    const [isTriggered, setIsTriggered] = useState(false)

    return (
        <TextScrambleEffect
            as={as}
            speed={0.1}
            duration={0.4}
            trigger={isTriggered}
            onHoverStart={() => setIsTriggered(true)}
            onScrambleComplete={() => setIsTriggered(false)}
            characterSet={characterSet}
        >
            {children}
        </TextScrambleEffect>
    )
}
