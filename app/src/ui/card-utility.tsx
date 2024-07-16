import { CardUtilityProps } from "@/lib/@types/props"
import { cx } from "class-variance-authority"
import Link from "next/link"

export const CardUtility = ({ children, className, classNameCard, href = "/" }: CardUtilityProps) => {

    return (
        <article className={className}>
            <Link className={cx("py-6 px-4 text-gray flex flex-col gap-y-4 border-2 rounded-xl border-gray-100 bg-gray-200", classNameCard)} href={href}>
                {children}
            </Link>
        </article>
    )
}