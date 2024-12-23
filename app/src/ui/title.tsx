import Image from "next/image"
import starIcon from "@/assets/star.svg"
import { TitleProps } from "@/lib/@types/props"
import { merge } from "@halvaradop/ui-core"

export const Title = ({ title, className, width = 24, height, src, alt }: TitleProps) => {
    return (
        <h2 className={merge("mb-6 fluency-2xl flex items-center gap-x-3 text-white", className)}>
            <span>{title}</span>
            <Image width={width} height={height} src={src ?? starIcon} alt={alt ?? "star icon"} />
        </h2>
    )
}
