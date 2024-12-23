import Link from "next/link"
import { Card } from "./card"
import { Title } from "./title"

export const UtilitiesSection = () => {
    return (
        <section>
            <Title className="mb-10 justify-self-center" title="Packages" />
            <section className="grid gap-6 text-center base:grid-cols-4 base:grid-rows-2">
                <Card className="h-full justify-center base:aspect-video base:col-span-2" asChild>
                    <Link
                        href="https://github.com/halvaradop/tailwindcss-utilities/tree/master/packages/tailwindcss-core"
                        target="_blank"
                    >
                        <h3 className="text-white text-xl">Core</h3>
                        <p className="w-10/12 mx-auto">
                            Enhance your project with core utility extensions that bring powerful features and streamlined
                            configurations to TailwindCSS.
                        </p>
                    </Link>
                </Card>
                <Card className="h-full justify-center base:aspect-video base:col-span-2" asChild>
                    <Link
                        href="https://github.com/halvaradop/tailwindcss-utilities/tree/master/packages/tailwindcss-animations"
                        target="_bla"
                    >
                        <h3 className="text-white text-xl">Animations</h3>
                        <p className="w-10/12 mx-auto">
                            Easily create smooth, customizable animations with utility classes designed to integrate seamlessly
                            into your TailwindCSS projects.
                        </p>
                    </Link>
                </Card>
                <Card className="h-full justify-center base:aspect-video base:col-span-2" asChild>
                    <Link
                        href="https://github.com/halvaradop/tailwindcss-utilities/tree/master/packages/tailwindcss-utilities"
                        target="_blank"
                    >
                        <h3 className="text-white text-xl">Utilities</h3>
                        <p className="w-10/12 mx-auto">
                            Expand your toolkit with additional utility classes that provide extended functionality and
                            flexibility for your designs.
                        </p>
                    </Link>
                </Card>
                <Card className="h-full justify-center base:aspect-video base:col-span-2" asChild>
                    <Link
                        href="https://github.com/halvaradop/tailwindcss-utilities/tree/master/packages/tailwindcss-merge"
                        target="_blank"
                    >
                        <h3 className="text-white text-xl">Merge</h3>
                        <p className="w-10/12 mx-auto">
                            Simplify class management by merging and optimizing TailwindCSS classes dynamically, ensuring clean
                            and maintainable code.
                        </p>
                    </Link>
                </Card>
            </section>
        </section>
    )
}
