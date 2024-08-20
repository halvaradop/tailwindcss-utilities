/**
 * This error is thrown when the user provides an invalid selector within the
 * `theme.selector` configuration in the TailwindCSS configuration file.
 * It notifies the user that there is an invalid tag/selector within the extended
 * values of the default selectors.
 */
export class InvalidSelectorError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "InvalidSelectorError"
    }
}
