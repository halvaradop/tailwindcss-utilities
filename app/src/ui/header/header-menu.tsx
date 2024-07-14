import Link from "next/link"
import { motion } from "framer-motion"
import { itemVariants, menuVariants } from "../motion/menu.motion"

export const HeaderMenu = () => {

    return (
        <motion.div className="w-10/12 max-w-md absolute inset-y-0 right-0 z-10 bg-gray-300"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <aside className="min-h-dvh p-10 flex flex-col justify-evenly">
                <p className="pb-1 border-b border-gray">Navigation</p>
                <ul className="fluency-3xl font-medium flex flex-col gap-y-8">
                    <motion.li variants={itemVariants}><Link href="/">Home</Link></motion.li>
                    <motion.li variants={itemVariants}><Link href="/">Installation</Link></motion.li>
                    <motion.li variants={itemVariants}><Link href="/">Docs</Link></motion.li>
                </ul>
                <ul className="mt-10 flex items-center justify-around">
                    <li><Link href="https://github.com/halvaradop/tailwindcss-utilities" target="_blank">Github</Link></li>
                    <li><Link href="https://www.npmjs.com/package/@halvaradop/tailwindcss-utilities" target="_blank">NPM</Link></li>
                </ul>
            </aside>
        </motion.div>
    )
}