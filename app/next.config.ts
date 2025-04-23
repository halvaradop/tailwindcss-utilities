import type { NextConfig } from "next"
import createMDX from "@next/mdx"
import rehypeHighlight from "rehype-highlight"

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    reactStrictMode: true,
}

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight],
    },
})

export default withMDX(nextConfig)
