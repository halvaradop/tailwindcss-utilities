"use client"
import { HeroSection } from "@/ui/hero"
import { UtilitiesSection } from "@/ui/utilities"
import { DeveloperExperienceSection } from "@/ui/developer-experience"
import { OpenSourceSection } from "@/ui/open-source"

const Index = () => {
    return (
        <main className="w-11/12 min-h-screen mx-auto mb-20 space-y-[15vw] base:w-10/12 lg:max-w-screen-xl">
            <HeroSection />
            <UtilitiesSection />
            <DeveloperExperienceSection />
            <OpenSourceSection />
        </main>
    )
}

export default Index
