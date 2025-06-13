import { LayoutProps } from "@/lib/@types/props"

const DocsLayout = ({ children }: LayoutProps) => {
    return (
        <main className="mx-10 border-x border-solid border-border base:mx-16">
            <section className="px-4 sm:px-6 md:px-8 base:py-16 base:px-10">{children}</section>
        </main>
    )
}

export default DocsLayout
