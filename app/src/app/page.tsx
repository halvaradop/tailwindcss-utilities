import Link from "next/link"
import { Button } from "@/ui/custom/button"
import { UtilitiesSection } from "@/ui/utilities-section"


const Index = () => {

    return (
        <main className="w-11/12 min-h-screen mx-auto mb-20">
            <section className="py-24 text-center relative overflow-x-hidden bg-background bg-no-repeat bg-cover bg-center">
                <h1 className="text-white fluency-5xl">TailwindCSS Utilities</h1>
                <p className="my-4 text-gray">
                    It is a dependency that extends the utilities offered by TailwindCSS, 
                    complementing the selector and text styles, as well as other utilities.
                </p>
                <Button className="mx-auto" fullWidth={false}>
                    <Link href="/">Get Started</Link>
                </Button>
            </section>
            <UtilitiesSection />
        </main>
    )
}

export default Index