import Image from "next/image"
import starIcon from "@/assets/star.svg"
import { TitleProps } from "@/lib/@types/props"
import { merge } from "@halvaradop/ui-core"

export const Title = ({ title, className }: TitleProps) => {
    return (
        <h2 className={merge("mb-6 fluency-2xl flex items-center gap-x-3 text-white", className)}>
            <span>{title}</span>
            <Image width={24} src={starIcon} alt="star icon" />
        </h2>
    )
}
