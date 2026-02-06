import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { RootProvider } from "fumadocs-ui/provider/next"
import "@/ui/globals.css"
import { PropsWithChildren } from "@halvaradop/ui-core"
import { Header } from "@/components/header"
import { Footer } from "@/components/ui/footer"

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-inter",
})

const title = "TailwindCSS Utilities"
const description =
    "A set of dependencies that extends the utilities offered by TailwindCSS, complementing the selector, text styles, as well as other utilities."

export const metadata: Metadata = {
    title: {
        default: title,
        template: `%s | ${title}`,
    },
    description,
    applicationName: title,
    authors: [{ name: "Hernan Alvarado" }],
    keywords: ["tailwindcss", "utilities", "tailwindcss-utilities", "tailwindcss-plugins"],
    robots: "index,follow",
    category: "web development",
    creator: "Hernan Alvarado",
    classification: "web development",
    metadataBase: new URL("https://tailwindcss-utilities.vercel.app"),
    openGraph: {
        title,
        description,
        type: "website",
        siteName: title,
        countryName: "Colombia",
        alternateLocale: "es_CO",
    },
}

export default function RootLayout({ children }: Required<PropsWithChildren<{}>>) {
    return (
        <html className="scroll-smooth" lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} max-w-dvw min-h-screen antialiased  flex flex-col relative overflow-x-hidden bg-black`}
            >
                <RootProvider>
                    <Header />
                    {children}
                    <Footer />
                </RootProvider>
            </body>
        </html>
    )
}
