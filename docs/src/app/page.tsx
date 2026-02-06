import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Footer } from "@/components/ui/footer"
import { Header } from "@/components/header"

const IndexPage = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </>
    )
}

export default IndexPage
