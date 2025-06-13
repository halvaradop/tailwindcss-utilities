import { Separator } from "./separator"

export const DeveloperExperienceSection = () => {
    return (
        <section>
            <Separator index={1}>Built for real projects</Separator>
            <section className="min-h-[calc(100dvh-4rem)] mx-10 flex flex-col border-x border-solid border-border base:mx-16 xl:min-h-auto">
                <div className="py-16 px-4 grid sm:px-6 md:px-8 base:px-10 base:items-center base:grid-cols-2">
                    <h2 className="mb-6 text-primary text-2xl md:text-fluid-3xl">Why Choose Us</h2>
                    <p className="text-muted text-fluid-base">
                        Tailwind CSS v4 brings a modern engine — and our utilities are built for it. We’ve designed every package
                        to integrate seamlessly using the new configuration API, variant generator, and dynamic styling support.
                    </p>
                </div>
                <div className="grid text-primary text-left article:border-t article:border-solid article:border-border lg:flex-100 lg:grid-cols-2 lg:article:border-r lg:article:even:border-r-0 xl:min-h-[30dvw] xl:grid-cols-4 xl:article:nth-[2]:border-r">
                    <article className="w-full h-full py-14 px-4 flex items-center justify-between gap-x-6 sm:px-6 sm:gap-x-10 md:px-8 md:gap-x-12 base:px-10 base:gap-x-16 lg:flex-col lg:items-start">
                        <span>/01</span>
                        <div className="text-left self-end xl:text-right">
                            <p>Native</p>
                            <p className="mt-1 text-muted text-sm">
                                Our utilities are built using Tailwind’s new API — no legacy plugins, no PostCSS. Just clean,
                                modern extension.
                            </p>
                        </div>
                    </article>
                    <article className="w-full h-full py-14 px-4 flex items-center justify-between gap-x-6 sm:px-6 sm:gap-x-10 md:px-8 md:gap-x-12 base:px-10 base:gap-x-16 lg:flex-col lg:items-start">
                        <span>/02</span>
                        <div className="text-left self-end xl:text-right">
                            <p>Dynamic Styling</p>
                            <p className="mt-1 text-muted text-sm">
                                Use Tailwind’s new syntax like `[margin:12px]` to update our utility styles inline, without
                                modifying config files.
                            </p>
                        </div>
                    </article>
                    <article className="w-full h-full py-14 px-4 flex items-center justify-between gap-x-6 sm:px-6 sm:gap-x-10 md:px-8 md:gap-x-12 base:px-10 base:gap-x-16 lg:flex-col lg:items-start">
                        <span>/03</span>
                        <div className="text-left self-end xl:text-right">
                            <p>Variant Support</p>
                            <p className="mt-1 text-muted text-sm">
                                Create custom variants easily with our utilities. Built on v4’s JIT engine, you get dynamic
                                variant control out of the box.
                            </p>
                        </div>
                    </article>
                    <article className="w-full h-full py-14 px-4 flex items-center justify-between gap-x-6 sm:px-6 sm:gap-x-10 md:px-8 md:gap-x-12 base:px-10 base:gap-x-16 lg:flex-col lg:items-start">
                        <span>/04</span>
                        <div className="text-left self-end xl:text-right">
                            <p>Clean Integration</p>
                            <p className="mt-1 text-muted text-sm">
                                We follow Tailwind’s core design philosophy — fast builds, atomic classes, and a unified,
                                zero-runtime experience.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </section>
    )
}
