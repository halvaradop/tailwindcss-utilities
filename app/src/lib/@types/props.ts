import { StaticImageData } from "next/image"
import { ButtonHTMLAttributes } from "react"
import { VariantProps } from "class-variance-authority"
import { SlotProps } from "@halvaradop/ui-core"
import { BundledLanguage, BundledTheme } from "shiki"
import { ArgsFunction } from "./types"

export interface LayoutProps {
    children: React.ReactNode
}

export type ButtonProps<T extends ArgsFunction> = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<T>

export type CardProps = LayoutProps &
    SlotProps<"article"> & {
        className?: string
    }

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

export interface CodeProps {
    code: string
    lang?: BundledLanguage
    theme?: BundledTheme
    fileName?: string
    className?: string
}
