
export class InvalidSelectorError extends Error {

    constructor(message: string) {
        super(message)
        this.name = "InvalidSelectorError"
    }
}