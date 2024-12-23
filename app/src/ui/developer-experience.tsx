import Image from "next/image"
import { Title } from "./title"
import { Card } from "./card"
import fasterDevelopment from "@/assets/faster-development.svg"
import optimizedPackages from "@/assets/optimized-packages.svg"
import nativePlugins from "@/assets/native-plugins.svg"
import configurablePlugins from "@/assets/configurable-plugins.svg"
import starts from "@/assets/starts.svg"

export const DeveloperExperienceSection = () => {
    return (
        <section>
            <Title className="justify-center" title="Developer Experience" />
            <div className="grid gap-6 text-center base:grid-cols-5 article:pt-[4vw] article:p[2vw]">
                <Card className="relative overflow-hidden base:col-span-3">
                    <Image className="mx-auto" src={fasterDevelopment} alt="Icon representing faster development" />
                    <h3 className="text-white text-xl">Faster Development</h3>
                    <p className="mt-4 lg:w-4/5 lg:mx-auto">
                        Reduce setup time and speed up your workflow with ready-to-use features.
                    </p>
                    <Image className="absolute top-0 left- opacity-60" src={starts} alt="start icon" />
                </Card>
                <Card className="relative overflow-hidden base:col-span-2">
                    <Image className="mx-auto" src={optimizedPackages} alt="Icon representing optimized packages" />
                    <h3 className="text-white text-xl">Optimized Packages</h3>
                    <p className="mt-4 lg:w-4/5 lg:mx-auto">
                        Lightweight and fast plugins, optimized to keep your project's performance at its best.
                    </p>
                    <Image className="absolute top-0 left-0 opacity-60" src={starts} alt="start icon" />
                </Card>
                <Card className="relative overflow-hidden base:col-span-2">
                    <Image className="mx-auto" src={nativePlugins} alt="Icon representing native plugins" />
                    <h3 className="text-white text-xl">Native Plugins</h3>
                    <p className="mt-4 lg:w-4/5 lg:mx-auto">
                        Full integration with Tailwind CSS, ensuring a consistent and smooth development experience.
                    </p>
                    <Image className="absolute top-0 left-0 opacity-60" src={starts} alt="start icon" />
                </Card>
                <Card className="relative overflow-hidden base:col-span-3">
                    <Image className="mx-auto" src={configurablePlugins} alt="Icon representing configurable plugins" />
                    <h3 className="text-white text-xl">Configurable Plugins</h3>
                    <p className="mt-4 lg:w-4/5 lg:mx-auto">
                        Customize each plugin to your needs with flexible options for total control.
                    </p>
                    <Image className="absolute top-0 left-0 opacity-60" src={starts} alt="start icon" />
                </Card>
            </div>
        </section>
    )
}
