import { Card } from "./card"
import { Title } from "./title"
import contribute from "@/assets/contribute.svg"
import community from "@/assets/community.svg"
import openSource from "@/assets/open-source.svg"
import supportUs from "@/assets/support-us.svg"
import discussion from "@/assets/discussion.svg"

export const OpenSourceSection = () => {
    return (
        <section>
            <Title title="Open Source Project" className="justify-center" />
            <div className="w-full grid gap-6 text-center base:grid-cols-5 base:grid-rows-3">
                <Card className="justify-center base:col-span-3">
                    <Title
                        className="justify-center text-3xl font-normal [&>img]:-order-1"
                        title="Contribute"
                        width={48}
                        src={contribute}
                        alt="Icon representing contribution"
                    />
                    <p className="mt-4 lg:w-4/5 lg:mx-auto">
                        Get involved by forking the repository, making your improvements, and submitting pull requests. Every
                        contribution, big or small, makes a difference and helps the community grow.
                    </p>
                </Card>
                <Card className="justify-center base:col-span-2">
                    <Title
                        className="justify-center text-3xl font-normal [&>img]:-order-1"
                        title="Community"
                        width={48}
                        src={community}
                        alt="Icon representing community"
                    />
                    <p className="mt-4 lg:w-4/5 lg:mx-auto">
                        Be part of a vibrant community of developers and contributors. Share ideas, collaborate on solutions, and
                        shape the future of TailwindCSS Utilities together.
                    </p>
                </Card>
                <Card className="justify-center base:col-span-5">
                    <Title
                        className="justify-center text-3xl font-normal [&>img]:-order-1"
                        title="Open Source"
                        width={48}
                        src={openSource}
                        alt="Icon representing open source"
                    />
                    <p className="mt-4 lg:w-4/5 lg:mx-auto">
                        TailwindCSS Utilities is a fully open-source project built to enhance development with TailwindCSS. Your
                        contributions drive innovation, improve functionality, and expand the ecosystem for developers worldwide.
                    </p>
                </Card>
                <Card className="justify-center base:col-span-3 base:order-1">
                    <Title
                        className="justify-center text-3xl font-normal [&>img]:-order-1"
                        title="Support Us"
                        width={48}
                        src={supportUs}
                        alt="Icon representing support"
                    />
                    <p className="mt-4 lg:w-4/5 lg:mx-auto">
                        Help us expand the reach of our project by sharing it with your network and community. Your support
                        inspires us to keep building and improving.
                    </p>
                </Card>
                <Card className="justify-center base:col-span-2">
                    <Title
                        className="justify-center text-3xl font-normal [&>img]:-order-1"
                        title="Discussion"
                        width={48}
                        src={discussion}
                        alt="Icon representing discussion"
                    />
                    <p className="mt-4 lg:w-4/5 lg:mx-auto">
                        Join the conversation to discuss features, report bugs, and suggest improvements. Your input plays a vital
                        role in shaping the future of the project.
                    </p>
                </Card>
            </div>
        </section>
    )
}
