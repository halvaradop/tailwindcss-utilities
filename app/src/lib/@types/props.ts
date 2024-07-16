import { ArgsFunction } from "./types"
import { ButtonHTMLAttributes } from "react"
import { VariantProps } from "class-variance-authority"

export interface LayoutProps {
    children: React.ReactNode,
    className?: string
}

export type ButtonProps<T extends ArgsFunction> = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<T>

export interface CardUtilityProps extends LayoutProps {
    href?: string,
    classNameCard?: string
}