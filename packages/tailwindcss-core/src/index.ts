import { isNullish, isObject, isPrimitive } from "@halvaradop/ts-utility-types/validate"

/**
 * Merges two objects, with an option to prioritize non-object types.
 *
 * @param source - The first object to merge.
 * @param target - The second object to merge.
 * @param priority - If true, prioritize non-object types; otherwise, merge deeply.
 * @param nullishValues - If true, include empty fields in the merged object.
 * @returns The merged object.
 *
 * @example
 * // Expected: { a: 1, b: { c: 2, d: 3 }, c: 4 }
 * merge({ a: 1, b: { c: 2 } }, { b: { d: 3 }, c: 4 })
 */
export const merge = <S extends Record<string, unknown>, T extends Record<string, unknown>>(
    source: S,
    target: T,
    priority: boolean = true,
    nullishValues: boolean = true
) => {
    if ((priority && isPrimitive(source) && isObject(target)) || isNullish(source)) return target
    if ((priority && isPrimitive(target) && isObject(source)) || isNullish(target)) return source
    if (isPrimitive(source) && isPrimitive(target)) return target
    const merged: Record<string, unknown> = { ...source }
    for (const key in target) {
        if (!isObject(target[key])) {
            if ((priority && !isObject(source[key])) || !priority) {
                if (!nullishValues && isNullish(target[key])) {
                    delete merged[key]
                } else {
                    merged[key] = target[key]
                }
            }
        } else {
            merged[key] = merge(source[key] as S, target[key] as T, priority)
        }
    }
    return merged
}

/**
 * Converts a camelCase string to a slash-case string.
 *
 * @param str - The camelCase string to transform.
 * @returns {string} - The transformed slash-case string.
 */
export const toSlashCase = (str: string): string => {
    const toSlash = str.replace(/([A-Z])/g, "-$1").toLowerCase()
    return toSlash.at(0) === "-" ? toSlash.substring(1) : toSlash
}

/**
 * Converts a camelCase string to a snake_case string.
 *
 * @param str - The camelCase string to transform.
 * @param transform - The transformation function to apply to the string.
 * @returns {string} - The transformed snake_case string.
 */
export const keysToTransform = (obj: Record<string, unknown>, transform: (key: string) => string) => {
    const transformed: Record<string, unknown> = {}
    for (const key in obj) {
        if (isObject(obj[key])) {
            transformed[transform(key)] = keysToTransform(obj[key] as Record<string, unknown>, transform)
        } else {
            transformed[transform(key)] = obj[key]
        }
    }
    return transformed
}
