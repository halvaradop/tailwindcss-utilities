import { HeroSection } from "@/ui/community/hero"
import { CommunitySection } from "@/ui/community/community-cards"
import { CallToAction } from "@/ui/call-to-action"

const CommunityPage = () => {
    return (
        <main>
            <HeroSection />
            <CommunitySection />
            <CallToAction
                separator="Start Contributing"
                title="Join Our Community"
                description="Become a part of our growing community and connect with like-minded individuals."
                button="Get Started"
                href="https://github.com/halvaradop/tailwindcss-utilities"
            />
        </main>
    )
}

export default CommunityPage
