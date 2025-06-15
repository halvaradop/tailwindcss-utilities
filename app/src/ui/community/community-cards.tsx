"use client"
import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"
import { Separator } from "@/ui/separator"
import { hoverDescVariants, hoverTitleVariants, hoverTransition, hoverVariants } from "@/ui/motion-config/benefit.motion"
import { SegmentAnimation } from "@/ui/motion/segment"
import { communityCards } from "@/lib/content"

export const CommunitySection = () => {
    const [hovered, setHovered] = useState<number | null>(null)
    return (
        <section>
            <Separator>Get Involved</Separator>
            <section className="mx-10 border-x border-solid border-border base:mx-16 lg:min-h-[calc(100dvh-4rem)] lg:flex lg:flex-col">
                <SegmentAnimation
                    title="Ways to Contribute"
                    description="Join the @halvaradop/tailwindcss community! Explore ways to contribute, collaborate, and connect with others to help shape the future of our utilities and ecosystem."
                />
                <div className="grid text-primary text-left a:border-t a:border-solid a:border-border lg:flex-100 lg:grid-cols-3 lg:a:border-r lg:a:nth-[3]:border-r-0 lg:a:nth-[5]:border-r-0 lg:a:nth-[4]:col-span-2 xl:min-h-[30dvw] xl:a:nth-[2]:border-r">
                    {communityCards.map((item, idx) => (
                        <Link href={item.href} key={item.number} target="_blank" rel="noopener noreferrer">
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
                        </Link>
                    ))}
                </div>
            </section>
        </section>
    )
}
