import { InvalidSelectorError } from "./errors"

export const tagRegex = /^([a-z]{1,}\-?){1,}$/

export const verifySelectorsTheme = (selectors: string[] = []): string[] => {
    const haveInvalid = selectors.some(selector => !tagRegex.test(selector))
    if(haveInvalid) {
        throw new InvalidSelectorError("Invalid tag html, you must the verify the tags")
    }
    return selectors
}