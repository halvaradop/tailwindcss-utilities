import Link from "next/link"
import { Button } from "@halvaradop/ui-button"

export const HeroSection = () => {
    return (
        <section className="min-h-[calc(100dvh-4rem)] text-left overflow-x-hidden flex items-center justify-center">
            <div className="base:w-3/4 base:mr-auto">
                <h1 className="text-white text-fluid-5xl">
                    A collection of focused utilities designed to elevate your development workflow.
                </h1>
                <p className="mt-6 mb-8 text-secondary md:text-fluid-base">
                    From layout helpers to smooth animations, each utility is crafted for simplicity, consistency, and
                    performance.
                </p>
                <div className="mt-2 flex items-center gap-x-10">
                    <Button className="text-black">
                        <Link href="/docs">Get Started</Link>
                    </Button>
                    <Button className="text-secondary" variant="ghost">
                        <Link href="https://github.com/halvaradop/tailwindcss-utilities" target="_blank">
                            Github
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
