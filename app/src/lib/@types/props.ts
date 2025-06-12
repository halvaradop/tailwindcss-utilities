import type { StaticImageData } from "next/image"
import type { ButtonHTMLAttributes, PropsWithChildren } from "react"
import type { VariantProps } from "class-variance-authority"
import type { ArgsFunction } from "./types"

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
