"use client"
import { AnimatePresence, motion } from "motion/react"
import type { TargetAndTransition, Transition, Variant, Variants } from "motion/react"
import type { TextEffectProps } from "@/lib/@types/props"
import type { PerType } from "@/lib/@types/types"
import {
    defaultContainerVariants,
    defaultItemVariants,
    defaultStaggerTimes,
    presetVariants,
} from "@/ui/motion-config/text-effect.motion"
import { AnimationComponent } from "@/ui/motion/animation-component"

const splitText = (text: string, per: PerType) => {
    if (per === "line") return text.split("\n")
    return text.split(/(\s+)/)
}

const hasTransition = (variant?: Variant): variant is TargetAndTransition & { transition?: Transition } => {
    if (!variant) return false
    return typeof variant === "object" && "transition" in variant
}

const createVariantsWithTransition = (baseVariants: Variants, transition?: Transition & { exit?: Transition }): Variants => {
    if (!transition) return baseVariants

    const { exit: _, ...mainTransition } = transition

    return {
        ...baseVariants,
        visible: {
            ...baseVariants.visible,
            transition: {
                ...(hasTransition(baseVariants.visible) ? baseVariants.visible.transition : {}),
                ...mainTransition,
            },
        },
        exit: {
            ...baseVariants.exit,
            transition: {
                ...(hasTransition(baseVariants.exit) ? baseVariants.exit.transition : {}),
                ...mainTransition,
                staggerDirection: -1,
            },
        },
    }
}

export function TextEffect({
    children,
    per = "word",
    as = "p",
    variants,
    className,
    preset = "fade",
    delay = 0,
    speedReveal = 1,
    speedSegment = 1,
    trigger = true,
    onAnimationComplete,
    onAnimationStart,
    segmentWrapperClassName,
    containerTransition,
    segmentTransition,
    style,
}: TextEffectProps) {
    const segments = splitText(children, per)
    const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

    const baseVariants = preset ? presetVariants[preset] : { container: defaultContainerVariants, item: defaultItemVariants }

    const stagger = defaultStaggerTimes[per] / speedReveal

    const baseDuration = 0.3 / speedSegment

    const customStagger = hasTransition(variants?.container?.visible ?? {})
        ? (variants?.container?.visible as TargetAndTransition).transition?.staggerChildren
        : undefined

    const customDelay = hasTransition(variants?.container?.visible ?? {})
        ? (variants?.container?.visible as TargetAndTransition).transition?.delayChildren
        : undefined

    const computedVariants = {
        container: createVariantsWithTransition(variants?.container || baseVariants.container, {
            staggerChildren: customStagger ?? stagger,
            delayChildren: customDelay ?? delay,
            ...containerTransition,
            exit: {
                staggerChildren: customStagger ?? stagger,
                staggerDirection: -1,
            },
        }),
        item: createVariantsWithTransition(variants?.item || baseVariants.item, {
            duration: baseDuration,
            ...segmentTransition,
        }),
    }

    return (
        <AnimatePresence mode="popLayout">
            {trigger && (
                <MotionTag
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={computedVariants.container}
                    className={className}
                    onAnimationComplete={onAnimationComplete}
                    onAnimationStart={onAnimationStart}
                    style={style}
                >
                    {per !== "line" ? <span className="sr-only">{children}</span> : null}
                    {segments.map((segment, index) => (
                        <AnimationComponent
                            key={`${per}-${index}-${segment}`}
                            segment={segment}
                            variants={computedVariants.item}
                            per={per}
                            segmentWrapperClassName={segmentWrapperClassName}
                        />
                    ))}
                </MotionTag>
            )}
        </AnimatePresence>
    )
}
