import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { LayoutProps } from "@/lib/@types/props";
import { Header } from "@/ui/header/header";
import "@/ui/globals.css";

const poppins = Poppins({ 
    subsets: ["latin"],
    weight: ["400", "500", "700"]
})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased bg-black`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
