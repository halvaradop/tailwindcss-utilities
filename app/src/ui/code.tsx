import { codeToHtml } from "shiki"
import { CodeProps } from "@/lib/@types/props"

export const Code = async ({ code, lang = "tsx", theme = "houston" }: CodeProps) => {
    const html = await codeToHtml(code, {
        lang,
        theme,
    })
    return <div className="[&>pre]:p-4 [&>pre]:rounded-md" dangerouslySetInnerHTML={{ __html: html }} />
}
