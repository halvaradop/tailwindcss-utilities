import type { StaticImageData } from "next/image"
import type { ButtonHTMLAttributes, PropsWithChildren, JSX, CSSProperties, MouseEventHandler } from "react"
import type { VariantProps } from "class-variance-authority"
import type { ArgsFunction, PerType, PresetType } from "./types"
import type { Transition, Variants } from "motion"
import type { MotionProps } from "motion/react"

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

export interface SeparatorProps {
    className?: string
    redirectTo?: string
    children: string
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

export type TextScrambleEffectProps = {
    children: string
    duration?: number
    speed?: number
    characterSet?: string
    as?: React.ElementType
    className?: string
    trigger?: boolean
    onScrambleComplete?: () => void
} & MotionProps

export interface TextScrambleProps {
    children: string
    as?: React.ElementType
    characterSet?: string
}

export interface SegmentAnimationProps {
    title: string
    description: string
}

export interface CallToActionProps {
    title: string
    description: string
    button: string
    href: string
    separator: string
}

export interface SectionLayoutProps extends PropsWithChildren {
    className?: string
}

export interface HeaderMenuProps {
    onLinkClick: MouseEventHandler
}