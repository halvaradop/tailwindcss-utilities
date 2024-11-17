import Link from "next/link"
import { Code } from "@/ui/code"
import { features, installation, setupPlugins } from "@/ui/shiki-code"

const DocsPage = () => {
    return (
        <main className="w-11/12 mt-10 mb-28 mx-auto space-y-16 base:w-10/12">
            <div>
                <h1>Documentation</h1>
                <p className="mt-2 text-gray">
                    Welcome to the official documentation for the plugins in the{" "}
                    <strong className="text-white">@halvaradop/tailwindcss</strong> utilities ecosystem. These plugins provide a
                    set of utility classes and styles that enable you to create code quickly and efficiently using TailwindCSS.
                </p>
            </div>
            <div>
                <h2>Plugins</h2>
                <ul className="mt-2 text-gray list-disc list-inside space-y-2">
                    <li className="">
                        <Link
                            href="https://github.com/halvaradop/tailwindcss-utilities/tree/master/packages/tailwindcss-core"
                            target="_blank"
                        >
                            tailwindcss-core
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://github.com/halvaradop/tailwindcss-utilities/tree/master/packages/tailwindcss-utilities"
                            target="_blank"
                        >
                            tailwindcss-utilities
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://github.com/halvaradop/tailwindcss-utilities/tree/master/packages/tailwindcss-animations"
                            target="_blank"
                        >
                            tailwindcss-animations
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Installation</h2>
                <p className="text-gray">Run the following commands to install the packages</p>
                <Code code={installation} lang="bash" />
            </div>
            <div>
                <h2>Configuration</h2>
                <p className="mt-2 text-gray">
                    Each plugin is designed to be easily configurable and flexible, allowing you to create powerful utility
                    classes for your application development needs.
                </p>
                <Code fileName="tailwind.config.ts" lang="ts" code={setupPlugins} />
            </div>
            <div>
                <h2>Features</h2>
                <p className="mt-2 text-gray">Some of the key features offered by these plugins include</p>
                <Code lang="html" code={features} />
            </div>
        </main>
    )
}

export default DocsPage
