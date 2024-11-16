import Image from "next/image"
import { Title } from "./title"
import { Card } from "./card"
import rocket from "@/assets/rocket.svg"
import setting from "@/assets/setting.svg"

export const DeveloperExperienceSection = () => {
    return (
        <section>
            <Title title="Developer Experience" />
            <div className="grid gap-6 text-center base:grid-cols-5 article:pt-[4vw] article:p[2vw]">
                <Card className="flex-col items-center gap-x-5 base:flex-row base:col-span-3">
                    <Image className="order-1 base:-order-1" width={40} src={rocket} alt="rocket icon" />
                    <div>
                        <h3 className="text-white text-xl">Faster Development</h3>
                        <p className="mt-4 lg:w-4/5 lg:mx-auto">
                            Reduce setip time and speed up your workflow with ready-to-use feataures
                        </p>
                    </div>
                </Card>
                <Card className="base:col-span-2">
                    <h3 className="text-white text-xl">Optimized Packages</h3>
                    <p className="mt-4 lg:w-4/5 lg:mx-auto">
                        Lightweight and fast plugins, optimized to keep your project's performance at its best.
                    </p>
                </Card>
                <Card className="base:col-span-2">
                    <h3 className="text-white text-xl">Native Plugins</h3>
                    <p className="mt-4 lg:w-4/5 lg:mx-auto">
                        Full integration with Tailwind CSS, ensuring a consistent and smooth development experience.
                    </p>
                </Card>
                <Card className="flex-col items-center gap-x-5 base:flex-row base:col-span-3">
                    <Image className="order-1 base:-order-1" width={40} src={setting} alt="setting icon" />
                    <div>
                        <h3 className="text-white text-xl">Configurable Plugins</h3>
                        <p className="mt-4 lg:w-4/5 lg:mx-auto">
                            Customize each plugin to your needs with flexible options for total control.
                        </p>
                    </div>
                </Card>
            </div>
        </section>
    )
}
