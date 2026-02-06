import Image from "next/image"
import { InfiniteSlider } from "@/components/ui/infinite-slider"

export const PoweredBy = () => {
    return (
        <section className="mt-18 bg-transparent pb-16 md:pb-32">
            <div className="max-w-3xl m-auto px-6 group relative lg:max-w-5xl">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="inline md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Powered by</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-7rem)]">
                        <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="/github.svg"
                                    alt="GitHub Logo"
                                    width={40}
                                    height={20}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="/tailwindcss.svg"
                                    alt="Tailwindcss Logo"
                                    width={40}
                                    height={20}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="/vercel.svg"
                                    alt="Vercel Logo"
                                    width={40}
                                    height={20}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="/github.svg"
                                    alt="GitHub Logo"
                                    width={40}
                                    height={20}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="/tailwindcss.svg"
                                    alt="Tailwindcss Logo"
                                    width={40}
                                    height={20}
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="/vercel.svg"
                                    alt="Vercel Logo"
                                    width={40}
                                    height={20}
                                />
                            </div>
                        </InfiniteSlider>
                    </div>
                </div>
            </div>
        </section>
    )
}

PoweredBy.displayName = "PoweredBy"
