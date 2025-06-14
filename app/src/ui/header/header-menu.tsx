import Link from "next/link"
import { motion } from "motion/react"
import { itemVariants, menuVariants } from "@/ui/motion-config/menu.motion"
import { TextScramble } from "@/ui/motion/text-scramble"

export const HeaderMenu = () => {
    return (
        <motion.div
            className="w-10/12 max-w-md absolute inset-y-0 right-0 z-10 border border-solid border-border bg-black [--nav-menu:100%] base:w-auto base:max-w-none base:inset-0 base:relative base:bg-transparent base:border-0 base:[--nav-menu:0%]"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <aside className="min-h-dvh p-10 flex flex-col justify-evenly text-muted base:min-h-fit base:p-0 base:flex-row base:items-center base:justify-around">
                <p className="pb-1 border-primary text-2xl border-b border-gray base:hidden">Navigation</p>
                <ul className="text-fluid-lg flex flex-col gap-y-8 font-medium li:hover:text-primary base:flex-row base:gap-x-10 base:text-sm">
                    <motion.li
                        className="text-primary text-xl font-semibold [--nav-li:100%] base:[--nav-li:0%] base:hidden"
                        variants={itemVariants}
                    >
                        Product
                    </motion.li>
                    <motion.li className="[--nav-li:100%] base:[--nav-li:0%]" variants={itemVariants}>
                        <Link href="/">
                            <TextScramble>HOME</TextScramble>
                        </Link>
                    </motion.li>
                    <motion.li className="[--nav-li:100%] base:[--nav-li:0%]" variants={itemVariants}>
                        <Link href="/docs">
                            <TextScramble>DOCS</TextScramble>
                        </Link>
                    </motion.li>
                    <motion.li className="[--nav-li:100%] base:[--nav-li:0%]" variants={itemVariants}>
                        <Link href="/docs/utilities">
                            <TextScramble>UTILITIES</TextScramble>
                        </Link>
                    </motion.li>
                    <motion.li className="[--nav-li:100%] base:[--nav-li:0%]" variants={itemVariants}>
                        <Link href="/docs/animations">
                            <TextScramble>ANIMATIONS</TextScramble>
                        </Link>
                    </motion.li>
                    <motion.li className="[--nav-li:100%] base:[--nav-li:0%]" variants={itemVariants}>
                        <Link href="/community">
                            <TextScramble>COMMUNITY</TextScramble>
                        </Link>
                    </motion.li>
                </ul>
                <ul className="mt-10 text-fluid-lg grid grid-cols-2 items-center font-medium li:hover:text-primary base:hidden">
                    <li className="mb-5 text-primary text-xl font-semibold col-span-2">Resources</li>
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
