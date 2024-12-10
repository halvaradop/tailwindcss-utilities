/**
 * red-500
 * blue-500
 * bg-green-500
 * animations-spin
 * animations-spin-slow
 *
 */
export const merge = (classes: string): string => {
    const split = classes.split(" ")
    const prefix = new Map<string, string[]>()
    const map = new Map<string, string>()
    split.forEach(className => {
        const [key, ...spread] = className.split("-")
        if (!prefix.has(key)) {
            prefix.set(key, [])
        }
        prefix.get(key)?.push(spread.join("-"))
        map.set(key, className)
    })

    console.log(prefix, [...map.values()])
    return [...map.values()].join(" ")
}

console.log(merge("red-500 blue-500 bg-green-500 bg-blue-700 animations-spin animations-spin-slow"))
