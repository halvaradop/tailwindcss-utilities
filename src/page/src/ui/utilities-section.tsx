import Image from "next/image"
import { CardUtility } from "./card-utility"
import phoneMobile from "@/assets/phone-mobile.svg"

export const UtilitiesSection = () => {

    return (
        <section className="mt-12">
            <h2 className="mb-6 fluency-2xl text-white">Utilities</h2>
            <section className="grid gap-y-6">
                <CardUtility>
                    <h3 className="text-white text-xl">Text fluency</h3>
                    <p>
                        Automatically adjusts the font size based on the device,
                        ensuring optimal readability on all screens.
                    </p>
                    <Image className="mx-auto -mb-6" src={phoneMobile} alt="phone versin mobile" />
                </CardUtility>
                <CardUtility>
                    <h3 className="text-white text-xl">Scroll</h3>
                    <p>
                        Allows you to customize scrollbars, enhancing aesthetics
                        and user experience.
                    </p>
                </CardUtility>
                <CardUtility>
                    <h3 className="text-white text-xl">Pseudo-classes</h3>
                    <p>
                        Provides a list of utilities not available in native TailwindCSS,
                        expanding styling options.
                    </p>
                </CardUtility>
                <CardUtility>
                    <h3 className="text-white text-xl">Selectors</h3>
                    <p>
                        Offers tools to style specific HTML elements efficiently
                    </p>
                    <pre>
                        <code>
                            
                        </code>
                    </pre>
                </CardUtility>
            </section>
        </section>
    )
}