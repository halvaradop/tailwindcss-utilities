"use client"
import { useState } from "react"
import Image from "next/image"
import menu from "@/assets/menu.svg"
import { HeaderMenu } from "./header-menu"
import { AnimatePresence } from "framer-motion"


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <nav className="w-11/12 h-20 mx-auto text-white">
                <div className="w-full h-full flex items-center justify-between relative z-20">                
                    <h2>Utilities</h2>
                    <Image className="hover:cursor-pointer" src={menu} alt="menu icon" onClick={handleToggleMenu} />
                </div>
                <AnimatePresence>
                    { isOpen && <HeaderMenu /> }                    
                </AnimatePresence>
            </nav>
        </header>
    )
}