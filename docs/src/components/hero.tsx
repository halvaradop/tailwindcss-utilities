"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PoweredBy } from "@/components/powered-by"
import { AnimatedGroup } from "@/components/ui/animated-group"

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: "blur(12px)",
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export const Hero = () => {
    return (
        <>
            <section className="overflow-hidden">
                <section className="w-full min-h-dvh mx-auto max-w-6xl px-6 mt-20 flex items-center justify-center flex-col relative ">
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <AnimatedGroup
                            variants={
                                {
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                } as any
                            }
                        >
                            <h1 className="text-balance text-4xl font-medium sm:text-5xl md:text-6xl">
                                Build with confidence using Tailwindcss
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg">
                                Tailwindcss utilities for rapid UI development and design consistency for building modern websites
                                and applications that look and feel the way you mean it.
                            </p>
                        </AnimatedGroup>
                        <div className="mt-8 space-x-4">
                            <Button asChild>
                                <Link href="/docs">Learn More</Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link href="https://github.com/halvaradop/tailwindcss-utilities" target="_blank">
                                    GitHub
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <PoweredBy />
                </section>
            </section>
        </>
    )
}

Hero.displayName = "Hero"
