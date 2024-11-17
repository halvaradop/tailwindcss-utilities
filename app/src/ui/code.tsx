import { codeToHtml } from "shiki"
import { CodeProps } from "@/lib/@types/props"
import { merge } from "@halvaradop/ui-core"

export const Code = async ({ code, className, lang = "tsx", theme = "houston", fileName }: CodeProps) => {
    const html = await codeToHtml(code.trim(), {
        lang,
        theme,
    })
    return (
        <div className={merge("w-full mt-4 relative code", className)}>
            {fileName && (
                <span className="w-full py-3 px-4 text-sm absolute top-0 left-0 border-b-2 border-gray-100">{fileName}</span>
            )}
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}
