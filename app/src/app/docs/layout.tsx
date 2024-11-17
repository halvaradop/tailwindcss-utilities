import { LayoutProps } from "@/lib/@types/props"

const LayoutDocs = ({ children }: LayoutProps) => {
    return (
        <main className="w-11/12 mx-auto" id="layout-docs">
            {children}
        </main>
    )
}

export default LayoutDocs
