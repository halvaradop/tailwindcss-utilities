"use client"
import Link from "next/link"
import { HeroSection } from "@/ui/hero"
import { UtilitiesSection } from "@/ui/utilities"
import { DeveloperExperienceSection } from "@/ui/developer-experience"
import { Button } from "@halvaradop/ui-button"

const Index = () => {
    return (
        <main className="w-11/12 mx-auto base:w-10/12 lg:max-w-screen-xl xl:w-8/12">
            <HeroSection />
            <DeveloperExperienceSection />
            <UtilitiesSection />
            <section className="my-32 text-center">
                <h2 className="text-primary text-3xl font-bold text-center">Ready to Get Started</h2>
                <p className="mt-2 mb-6 text-secondary">Dive into our comprehensive documentation and start building.</p>
                <Button className="mx-auto text-black" asChild>
                    <Link href="/docs">View Documentation</Link>
                </Button>
            </section>
        </main>
    )
}

export default Index
