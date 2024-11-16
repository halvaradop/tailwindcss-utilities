import { CardProps } from "@/lib/@types/props"
import { Slot, merge } from "@halvaradop/ui-core"

export const Card = ({ children, className, asChild }: CardProps) => {
    const SlotComponent = asChild ? Slot : "article"

    return (
        <SlotComponent
            className={merge(
                "py-6 px-4 text-gray flex flex-col gap-y-4 border-2 rounded-xl border-gray-100 bg-gray-200",
                className
            )}
        >
            {children}
        </SlotComponent>
    )
}
