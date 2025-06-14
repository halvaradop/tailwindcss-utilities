import { HeroSection } from "@/ui/home/hero"
import { FeatureListSection } from "@/ui/home/feature-list"
import { BenefitsSection } from "@/ui/home/benefits"
import { PoweredBySection } from "@/ui/home/powered-by"
import { DocsSection } from "@/ui/home/docs"

const Index = () => {
    return (
        <main>
            <HeroSection />
            <BenefitsSection />
            <FeatureListSection />
            <PoweredBySection />
            <DocsSection />
        </main>
    )
}

export default Index
