import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LayoutProps } from "@/lib/@types/props"
import { Header } from "@/ui/header/header"
import { Footer } from "@/ui/footer"
import "@/ui/globals.css"

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

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html className="scroll-smooth" lang="en">
            <body
                className={`${inter.className} max-w-dvw min-h-screen antialiased relative overflow-x-hidden bg-black scrollbar:w-2 track:my-2 thumb:rounded thumb:bg-gray-100 has-[header.open]:scroll:bg-gray-300`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
