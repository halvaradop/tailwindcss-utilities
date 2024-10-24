import { isObject, isPrimitive } from "@halvaradop/ts-utility-types/utils"

/**
 * Create a new object by merging two objects which prioritize the object types
 *
 * @param source first object to merge
 * @param target second object to merge
 * @param priority true if the object type should be prioritized, false otherwise
 * @returns merged two objects
 */
export const merge = <S extends Record<string, unknown>, T extends Record<string, unknown>>(
    source: S,
    target: T,
    priority: boolean = true
) => {
    if (priority && isPrimitive(source) && isObject(target)) return target
    if (priority && isPrimitive(target) && isObject(source)) return source
    const merged: Record<string, unknown> = { ...source }
    for (const key in target) {
        if (!isObject(target[key])) {
            if ((priority && !isObject(source[key])) || !priority) {
                merged[key] = target[key]
            }
        } else {
            merged[key] = merge(source[key] as S, target[key] as T, priority)
        }
    }
    return merged
}
