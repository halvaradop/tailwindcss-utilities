import { Separator } from "@/ui/separator"

export const PoweredBySection = () => {
    return (
        <section className="h-dvh">
            <Separator>Tailwind v4. Backed</Separator>
            <div className="h-full mx-10 px-4 text-center grid place-content-center border-x border-solid border-border sm:px-6 md:px-8 base:mx-16 base:px-10">
                <p className="text-muted text-xs uppercase base:pb-16 base:text-fluid-base">Powered by Tailwind CSS v4</p>
                <h2 className="text-primary text-xl/relaxed font-medium uppercase sm:text-fluid-3xl sm:leading-tight">
                    Built with Tailwind’s new API — no plugins, no workarounds. Just native support for dynamic styles, variants,
                    and full customization.
                </h2>
            </div>
        </section>
    )
}
