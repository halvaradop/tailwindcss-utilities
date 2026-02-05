import { HeroSection } from "@/ui/deprecated/home/hero"
import { FeatureListSection } from "@/ui/deprecated/home/feature-list"
import { BenefitsSection } from "@/ui/deprecated/home/benefits"
import { PoweredBySection } from "@/ui/deprecated/home/powered-by"
import { DocsSection } from "@/ui/deprecated/home/docs"

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
