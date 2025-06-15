import type { SectionLayoutProps } from "@/lib/@types/props"

export const SectionLayout = ({ className = "", children }: SectionLayoutProps) => {
    return (
        <section
            className={`mx-10 py-16 px-4 text-primary border-x border-solid border-border sm:px-6 md:px-8 base:mx-16 base:px-10 ${className}`}
        >
            {children}
        </section>
    )
}
