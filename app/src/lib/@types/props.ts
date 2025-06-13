import type { StaticImageData } from "next/image"
import type { ButtonHTMLAttributes, PropsWithChildren, JSX, CSSProperties } from "react"
import type { VariantProps } from "class-variance-authority"
import type { ArgsFunction, PerType, PresetType } from "./types"
import type { Transition, Variants } from "motion"

export interface LayoutProps {
    children: React.ReactNode
}

export type ButtonProps<T extends ArgsFunction> = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<T>

export interface ImageSetProps {
    width?: number
    height?: number
    src?: StaticImageData
    alt?: string
}

export interface TitleProps extends ImageSetProps {
    className?: string
    title: string
}

export interface SeparatorProps extends PropsWithChildren {
    index: number
    rotate?: boolean
}

export interface AnimationComponentProps {
    segment: string
    variants: Variants
    per: PerType
    segmentWrapperClassName?: string
}

export interface TextEffectProps {
    children: string
    per?: PerType
    as?: keyof JSX.IntrinsicElements
    variants?: {
        container?: Variants
        item?: Variants
    }
    className?: string
    preset?: PresetType
    delay?: number
    speedReveal?: number
    speedSegment?: number
    trigger?: boolean
    onAnimationComplete?: () => void
    onAnimationStart?: () => void
    segmentWrapperClassName?: string
    containerTransition?: Transition
    segmentTransition?: Transition
    style?: CSSProperties
}
