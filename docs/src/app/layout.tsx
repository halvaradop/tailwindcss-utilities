import type { PropsWithChildren } from "@halvaradop/ui-core"
import { Inter } from "next/font/google"
import { RootProvider } from "fumadocs-ui/provider/next"
import { meta } from "@/lib/metadata"
import "@/ui/globals.css"

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-inter",
})

export const metadata = meta

export default function RootLayout({ children }: Required<PropsWithChildren<{}>>) {
    return (
        <html className="scroll-smooth" lang="en" suppressHydrationWarning>
            <body className={`${inter.className} max-w-dvw min-h-screen antialiased flex flex-col relative overflow-x-hidden`}>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    )
}
