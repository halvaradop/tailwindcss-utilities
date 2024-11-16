import Image from "next/image"
import Link from "next/link"
import github from "@/assets/github.svg"
import moon from "@/assets/moon.svg"
import npm from "@/assets/npm.svg"

export const Footer = () => {
    return (
        <footer className="pt-10 pb-8">
            <section className="w-11/12 mx-auto grid grid-cols-2 items-start text-gray-50 base:w-10/12 lg:grid-cols-3 lg:items-center lg:justify-between lg:max-w-screen-xl">
                <ul className="flex flex-col text-lg font-medium li:my-2 lg:flex-row lg:li:mx-5">
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
                <figure className="ml-auto flex items-center gap-x-5 lg:order-1">
                    <Image className="hover:cursor-pointer" src={moon} alt="moon icon" />
                    <span>|</span>
                    <Link href="https://www.npmjs.com/package/@halvaradop/tailwindcss-utilities" target="_blank">
                        <Image src={npm} alt="npm icon" />
                    </Link>
                    <Link href="https://github.com/halvaradop/tailwindcss-utilities" target="_blank">
                        <Image src={github} alt="github icon" />
                    </Link>
                </figure>
                <p className="mt-8 col-span-2 text-center lg:col-span-1 lg:m-0">&#169;​ 2024 halvaradop</p>
            </section>
        </footer>
    )
}
