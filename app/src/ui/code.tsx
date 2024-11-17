import { codeToHtml } from "shiki"
import { CodeProps } from "@/lib/@types/props"

export const Code = async ({ code, lang = "tsx", theme = "houston", fileName }: CodeProps) => {
    const html = await codeToHtml(code, {
        lang,
        theme,
    })
    return (
        <div className="w-full mt-4 relative code">
            {fileName && <span className="w-full py-2 px-4 absolute top-0 left-0 border-b border-gray/60">{fileName}</span>}
            <div className="w-full [&>pre]:px-4 [&>pre]:rounded-md" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}
