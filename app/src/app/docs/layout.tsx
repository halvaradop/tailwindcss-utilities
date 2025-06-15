import { LayoutProps } from "@/lib/@types/props"

const DocsLayout = ({ children }: LayoutProps) => {
    return (
        <main id="docs-layout">
            <section>{children}</section>
        </main>
    )
}

export default DocsLayout
