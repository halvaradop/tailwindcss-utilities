import Link from "next/link"
import { motion } from "framer-motion"
import { itemVariants, menuVariants } from "@/ui/motion/menu.motion"

export const HeaderMenu = () => {
    return (
        <motion.div
            className="w-10/12 max-w-md absolute inset-y-0 right-0 z-10 bg-gray-300 base:w-auto base:max-w-none base:inset-0 base:relative base:bg-transparent [--nav-menu:100%] base:[--nav-menu:0%]"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <aside className="min-h-dvh p-10 flex flex-col justify-evenly base:min-h-fit base:p-0 base:flex-row base:items-center base:justify-around">
                <p className="pb-1 border-b border-gray base:hidden">Navigation</p>
                <ul className="text-fluid-2xl text-white flex flex-col gap-y-8 base:flex-row base:gap-x-10 base:text-sm">
                    <motion.li className="text-lg [--nav-li:100%] base:[--nav-li:0%] base:hidden" variants={itemVariants}>
                        Product
                    </motion.li>
                    <motion.li className="[--nav-li:100%] base:[--nav-li:0%]" variants={itemVariants}>
                        <Link href="/">Home</Link>
                    </motion.li>
                    <motion.li className="[--nav-li:100%] base:[--nav-li:0%]" variants={itemVariants}>
                        <Link href="/docs/utilities">Utilities</Link>
                    </motion.li>
                    <motion.li className="[--nav-li:100%] base:[--nav-li:0%]" variants={itemVariants}>
                        <Link href="/docs/animations">Animations</Link>
                    </motion.li>
                    <motion.li className="[--nav-li:100%] base:[--nav-li:0%]" variants={itemVariants}>
                        <Link href="/community">Community</Link>
                    </motion.li>
                </ul>
                <ul className="mt-10 text-fluid-2xl grid grid-cols-2 items-center base:hidden">
                    <li className="mb-5 text-lg text-primary col-span-2">Resources</li>
                    <li>
                        <Link href="https://github.com/halvaradop/tailwindcss-utilities" target="_blank">
                            Github
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.npmjs.com/package/@halvaradop/tailwindcss-utilities" target="_blank">
                            NPM
                        </Link>
                    </li>
                </ul>
            </aside>
        </motion.div>
    )
}
