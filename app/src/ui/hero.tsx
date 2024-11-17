import Image from "next/image"
import Link from "next/link"
import hero from "@/assets/hero-mobile.svg"
import { Button } from "@halvaradop/ui-button"

export const HeroSection = () => {
    return (
        <section className="py-24 text-center relative overflow-x-hidden bg-hero bg-no-repeat bg-center base:h-[calc(100vh-5rem)] base:py-4 base:flex base:items-center base:justify-center base:bg-none">
            <Image
                className="hidden base:mx-auto base:block"
                width={1300}
                height={600}
                src={hero}
                alt="hero background desktop"
            />
            <div className="space-y-6 base:absolute">
                <h1 className="text-white fluency-5xl lg:fluency-6xl">TailwindCSS Utilities</h1>
                <p className="max-w-3xl mx-auto text-gray md:text-lg base:max-w-2xl">
                    It is a dependency that extends the utilities offered by TailwindCSS, complementing the selector and text
                    styles, as well as other utilities.
                </p>
                <div className="mt-2 flex items-center justify-center gap-x-10">
                    <Button className="border-gray-200 bg-gray-200">
                        <Link href="/docs">Get Started</Link>
                    </Button>
                    <Button className="border-white bg-white" variant="outline">
                        <Link href="https://github.com/halvaradop/tailwindcss-utilities" target="_blank">
                            Github
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
