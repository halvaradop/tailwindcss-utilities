import Link from "next/link"
import { Separator } from "./separator"

export const UtilitiesSection = () => {
    return (
        <section className="">
            <Separator index={2}>Explore our utilities</Separator>
            <section className="mx-10 border-x border-solid border-border base:mx-16">
                <div className="py-16 px-4 grid sm:px-6 md:px-8 base:px-10 base:items-center base:grid-cols-2">
                    <h2 className="mb-6 text-primary text-2xl md:text-fluid-3xl">What’s Inside</h2>
                    <p className="text-muted text-fluid-base">
                        We craft utility packages that enhance your Tailwind CSS workflow — bringing your interfaces to life with
                        intuitive, flexible, production-ready classes.
                    </p>
                </div>
                <div>
                    <div className="grid text-primary text-left article:border-t article:border-solid article:border-border article:a:p:text-muted lg:grid-cols-2 lg:article:border-r lg:article:last:border-r-0">
                        <article>
                            <Link className="py-14 px-4 block text-right sm:px-6 md:px-8 base:px-10" href="/docs/animations">
                                <span className="mb-[20dvh] block text-left">/01</span>
                                <h3 className="text-xl font-medium">Animations</h3>
                                <p className="mt-2">
                                    Effortlessly apply smooth, customizable animations using class-based utilities that blend
                                    natively into Tailwind.
                                </p>
                            </Link>
                        </article>
                        <article>
                            <Link className="py-14 px-4 block text-right sm:px-6 md:px-8 base:px-10" href="/docs/utilities">
                                <span className="mb-[20dvh] block text-left">/02</span>
                                <h3 className="text-xl font-medium">Utilities</h3>
                                <p className="mt-2">
                                    Extend the core of Tailwind with thoughtful, additional utilities that solve real design needs
                                    — out of the box.
                                </p>
                            </Link>
                        </article>
                    </div>
                </div>
            </section>
        </section>
    )
}
