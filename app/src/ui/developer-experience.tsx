"use client"
import { useState } from "react"
import { Separator } from "./separator"
import { motion } from "motion/react"
import { SegmentAnimation } from "./animations/segment"
import { cardVariants } from "./motion/card.motion"
import { whyChooseUsContent } from "@/lib/content"

export const DeveloperExperienceSection = () => {
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <section>
            <Separator index={1}>Built for real projects</Separator>
            <section className="min-h-[calc(100dvh-4rem)] mx-10 flex flex-col border-x border-solid border-border base:mx-16 xl:min-h-auto">
                <SegmentAnimation
                    title="Why Choose Us"
                    description="Tailwind CSS v4 brings a modern engine — and our utilities are built for it. We’ve designed every package to integrate seamlessly using the new configuration API, variant generator, and dynamic styling support."
                />
                <div className="grid text-primary text-left article:border-t article:border-solid article:border-border lg:flex-100 lg:grid-cols-2 lg:article:border-r lg:article:even:border-r-0 xl:min-h-[30dvw] xl:grid-cols-4 xl:article:nth-[2]:border-r">
                    {whyChooseUsContent.map((item, idx) => (
                        <motion.article
                            key={item.number}
                            className="group w-full h-full py-14 px-4 flex items-center justify-between gap-x-6 relative z-10 overflow-hidden sm:px-6 sm:gap-x-10 md:px-8 md:gap-x-12 base:px-10 base:gap-x-16 lg:flex-col lg:items-start hover:bg-surface hover:cursor-pointer"
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                            transition={cardVariants}
                        >
                            <span>{item.number}</span>
                            <div className="text-left self-end xl:text-right overflow-hidden">
                                <p className="text-lg font-medium group-hover:text-primary">{item.title}</p>
                                <motion.p
                                    className="mt-1 text-muted overflow-hidden group-hover:text-primary"
                                    animate={
                                        hovered === idx ? { opacity: 1, y: 0, height: "auto" } : { opacity: 0, y: 20, height: 0 }
                                    }
                                    initial={{ opacity: 0, y: 20, height: 0 }}
                                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    {item.desc}
                                </motion.p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </section>
    )
}
