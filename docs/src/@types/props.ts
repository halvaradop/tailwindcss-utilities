import type { PropsWithChildren } from "react"
import type { PresetType } from "./types"
import type { Variants } from "motion"

export interface AnimatedGroupProps extends PropsWithChildren {
    className?: string
    variants?: {
        container?: Variants
        item?: Variants
    }
    preset?: PresetType
}

export interface InfiniteSliderProps {
    children: React.ReactNode
    gap?: number
    duration?: number
    durationOnHover?: number
    direction?: "horizontal" | "vertical"
    reverse?: boolean
    className?: string
}