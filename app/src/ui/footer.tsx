import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="pt-10 pb-28 bg-footer bg-no-repeat bg-contain">
            <section className="w-11/12 mx-auto text-white text-center text-lg base:w-10/12 base:py-20 base:pb-24 base:border-2 base:border-gray-100 base:rounded-xl base:bg-gray-200 lg:max-w-screen-xl">
                <p className="text-gray text-sm">&#169;​ 2024 halvaradop. ALL RIGHT RESERVED</p>
                <h2 className="mt-8 mb-12 text-white fluency-3xl base:mt-4 base:mb-16 base:fluency-4xl">
                    &#169; 2024 - TAILWINDCSS UTILITIES
                </h2>
                <div className="flex justify-evenly gap-10 base:items-start ">
                    <ul className="flex items-center flex-col gap-y-4 font-bold base:flex-row base:gap-x-8">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Installation</Link>
                        </li>
                        <li>
                            <Link href="/">Docs</Link>
                        </li>
                    </ul>
                    <ul className="space-y-4 base:text-start">
                        <li className="font-bold">Download</li>
                        <li className="text-gray">
                            <Link href="https://www.npmjs.com/package/@halvaradop/tailwindcss-utilities" target="_blank">
                                GitHub
                            </Link>
                        </li>
                        <li className="text-gray">
                            <Link href="https://github.com/halvaradop/tailwindcss-utilities" target="_blank">
                                npm
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
