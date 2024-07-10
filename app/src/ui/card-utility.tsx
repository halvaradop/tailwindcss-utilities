import { CardUtilityProps } from "@/lib/@types/props"

export const CardUtility = ({ children }: CardUtilityProps) => {

    return (
        <article className="py-6 px-4 text-gray flex flex-col gap-y-4 border-2 rounded-xl border-gray-100 bg-gray-200">
            {children}
        </article>
    )
}