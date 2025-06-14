import { HeroSection } from "@/ui/hero"
import { UtilitiesSection } from "@/ui/utilities"
import { DeveloperExperienceSection } from "@/ui/developer-experience"
import { PoweredBySection } from "@/ui/powered-by"
import { DocsSection } from "@/ui/docs"

const Index = () => {
    return (
        <main>
            <HeroSection />
            <DeveloperExperienceSection />
            <UtilitiesSection />
            <PoweredBySection />
            <DocsSection />
        </main>
    )
}

export default Index
