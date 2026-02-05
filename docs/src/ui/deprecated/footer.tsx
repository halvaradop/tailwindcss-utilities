import Link from "next/link"
import Image from "next/image"
import { Separator } from "./separator"
import githubLogo from "@/assets/github.svg"
import npmLogo from "@/assets/npm.svg"
import tailwindLogo from "@/assets/tailwind.svg"

export const Footer = () => {
    return (
        <footer>
            <Separator>Stay connected</Separator>
            <section className="mx-10 text-primary border-x border-solid border-border base:grid md:grid-cols-2 base:mx-16">
                <h2 className="py-16 px-4 text-fluid-xl text-center border-b border-solid border-border sm:px-6 md:px-8 base:px-10 base:col-span-2 hover:bg-surface">
                    @halvaradop/tailwindcss
                </h2>
                <p className="py-16 px-4 border-b border-border sm:px-6 md:px-8 base:px-10 hover:bg-surface">
                    An open-source toolkit that brings missing utility classes to Tailwind CSS. Built to simplify your setup and
                    boost productivity — with minimal configuration.
                </p>
                <div className="py-16 px-4 flex justify-evenly gap-10 text-muted text-sm font-medium border-b border-solid border-border hover:bg-surface sm:px-6 md:px-8 base:px-10 base:row-span-2 base:justify-around base:border-b-0 base:border-l">
                    <ul className="text-left space-y-4 li:hover:text-primary">
                        <li className="text-primary text-lg font-semibold">Product</li>
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
                    <ul className="text-left space-y-4 li:hover:text-primary">
                        <li className="text-primary text-lg font-semibold">Resources</li>
                        <li>
                            <Link href="https://www.npmjs.com/package/@halvaradop/tailwindcss-utilities" target="_blank">
                                Npm
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/halvaradop/tailwindcss-utilities" target="_blank">
                                Github
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-3 figure:hover:bg-surface">
                    <figure className="py-10 grid place-content-center md:py-16">
                        <Image src={githubLogo} alt="Github Logo" />
                    </figure>
                    <figure className="py-10 grid place-content-center border-x border-solid border-border">
                        <Image src={npmLogo} alt="npm Logo" />
                    </figure>
                    <figure className="py-10 grid place-content-center md:py-16">
                        <Image src={tailwindLogo} alt="Tailwind Logo" />
                    </figure>
                </div>
            </section>
            <Separator className="justify-center" redirectTo="@halvaradop/tailwindcss-utilities" rotate>
                &#169; 2025 halvaradop.
            </Separator>
        </footer>
    )
}
