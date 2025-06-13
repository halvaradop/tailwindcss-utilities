import { TextEffect } from "./text-effect"

export const HeroSection = () => {
    return (
        <section className="mx-10 min-h-[calc(100dvh-4rem)] text-primary border-x border-solid border-border base:mx-16">
            <p className="py-10 px-4 text-lg uppercase border-b border-border sm:px-6 md:px-8 base:py-16 base:px-10">
                Set Your Utilities in Motion
            </p>
            <h1 className="py-16 px-4 text-3xl/relaxed font-medium uppercase sm:px-6 md:px-8 sm:text-fluid-4xl base:px-10 hidden">
                The modern way to extend Tailwind’s capabilities with a curated suite of powerful utilities.
            </h1>
            <TextEffect
                className="py-16 px-4 text-3xl/relaxed font-medium uppercase sm:px-6 md:px-8 sm:text-fluid-4xl base:px-10"
                preset="fade-in-blur"
                speedReveal={1.1}
                speedSegment={0.5}
            >
                The modern way to extend Tailwind’s capabilities with a curated suite of powerful utilities.
            </TextEffect>
        </section>
    )
}
