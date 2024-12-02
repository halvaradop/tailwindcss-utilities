import { InvalidSelectorError } from "./errors.js"

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
    const tagRegex = /^([a-z]{1,}\-?){1,}$/
    const hasInvalidSelector = selectors.some(selector => !tagRegex.test(selector))
    if (hasInvalidSelector) {
        throw new InvalidSelectorError("Invalid HTML tag. Please verify the tags.")
    }
    return selectors
}
