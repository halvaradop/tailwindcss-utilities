import { TextEffect } from "@/ui/motion/text-effect"

export const HeroSection = () => {
    return (
        <section className="mx-10 min-h-[calc(100dvh-4rem)] text-primary border-x border-solid border-border base:mx-16">
            <TextEffect
                className="py-10 px-4 text-lg uppercase border-b border-solid border-border sm:px-6 md:px-8 base:py-16 base:px-10"
                preset="fade-in-blur"
                speedReveal={1.1}
                speedSegment={0.5}
            >
                Set Your Utilities in Motion
            </TextEffect>
            <TextEffect
                className="py-16 px-4 text-3xl/relaxed font-medium uppercase sm:px-6 md:px-8 sm:text-fluid-4xl base:px-10"
                preset="fade-in-blur"
                speedReveal={1.1}
                speedSegment={0.5}
                as="h1"
            >
                The modern way to extend Tailwind’s capabilities with a curated suite of powerful utilities.
            </TextEffect>
        </section>
    )
}
