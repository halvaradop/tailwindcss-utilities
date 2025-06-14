"use client"
import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"
import { Separator } from "@/ui/separator"
import { cardVariants } from "@/ui/motion-config/card.motion"
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
                    description="Tailwind CSS v4 brings a modern engine — and our utilities are built for it. We’ve designed every package to integrate seamlessly using the new configuration API, variant generator, and dynamic styling support."
                />
                <div className="grid text-primary text-left a:border-t a:border-solid a:border-border lg:flex-100 lg:grid-cols-3 lg:a:border-r lg:a:nth-[3]:border-r-0 lg:a:nth-[5]:border-r-0 lg:a:nth-[4]:col-span-2 xl:min-h-[30dvw] xl:a:nth-[2]:border-r">
                    {communityCards.map((item, idx) => (
                        <Link href={item.href} key={item.number} target="_blank" rel="noopener noreferrer">
                            <motion.article
                                key={item.number}
                                className="group w-full h-full py-14 px-4 flex items-center justify-between gap-x-6 relative z-10 overflow-hidden sm:px-6 sm:gap-x-10 md:px-8 md:gap-x-12 base:px-10 base:gap-x-16 lg:flex-col lg:items-start hover:bg-surface hover:cursor-pointer"
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                                transition={cardVariants}
                            >
                                <span>{item.number}</span>
                                <div className="w-full text-right self-end overflow-hidden base:text-left">
                                    <p className="text-lg font-medium group-hover:text-primary">{item.title}</p>
                                    <motion.p
                                        className="mt-1 text-muted overflow-hidden group-hover:text-primary"
                                        animate={
                                            hovered === idx
                                                ? { opacity: 1, y: 0, height: "auto" }
                                                : { opacity: 0, y: 20, height: 0 }
                                        }
                                        initial={{ opacity: 0, y: 20, height: 0 }}
                                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
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
