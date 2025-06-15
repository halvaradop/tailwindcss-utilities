"use client"
import Link from "next/link"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { HeaderMenu } from "./header-menu"
import { AnimatePresence } from "motion/react"
import { merge } from "@halvaradop/ui-core"
import { Button } from "@halvaradop/ui-button"
import menu from "@/assets/menu.svg"
import arrow from "@/assets/arrow.svg"

export const Header = () => {
    const isMobile = useIsMobile()
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const handleToggleMenu = () => {
        setIsOpen(previous => !previous)
    }

    const handleMenuLinkClick = useCallback(() => {
        if (!isMobile) {
            setIsOpen(false)
        }
    }, [])

    useEffect(() => {
        setIsOpen(!isMobile)
    }, [isMobile])

    useEffect(() => {
        if (!isOpen) return
        const handleClickOutside = (event: MouseEvent) => {
            const node = event.target as HTMLElement
            if (node.hasAttribute("aria-description") && node.getAttribute("aria-description") === "menu icon") return
            if (isMobile && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(() => false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    return (
        <header
            className={merge("flex items-center border-b border-solid border-border", isOpen && "open")}
            id="halvaradop-tailwindcss-utilities"
        >
            <nav className="flex-100 h-16 ml-10 px-4 border-x border-solid border-border sm:px-6 md:px-8 base:ml-16 base:px-10 base:flex base:items-center base:justify-between base:relative">
                <div className="w-full h-full flex items-center justify-between relative base:w-fit">
                    <h2 className="text-primary base:text-lg">
                        <Link href="/">@halvaradop/tailwindcss</Link>
                    </h2>
                </div>
                <div ref={menuRef}>
                    <AnimatePresence mode="wait">{isOpen && <HeaderMenu onLinkClick={handleMenuLinkClick} />}</AnimatePresence>
                </div>
            </nav>
            <Button
                className="w-10 h-16 p-0 relative z-30 hover:bg-transparent base:hidden"
                variant="ghost"
                onClick={handleToggleMenu}
            >
                <Image className="hover:cursor-pointer" src={menu} alt="menu icon" aria-description="menu icon" />
            </Button>
            <figure className="group w-10 h-16 hidden img:transition-transform img:ease-linear img:duration-300 hover:cursor-pointer base:w-16 base:flex base:items-center base:justify-center base:relative base:overflow-hidden">
                <Image
                    className="-rotate-127 group-hover:-translate-y-14 group-hover:translate-x-14"
                    src={arrow}
                    alt="Arrow Icon"
                    priority
                />
                <Image
                    className="absolute -rotate-127 translate-y-14 -translate-x-14 group-hover:translate-0"
                    src={arrow}
                    alt="Arrow Icon"
                    priority
                />
            </figure>
        </header>
    )
}
