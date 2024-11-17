import Link from "next/link"
import Image from "next/image"
import { Card } from "./card"
import { Title } from "./title"
import { Code } from "./code"
import { pseudoClassesUtility, scrollUtilities, selectorsUtilities } from "./shiki-code"
import phoneMobile from "@/assets/phone-mobile.svg"

export const UtilitiesSection = () => {
    return (
        <section>
            <Title title="Utilities" />
            <section className="grid gap-y-6 base:grid-cols-3 base:gap-x-4">
                <Card className="h-fit base:row-span-2" asChild>
                    <Link href="/">
                        <h3 className="text-white text-xl">Text fluency</h3>
                        <p>
                            Automatically adjusts the font size based on the device, ensuring optimal readability on all screens.
                        </p>
                        <Image className="mx-auto -mb-6" src={phoneMobile} alt="phone version mobile" />
                    </Link>
                </Card>
                <Card asChild>
                    <Link href="/">
                        <h3 className="text-white text-xl">Scroll</h3>
                        <p>Allows you to customize scrollbars, enhancing aesthetics and user experience.</p>
                        <Code className="secondary" lang="java" code={scrollUtilities} />
                    </Link>
                </Card>
                <Card className="base:row-start-2 base:col-start-2" asChild>
                    <Link href="/">
                        <h3 className="text-white text-xl">Pseudo-classes</h3>
                        <p>Provides a list of utilities not available in native TailwindCSS, expanding styling options.</p>
                        <Code className="secondary" lang="java" code={pseudoClassesUtility} />
                    </Link>
                </Card>
                <Card className="h-fit base:row-span-2 base:col-start-3" asChild>
                    <Link href="/">
                        <h3 className="text-white text-xl">Selectors</h3>
                        <p>Offers tools to style specific HTML elements efficiently</p>
                        <Code className="secondary" lang="html" code={selectorsUtilities} />
                    </Link>
                </Card>
            </section>
        </section>
    )
}
