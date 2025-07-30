import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import { computed, toValue } from 'vue'

function uniq<T>(array: T[]) {
  return Array.from(new Set(array))
}

function uniqueElementsBy<T>(
  array: T[],
  fn: (a: T, b: T, array: T[]) => boolean,
) {
  return array.reduce<T[]>((acc, v) => {
    if (!acc.some(x => fn(v, x, array)))
      acc.push(v)
    return acc
  }, [])
}

export type UseArrayUniqueReturn<T = any> = ComputedRef<T[]>

/**
 * 响应式唯一数组
 * @see https://vueuse.org/useArrayUnique
 * @param list - 被调用的数组。
 * @param compareFn
 * @returns 返回一个计算属性 ref，该 ref 返回一个唯一项目的数组。
 *
 * @__NO_SIDE_EFFECTS__
 */
export function useArrayUnique<T>(
  list: MaybeRefOrGetter<MaybeRefOrGetter<T>[]>,
  compareFn?: (a: T, b: T, array: T[]) => boolean,
): UseArrayUniqueReturn<T> {
  return computed<T[]>(() => {
    const resolvedList = toValue(list).map(element => toValue(element))
    return compareFn ? uniqueElementsBy(resolvedList, compareFn) : uniq(resolvedList)
  })
}
