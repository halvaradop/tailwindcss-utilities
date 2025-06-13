"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { HeaderMenu } from "./header-menu"
import { AnimatePresence } from "framer-motion"
import { merge } from "@halvaradop/ui-core"
import menu from "@/assets/menu.svg"
import arrow from "@/assets/arrow.svg"
import { Button } from "@halvaradop/ui-button"

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
        <header className={merge("flex items-center border-b border-solid border-border", isOpen ? "open" : "")}>
            <nav className="flex-100 h-16 ml-10 px-4 border-x border-solid border-border sm:px-6 md:px-8 base:ml-16 base:px-10 base:flex base:items-center base:justify-between base:relative">
                <div className="w-full h-full flex items-center justify-between relative z-20 base:w-fit">
                    <h2 className="text-primary base:text-lg">
                        <Link href="/">@halvaradop/tailwindcss</Link>
                    </h2>
                </div>
                <AnimatePresence mode="wait">{isOpen && <HeaderMenu />}</AnimatePresence>
            </nav>
            <Button
                className="w-10 h-16 p-0 relative z-10 hover:bg-transparent base:hidden"
                variant="ghost"
                onClick={handleToggleMenu}
            >
                <Image className="hover:cursor-pointer" src={menu} alt="menu icon" />
            </Button>
            <Link className="hidden size-16 base:grid base:place-content-center" href="/">
                <Image className="-rotate-127" src={arrow} alt="Arrow Icon" priority draggable="false" />
            </Link>
        </header>
    )
}
