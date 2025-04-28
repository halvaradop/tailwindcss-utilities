import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="text-primary border-t border-solid border-header-border bg-black-header">
            <section className="w-11/12 mx-auto md:py-14 md:grid md:grid-cols-2 base:w-10/12 xl:w-8/12">
                <h2 className="mt-8 mb-12 text-primary text-fluid-3xl text-center base:m-0 base:justify-self-start">
                    TailwindUtilities
                </h2>
                <div className="flex justify-evenly gap-10 text-sm base:items-start base:justify-between">
                    <ul className="text-secondary text-left space-y-4">
                        <li className="text-primary text-lg font-medium">Product</li>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/docs/utilities">Utilities</Link>
                        </li>
                        <li>
                            <Link href="/docs/animations">Animations</Link>
                        </li>
                        <li>
                            <Link href="/community">Community</Link>
                        </li>
                    </ul>
                    <ul className="text-secondary text-left space-y-4">
                        <li className="text-primary text-lg font-medium">Resources</li>
                        <li>
                            <Link href="https://www.npmjs.com/package/@halvaradop/tailwindcss-utilities" target="_blank">
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/halvaradop/tailwindcss-utilities" target="_blank">
                                Npm
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <p className="w-11/12 py-5 mx-auto text-center text-xs base:w-10/12 base:text-left xl:w-8/12">
                &#169; 2025 halvaradop. ALL RIGHT RESERVED
            </p>
        </footer>
    )
}
