import Image from "next/image"
import Link from "next/link"
import github from "@/assets/github.svg"
import moon from "@/assets/moon.svg"

export const Footer = () => {

    return (
        <footer className="pt-10 pb-8">
            <section className="w-11/12 mx-auto grid grid-cols-2 items-start text-gray-50">
                <ul className="flex flex-col text-lg font-medium li:my-2">                    
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Installation</Link></li>
                    <li><Link href="/">Docs</Link></li>
                </ul>
                <figure className="ml-auto flex items-center gap-x-5">
                    <Image src={moon} alt="moon icon" />
                    <span>|</span>
                    <Image src={github} alt="github icon" />
                </figure>
                <p className="mt-8 col-span-2 text-center">@2024, TailwindCSS Utilities</p>
            </section>
        </footer>
    )
}