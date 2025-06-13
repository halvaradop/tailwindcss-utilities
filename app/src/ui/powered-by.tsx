import { Separator } from "./separator"

export const PoweredBySection = () => {
    return (
        <section className="h-dvh">
            <Separator index={3}>Tailwind v4. Backed</Separator>
            <div className="h-full mx-10 px-10 text-center grid place-content-center border-x border-solid border-border base:mx-16">
                <p className="text-primary text-xs uppercase base:py-16 base:text-fluid-base">SPowered by Tailwind CSS v4</p>
                <h2 className="text-muted text-xl/relaxed font-medium uppercase sm:text-fluid-3xl sm:leading-tight">
                    Built with Tailwind’s new API — no plugins, no workarounds. Just native support for dynamic styles, variants,
                    and full customization.
                </h2>
            </div>
        </section>
    )
}
