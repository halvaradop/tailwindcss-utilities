"use client"
import { useState } from "react"
import { motion } from "motion/react"
import { Separator } from "@/ui/separator"
import { SegmentAnimation } from "@/ui/motion/segment"
import { hoverVariants, hoverTitleVariants, hoverDescVariants, hoverTransition } from "@/ui/motion-config/benefit.motion"
import { benefitsContent } from "@/lib/content"

export const BenefitsSection = () => {
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <section>
            <Separator>Built for real projects</Separator>
            <section className="min-h-[calc(100dvh-4rem)] mx-10 flex flex-col border-x border-solid border-border base:mx-16 xl:min-h-auto">
                <SegmentAnimation
                    title="Why Choose Us"
                    description="Tailwind CSS v4 brings a modern engine — and our utilities are built for it. We’ve designed every package to integrate seamlessly using the new configuration API, variant generator, and dynamic styling support."
                />
                <div className="grid text-primary text-left article:border-t article:border-solid article:border-border lg:flex-100 lg:grid-cols-2 lg:article:border-r lg:article:even:border-r-0 xl:min-h-[30dvw] xl:grid-cols-4 xl:article:nth-[2]:border-r">
                    {benefitsContent.map((item, idx) => {
                        return (
                            <motion.article
                                key={item.number}
                                className="group w-full h-full py-14 px-4 flex items-center justify-between gap-x-6 relative z-10 overflow-hidden sm:px-6 sm:gap-x-10 md:px-8 md:gap-x-12 base:px-10 base:gap-x-16 lg:flex-col lg:items-start hover:bg-surface hover:cursor-pointer"
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                                transition={hoverVariants}
                            >
                                <span>{item.number}</span>
                                <div className="h-full text-left flex items-center justify-center base:h-auto xl:text-right relative w-full flex-col xl:items-end">
                                    <motion.p
                                        className="text-lg font-medium group-hover:text-primary absolute left-0 right-0 w-full [--benefit-title-y:-3rem]"
                                        animate={hovered === idx ? "visible" : "hidden"}
                                        variants={hoverTitleVariants}
                                        initial="hidden"
                                        transition={hoverTransition}
                                    >
                                        {item.title}
                                    </motion.p>
                                    <motion.p
                                        className="w-full text-muted text-sm absolute left-0 right-0 group-hover:text-primary [--benefit-desc-y:100%]"
                                        animate={hovered === idx ? "visible" : "hidden"}
                                        variants={hoverDescVariants}
                                        initial="hidden"
                                        transition={hoverTransition}
                                    >
                                        {item.desc}
                                    </motion.p>
                                </div>
                            </motion.article>
                        )
                    })}
                </div>
            </section>
        </section>
    )
}
