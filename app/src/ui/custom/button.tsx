import { ButtonProps } from "@/lib/@types/props"
import { cva } from "class-variance-authority"


export const buttonVariants = cva("flex items-center justify-center tracking-wider font-bold border focus:outline-none", {
    variants: {
        variant: {
            primary: "text-white border-gray-200 bg-gray-200"
        },
        size: {
            base: "h-10 px-4 rounded-lg",
            md: "h-11 px-5 rounded-md",
            lg: "h-11 px-6 rounded-xl",
            xl: "h-12 px-6 rounded-2xl"
        },
        fullWidth: {
            true: "w-full",
            false: "w-fit"
        }
    },
    defaultVariants: {
        size: "base",
        fullWidth: true,
        variant: "primary",
    }
})


export const Button = ({ className, children, variant, size, fullWidth }: ButtonProps<typeof buttonVariants>) => {

    return (
        <button className={buttonVariants({ className, variant, size, fullWidth })}>
            {children}
        </button>
    )
}