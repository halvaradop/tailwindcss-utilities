import { HeroSection } from "@/ui/hero"
import { UtilitiesSection } from "@/ui/utilities"
import { DeveloperExperienceSection } from "@/ui/developer-experience"
import { OpenSourceSection } from "@/ui/open-source"

const Index = () => {
    return (
        <main className="w-11/12 min-h-screen mx-auto mb-20 space-y-[10vw] base:w-10/12 lg:max-w-screen-xl">
            <HeroSection />
            <DeveloperExperienceSection />
            <UtilitiesSection />
            <OpenSourceSection />
        </main>
    )
}

export default Index
