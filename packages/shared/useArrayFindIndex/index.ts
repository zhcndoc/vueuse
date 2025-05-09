import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import { computed, toValue } from 'vue'

export type UseArrayFindIndexReturn = ComputedRef<number>

/**
 * 响应式 `Array.findIndex`
 *
 * @see https://vueuse.org/useArrayFindIndex
 * @param list - 被调用的数组。
 * @param fn - 用于测试每个元素的函数。
 *
 * @returns 数组中第一个通过测试的元素的索引。否则返回 "-1"。
 */
export function useArrayFindIndex<T>(
  list: MaybeRefOrGetter<MaybeRefOrGetter<T>[]>,
  fn: (element: T, index: number, array: MaybeRefOrGetter<T>[]) => unknown,
): UseArrayFindIndexReturn {
  return computed(() => toValue(list).findIndex((element, index, array) => fn(toValue(element), index, array)))
}
