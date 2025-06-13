"use client"
import { type JSX, useEffect, useState } from "react"
import { motion } from "motion/react"
import { TextScrambleEffectProps } from "@/lib/@types/props"

const defaultChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function TextScrambleEffect({
    children,
    duration = 0.8,
    speed = 0.04,
    characterSet = defaultChars,
    className,
    as: Component = "p",
    trigger = true,
    onScrambleComplete,
    ...props
}: TextScrambleEffectProps) {
    const MotionComponent = motion.create(Component as keyof JSX.IntrinsicElements)
    const [isAnimating, setIsAnimating] = useState(false)
    const [displayText, setDisplayText] = useState(children)
    const text = children

    const scramble = async () => {
        if (isAnimating) return
        setIsAnimating(true)

        const steps = duration / speed
        let step = 0

        const interval = setInterval(() => {
            let scrambled = ""
            const progress = step / steps

            for (let i = 0; i < text.length; i++) {
                if (text[i] === " ") {
                    scrambled += " "
                    continue
                }

                if (progress * text.length > i) {
                    scrambled += text[i]
                } else {
                    scrambled += characterSet[Math.floor(Math.random() * characterSet.length)]
                }
            }

            setDisplayText(scrambled)
            step++

            if (step > steps) {
                clearInterval(interval)
                setDisplayText(text)
                setIsAnimating(false)
                onScrambleComplete?.()
            }
        }, speed * 1000)
    }

    useEffect(() => {
        if (!trigger) return
        scramble()
    }, [trigger])

    return (
        <MotionComponent className={className} {...props}>
            {displayText}
        </MotionComponent>
    )
}
