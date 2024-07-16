import Image from "next/image"
import Link from "next/link"
import { Button } from "@/ui/custom/button"
import { UtilitiesSection } from "@/ui/utilities-section"
import hero from "@/assets/hero-mobile.svg"

const Index = () => {

    return (
        <main className="w-11/12 min-h-screen mx-auto mb-20 base:w-10/12 lg:max-w-screen-xl">
            <section className="py-24 text-center relative overflow-x-hidden bg-background bg-no-repeat bg-cover bg-center base:h-[calc(100vh-5rem)] base:py-4 base:flex base:items-center base:justify-center base:bg-none">
                <Image className="hidden base:mx-auto base:block" width={1300} height={600} src={hero} alt="hero background desktop" />
                <div className="base:absolute">
                    <h1 className="text-white fluency-5xl">TailwindCSS Utilities</h1>
                    <p className="max-w-3xl mx-auto my-4 text-gray base:max-w-2xl">
                        It is a dependency that extends the utilities offered by TailwindCSS, 
                        complementing the selector and text styles, as well as other utilities.
                    </p>
                    <Button className="mx-auto" fullWidth={false}>
                        <Link href="/">Get Started</Link>
                    </Button>
                </div>
            </section>
            <UtilitiesSection />
        </main>
    )
}

export default Index