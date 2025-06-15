import { TextEffect } from "@/ui/motion/text-effect"

export const HeroSection = () => {
    return (
        <section className="mx-10 py-16 text-primary border-x border-solid border-border base:mx-16">
            <TextEffect
                className="mb-4 px-4 text-3xl/relaxed font-medium uppercase sm:px-6 md:px-8 base:px-10"
                as="h1"
                preset="fade-in-blur"
                speedReveal={1.1}
                speedSegment={0.5}
            >
                Join Our Community
            </TextEffect>
            <TextEffect
                className="px-4 text-muted text-lg sm:px-6 md:px-8 base:px-10 span:text-ellipsis span:[text-wrap:auto]"
                preset="fade-in-blur"
                speedReveal={1.1}
                speedSegment={0.5}
            >
                Join our community to share ideas, ask questions, and contribute to "@halvaradop/tailwindcss-utilities"! Connect
                with us on GitHub, open issues, or join discussions to help shape the future of the toolkit.
            </TextEffect>
        </section>
    )
}
