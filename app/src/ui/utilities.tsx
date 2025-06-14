import Link from "next/link"
import { Separator } from "./separator"
import { SegmentAnimation } from "./animations/segment"

export const UtilitiesSection = () => {
    return (
        <section className="">
            <Separator index={2}>Explore our utilities</Separator>
            <section className="mx-10 border-x border-solid border-border base:mx-16">
                <SegmentAnimation
                    title="What's Inside"
                    description="We craft utility packages that enhance your Tailwind CSS workflow — bringing your interfaces to life with intuitive, flexible, production-ready classes."
                />
                <div>
                    <div className="grid text-primary article:border-t article:border-solid article:border-border article:a:p:text-muted article:hover:bg-surface article:hover:a:p:text-primary lg:grid-cols-2 lg:article:border-r lg:article:last:border-r-0">
                        <article>
                            <Link className="py-14 px-4 block sm:px-6 md:px-8 base:px-10 xl:text-right" href="/docs/animations">
                                <span className="mb-[15dvw] block text-left">/01</span>
                                <h3 className="text-xl font-medium">Animations</h3>
                                <p className="mt-2">
                                    Effortlessly apply smooth, customizable animations using class-based utilities that blend
                                    natively into Tailwind.
                                </p>
                            </Link>
                        </article>
                        <article>
                            <Link className="py-14 px-4 block sm:px-6 md:px-8 base:px-10 xl:text-right" href="/docs/utilities">
                                <span className="mb-[15dvw] block text-left">/02</span>
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
