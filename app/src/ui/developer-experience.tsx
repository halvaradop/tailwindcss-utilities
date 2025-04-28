import Image from "next/image"
import fire from "@/assets/fire.svg"
import light from "@/assets/light.svg"
import starts from "@/assets/starts.svg"
import console from "@/assets/console.svg"

export const DeveloperExperienceSection = () => {
    return (
        <section>
            <div className="mx-auto text-left">
                <h2 className="mb-6 text-primary text-fluid-2xl leading-6">Why choose us ?</h2>
                <p className="text-secondary">The ultimate utility packages to work with TailwindCSS</p>
            </div>
            <div className="mt-20 grid grid-cols-2 gap-10 text-primary text-left base:mt-16 base:grid-cols-4 base:gap-12">
                <article className="w-full h-full flex flex-col">
                    <figure className="flex items-center gap-x-2">
                        <Image width={24} src={console} alt="Icon representing faster development" />
                        <figcaption className="text-lg font-medium">Faster</figcaption>
                    </figure>
                    <p className="mt-4 text-secondary text-sm">
                        Reduce setup time and speed up your workflow with ready-to-use features.
                    </p>
                </article>
                <article className="w-full h-full flex flex-col">
                    <figure className="flex items-center gap-x-2">
                        <Image width={24} src={light} alt="Icon representing optimized packages" />
                        <figcaption className="text-lg font-medium">Optimized</figcaption>
                    </figure>
                    <p className="mt-4 text-secondary text-sm">
                        Lightweight and fast plugins, optimized to keep your project's performance at its best.
                    </p>
                </article>
                <article className="w-full h-full flex flex-col">
                    <figure className="flex items-center gap-x-2">
                        <Image width={24} src={starts} alt="Icon representing native plugins" />
                        <figcaption className="text-lg font-medium">Native</figcaption>
                    </figure>
                    <p className="mt-4 text-secondary text-sm">
                        Full integration with Tailwind CSS, ensuring a consistent and smooth development experience.
                    </p>
                </article>
                <article className="w-full h-full flex flex-col">
                    <figure className="flex items-center gap-x-2">
                        <Image width={24} src={fire} alt="Icon representing configurable plugins" />
                        <figcaption className="text-lg font-medium">Customization</figcaption>
                    </figure>
                    <p className="mt-4 text-secondary text-sm">
                        Customize each plugin to your needs with flexible options for total control.
                    </p>
                </article>
            </div>
        </section>
    )
}
