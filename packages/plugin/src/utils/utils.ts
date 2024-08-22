import { InvalidSelectorError } from "./errors"

export const tagRegex = /^([a-z]{1,}\-?){1,}$/

/**
 * Verifies that the tags/selectors provided by the user in the `theme` property
 * of the TailwindCSS configuration have a correct structure or name.
 * They must match the regex `/^([a-z]{1,}\-?){1,}$/`.
 *
 * @param selectors List of selectors provided by the user
 * @returns The selectors provided by the user, or throws an error if any selector is invalid
 * @throws {InvalidSelectorError} If any selector is invalid
 */
export const verifySelectorsTheme = (selectors: string[] = []): string[] => {
    const haveInvalid = selectors.some(selector => !tagRegex.test(selector))
    if (haveInvalid) {
        throw new InvalidSelectorError("Invalid HTML tag. Please verify the tags.")
    }
    return selectors
}

/**
 * Removes properties with empty values from an object to clean it up. It verifies if
 * the values are:
 *  - an empty string
 *  - null
 *  - undefined
 *  - an empty array
 *  - an empty object
 *
 * @param entry An object to clean up by removing empty properties.
 * @returns The cleaned object.
 */
export const removeEmptyProperties = <T extends Record<string, any>>(entry: T) => {
    for (const key in entry) {
        const pairValue = entry[key]
        const isArray = Array.isArray(pairValue)
        const isObject = pairValue && typeof pairValue === "object" && !isArray
        if (!pairValue || pairValue === "" || (isArray && !pairValue.length) || (isObject && !Object.keys(pairValue).length)) {
            delete entry[key]
        }
    }
    return entry
}
