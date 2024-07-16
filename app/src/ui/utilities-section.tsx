import Image from "next/image"
import { CardUtility } from "./card-utility"
import phoneMobile from "@/assets/phone-mobile.svg"
import starIcon from "@/assets/star.svg"
import selectorsCode from "@/assets/selectors-code.svg"
import pseudoClassesCode from "@/assets/pseudo-classes-code.svg"

export const UtilitiesSection = () => {


    return (
        <section className="mt-12">
            <h2 className="mb-6 fluency-2xl flex gap-x-3 text-white">                
                <span>Utilities</span>
                <Image src={starIcon} alt="star icon" />
            </h2>
            <section className="grid gap-y-6 base:grid-cols-3 base:gap-x-4">
                <CardUtility className="base:row-span-2">
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
                <CardUtility className="base:row-start-2 base:col-start-2">
                    <h3 className="text-white text-xl">Pseudo-classes</h3>
                    <p>
                        Provides a list of utilities not available in native TailwindCSS,
                        expanding styling options.
                    </p>
                    <figure className="p-4 rounded-xl bg-gray-100">
                        <Image src={pseudoClassesCode} alt="selectors code" />
                    </figure>
                </CardUtility>
                <CardUtility className="base:row-span-2 base:col-start-3">
                    <h3 className="text-white text-xl">Selectors</h3>
                    <p>
                        Offers tools to style specific HTML elements efficiently
                    </p>
                    <figure className="p-4 rounded-xl bg-gray-100">
                        <Image src={selectorsCode} alt="selectors code" />
                    </figure>
                </CardUtility>
            </section>
        </section>
    )
}