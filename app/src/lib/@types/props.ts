import { ArgsFunction } from "./types"
import { ButtonHTMLAttributes } from "react"
import { VariantProps } from "class-variance-authority"
import { SlotProps } from "@halvaradop/ui-core"
import { BundledTheme } from "shiki"

export interface LayoutProps {
    children: React.ReactNode
}

export type ButtonProps<T extends ArgsFunction> = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<T>

export type CardProps = LayoutProps &
    SlotProps<"article"> & {
        className?: string
    }

export interface TitleProps {
    className?: string
    title: string
}

export interface CodeProps {
    code: string
    lang?: string
    theme?: BundledTheme
}
