import { memo } from "react"
import { AnimationComponentProps } from "@/lib/@types/props"
import { motion } from "motion/react"
import { merge } from "@halvaradop/ui-core"

export const AnimationComponent = memo(({ segment, variants, per, segmentWrapperClassName }: AnimationComponentProps) => {
    const content =
        per === "line" ? (
            <motion.span variants={variants} className="block">
                {segment}
            </motion.span>
        ) : per === "word" ? (
            <motion.span aria-hidden="true" variants={variants} className="inline-block whitespace-pre">
                {segment}
            </motion.span>
        ) : (
            <motion.span className="inline-block whitespace-pre">
                {segment.split("").map((char, charIndex) => (
                    <motion.span
                        key={`char-${charIndex}`}
                        aria-hidden="true"
                        variants={variants}
                        className="inline-block whitespace-pre"
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.span>
        )

    if (!segmentWrapperClassName) {
        return content
    }

    const defaultWrapperClassName = per === "line" ? "block" : "inline-block"

    return <span className={merge(defaultWrapperClassName, segmentWrapperClassName)}>{content}</span>
})

AnimationComponent.displayName = "AnimationComponent"
