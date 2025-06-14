"use client"
import { useRef } from "react"
import { useInView, AnimatePresence } from "motion/react"
import { TextEffect } from "@/ui/text-effect"
import { SegmentAnimationProps } from "@/lib/@types/props"

export const SegmentAnimation = ({ title, description }: SegmentAnimationProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const isView = useInView(containerRef, {
        once: true,
        margin: "-100px 0px -100px 0px",
    })

    return (
        <div className="py-16 px-4 grid sm:px-6 md:px-8 base:px-10 base:items-center base:grid-cols-2" ref={containerRef}>
            <AnimatePresence>
                {isView ? (
                    <TextEffect
                        className="mb-6 text-primary text-2xl md:text-fluid-3xl"
                        as="h2"
                        preset="fade-in-blur"
                        speedReveal={1.1}
                        speedSegment={0.5}
                    >
                        {title}
                    </TextEffect>
                ) : (
                    <span className="opacity-0">{title}</span>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isView ? (
                    <TextEffect className="text-muted text-fluid-base" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.5}>
                        {description}
                    </TextEffect>
                ) : (
                    <span className="opacity-0">{description}</span>
                )}
            </AnimatePresence>
        </div>
    )
}
