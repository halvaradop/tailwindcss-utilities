import { LayoutProps } from "@/lib/@types/props"

const DocsLayout = ({ children }: LayoutProps) => {
    return <main className="w-11/12 mt-10 mb-28 mx-auto space-y-16 base:w-10/12 lg:max-w-screen-xl xl:w-8/12">{children}</main>
}

export default DocsLayout
