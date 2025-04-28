import Link from "next/link"

export const UtilitiesSection = () => {
    return (
        <section className="mt-40">
            <div className="mx-auto text-left">
                <h2 className="mb-6 text-primary text-fluid-2xl leading-6">Explore the Tools</h2>
                <p className="text-secondary">
                    Discover two powerful utility packages built to enhance styling and interaction in your projects. Whether
                    you're streamlining layouts or bringing your UI to life with animations, these tools are designed to be
                    intuitive, flexible, and ready to use out of the box.
                </p>
            </div>
            <div className="mt-20 border-y-2 border-solid border-header-border md:grid md:grid-cols-2">
                <article className="py-10 md:pr-8 md:border-r-2 md:border-solid md:border-header-border lg:py-14 lg:pr-10">
                    <Link
                        href="https://github.com/halvaradop/tailwindcss-utilities/tree/master/packages/tailwindcss-animations"
                        target="_bla"
                    >
                        <h3 className="text-primary text-xl font-medium">Animations</h3>
                        <p className="mt-2 text-secondary">
                            Easily create smooth, customizable animations with utility classes designed to integrate seamlessly
                            into your TailwindCSS projects.
                        </p>
                    </Link>
                </article>
                <article className="py-10 border-t-2 border-solid border-header-border md:pl-8 md:border-t-0 lg:py-14 lg:pl-10">
                    <Link
                        href="https://github.com/halvaradop/tailwindcss-utilities/tree/master/packages/tailwindcss-utilities"
                        target="_blank"
                    >
                        <h3 className="text-primary text-xl font-medium">Utilities</h3>
                        <p className="mt-2 text-secondary">
                            Expand your toolkit with additional utility classes that provide extended functionality and
                            flexibility for your designs.
                        </p>
                    </Link>
                </article>
            </div>
        </section>
    )
}
