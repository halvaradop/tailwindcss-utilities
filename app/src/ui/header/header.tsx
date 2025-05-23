"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { HeaderMenu } from "./header-menu"
import { AnimatePresence } from "framer-motion"
import { merge } from "@halvaradop/ui-core"
import menu from "@/assets/menu.svg"
import npm from "@/assets/npm.svg"
import github from "@/assets/github.svg"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const matchScreen = matchMedia("(min-width: 900px)")

        const handleSetMatchMedia = () => {
            setIsOpen(matchScreen.matches)
        }

        setIsOpen(matchScreen.matches)
        matchScreen.addEventListener("change", handleSetMatchMedia)
        return () => matchScreen.removeEventListener("change", handleSetMatchMedia)
    }, [])

    return (
        <header className={merge("border-b border-solid border-header-border bg-black-header", isOpen ? "open" : "")}>
            <nav className="w-11/12 h-16 mx-auto text-tertiary base:flex base:items-center base:justify-between base:relative base:w-10/12 lg:max-w-screen-xl xl:w-8/12">
                <div className="w-full h-full flex items-center justify-between relative z-20 base:w-fit">
                    <h2 className="text-primary base:text-lg">
                        <Link href="/">TailwindUtilities</Link>
                    </h2>
                    <Image className="hover:cursor-pointer base:hidden" src={menu} alt="menu icon" onClick={handleToggleMenu} />
                </div>
                <AnimatePresence mode="wait">{isOpen && <HeaderMenu />}</AnimatePresence>
                <figure className="hidden base:flex base:items-center base:gap-x-5">
                    <Link href="https://www.npmjs.com/package/@halvaradop/tailwindcss-utilities" target="_blank">
                        <Image width={32} src={npm} alt="npm icon" />
                    </Link>
                    <Link href="https://github.com/halvaradop/tailwindcss-utilities" target="_blank">
                        <Image width={24} height={24} src={github} alt="github icon" />
                    </Link>
                </figure>
            </nav>
        </header>
    )
}
