import Link from "next/link"
import { Button } from "@halvaradop/ui-button"
import { Separator } from "@/ui/separator"
import type { CallToActionProps } from "@/lib/@types/props"

export const CallToAction = ({ separator, title, description, button, href }: CallToActionProps) => {
    return (
        <section>
            <Separator>{separator}</Separator>
            <div
                className="min-h-[50dvh] mx-10 py-16 px-4 flex items-center justify-center flex-col text-center border-x border-solid border-border sm:px-6 md:px-8  base:mx-16 base:px-10"
                data-id="call-to-action"
            >
                <h2 className="text-primary text-2xl md:text-fluid-3xl">{title}</h2>
                <p className="mt-6 mb-8 text-muted text-fluid-base">{description}</p>
                <Button asChild>
                    <Link href={href}>{button}</Link>
                </Button>
            </div>
        </section>
    )
}
