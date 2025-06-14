"use client"
import Link from "next/link"
import Image from "next/image"
import arrow from "@/assets/arrow.svg"
import type { SeparatorProps } from "@/lib/@types/props"

export const Separator = ({ rotate = false, className, children, redirectTo }: SeparatorProps) => {
    const name = encodeURIComponent(
        String(redirectTo ?? children)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")
    )

    return (
        <div className="h-16 flex items-center text-primary border-y border-solid border-border separator" id={name}>
            <Link className="h-full" href={`#${name}`}>
                <figure className="group w-10 h-full flex items-center justify-center relative overflow-hidden img:transition-transform img:ease-linear img:duration-300 hover:cursor-pointer base:w-16">
                    <Image
                        className={`${rotate ? "-rotate-127 group-hover:-translate-y-14 group-hover:translate-x-14" : "group-hover:translate-y-18"}`}
                        src={arrow}
                        alt="Arrow Icon"
                        priority
                    />
                    <Image
                        className={`absolute ${rotate ? "-rotate-127 translate-y-14 -translate-x-14 group-hover:translate-0" : "-translate-y-14 group-hover:translate-0"}`}
                        src={arrow}
                        alt="Arrow Icon"
                        priority
                    />
                </figure>
            </Link>
            <p
                className={`flex-100 h-full px-4 flex items-center border-x border-border sm:px-6 md:px-8 base:px-10 ${className}`}
            >
                {children}
            </p>
            <span className="w-10 grid place-content-center base:w-16 index" />
        </div>
    )
}
