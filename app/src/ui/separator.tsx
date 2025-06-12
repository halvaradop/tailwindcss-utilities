import Image from "next/image"
import arrow from "@/assets/arrow.svg"
import type { SeparatorProps } from "@/lib/@types/props"

export const Separator = ({ index, rotate, children }: SeparatorProps) => {
    return (
        <div className="h-16 flex items-center border-y border-border">
            <figure className="w-10 grid place-content-center base:w-16">
                <Image className={`${rotate && "-rotate-127"}`} src={arrow} alt="Arrow Icon" priority draggable="false" />
            </figure>
            <p className="flex-100 h-full px-10 text-white flex items-center border-x border-border">{children}</p>
            <p className="w-10 grid place-content-center text-white base:w-16">#{index}</p>
        </div>
    )
}
