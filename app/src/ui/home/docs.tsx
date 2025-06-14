import Link from "next/link"
import { Button } from "@halvaradop/ui-button"
import { Separator } from "@/ui/separator"

export const DocsSection = () => {
    return (
        <section>
            <Separator>Start Building</Separator>
            <div className="min-h-[50dvh] mx-10 py-16 px-4 flex items-center justify-center flex-col text-center border-x border-solid border-border sm:px-6 md:px-8  base:mx-16 base:px-10">
                <h2 className="text-primary text-2xl md:text-fluid-3xl">Explore the Docs</h2>
                <p className="mt-6 mb-8 text-muted text-fluid-base">
                    Get everything you need to start building with our utilities — from installation to deep usage examples.
                </p>
                <Button asChild>
                    <Link href="/docs">View Docs</Link>
                </Button>
            </div>
        </section>
    )
}
