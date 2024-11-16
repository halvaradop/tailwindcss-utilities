import { Title } from "./title"

export const OpenSourceSection = () => {
    return (
        <section className="base:w-2/3 base:mx-auto base:text-center">
            <Title title="Open Source" className="base:justify-center" />
            <p className="mb-2 text-gray">
                TailwindCSS Utilities is an open source project, and we welcome contributions from developers like you! Feel free
                to contribute to the project, help improve existing features, and create new packages that will make the ecosystem
                even better.
            </p>
            <span className="hidden base:block base:text-2xl">&#128150;</span>
        </section>
    )
}
