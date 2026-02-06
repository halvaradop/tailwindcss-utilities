import { Metadata } from "next";

const title = "TailwindCSS Utilities"
const description =
    "A set of dependencies that extends the utilities offered by TailwindCSS, complementing the selector, text styles, as well as other utilities."

export const meta: Metadata = {
    title: {
        default: title,
        template: `%s | ${title}`,
    },
    description,
    applicationName: title,
    authors: [{ name: "Hernan Alvarado" }],
    keywords: ["tailwindcss", "utilities", "tailwindcss-utilities", "tailwindcss-plugins"],
    robots: "index,follow",
    category: "web development",
    creator: "Hernan Alvarado",
    classification: "web development",
    metadataBase: new URL("https://tailwindcss-utilities.vercel.app"),
    openGraph: {
        title,
        description,
        type: "website",
        siteName: title,
        countryName: "Colombia",
        alternateLocale: "es_CO",
    },
}
