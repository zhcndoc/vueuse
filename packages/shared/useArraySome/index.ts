import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import { computed, toValue } from 'vue'

export type UseArraySomeReturn = ComputedRef<boolean>

/**
 * 响应式 `Array.some`
 *
 * @see https://vueuse.org/useArraySome
 * @param list - 被调用的数组。
 * @param fn - 用于测试每个元素的函数。
 *
 * @returns 如果 `fn` 函数对数组中的任何元素都返回一个真值，则返回 **true**。否则，返回 **false**。
 */
export function useArraySome<T>(
  list: MaybeRefOrGetter<MaybeRefOrGetter<T>[]>,
  fn: (element: T, index: number, array: MaybeRefOrGetter<T>[]) => unknown,
): UseArraySomeReturn {
  return computed(() => toValue(list).some((element, index, array) => fn(toValue(element), index, array)))
}
