import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"

export const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <footer className="bg-transparent py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center">
                    <nav className="mb-8 flex flex-wrap justify-center gap-6">
                        <Link href="/" className="hover:text-primary">
                            Home
                        </Link>
                        <Link href="/docs/utilities" className="hover:text-primary">
                            Utilities
                        </Link>
                        <Link href="/docs/animations" className="hover:text-primary">
                            Animations
                        </Link>
                    </nav>
                    <div className="mb-8 flex space-x-4">
                        <Button className="rounded-full" variant="outline" size="icon" asChild>
                            <Link href="" target="_blank">
                                <GithubIcon className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">© {date} @halvaradop. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

Footer.displayName = "Footer"
