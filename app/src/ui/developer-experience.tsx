import { Separator } from "./separator"

export const DeveloperExperienceSection = () => {
    return (
        <section>
            <Separator index={1}>Built for real projects</Separator>
            <section className="mx-10 border-x border-solid border-border base:mx-16">
                <div className="py-16 px-10 grid base:items-center base:grid-cols-2">
                    <h2 className="mb-6 text-white text-2xl md:text-fluid-3xl">Why Choose Us</h2>
                    <p className="text-white text-fluid-base">
                        Tailwind CSS v4 brings a modern engine — and our utilities are built for it. We’ve designed every package
                        to integrate seamlessly using the new configuration API, variant generator, and dynamic styling support.
                    </p>
                </div>
                <div className="grid text-white text-left article:border-t article:border-solid article:border-border lg:h-[40dvh] lg:grid-cols-4 lg:article:border-r lg:article:last:border-r-0">
                    <article className="w-full h-full py-14 px-10 flex justify-between">
                        <span>/01</span>
                        <p className="self-end">Native</p>
                        <p className="mt-4 text-secondary text-sm hidden">
                            Our utilities are built using Tailwind’s new API — no legacy plugins, no PostCSS. Just clean, modern
                            extension.
                        </p>
                    </article>
                    <article className="w-full h-full py-14 px-10 flex justify-between">
                        <span>/02</span>
                        <p className="self-end">Dynamic Styling</p>
                        <p className="mt-4 text-secondary text-sm hidden">
                            Use Tailwind’s new syntax like `[margin:12px]` to update our utility styles inline, without modifying
                            config files.
                        </p>
                    </article>
                    <article className="w-full h-full py-14 px-10 flex justify-between">
                        <span>/03</span>
                        <p className="self-end">Variant Support</p>
                        <p className="mt-4 text-secondary text-sm hidden">
                            Create custom variants easily with our utilities. Built on v4’s JIT engine, you get dynamic variant
                            control out of the box.
                        </p>
                    </article>
                    <article className="w-full h-full py-14 px-10 flex justify-between">
                        <span>/04</span>
                        <p className="self-end">Clean Integration</p>
                        <p className="mt-4 text-secondary text-sm hidden">
                            We follow Tailwind’s core design philosophy — fast builds, atomic classes, and a unified, zero-runtime
                            experience.
                        </p>
                    </article>
                </div>
            </section>
        </section>
    )
}
