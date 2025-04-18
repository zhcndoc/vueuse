import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import { computed, toValue } from 'vue'

export type UseArrayMapReturn<T = any> = ComputedRef<T[]>

/**
 * 响应式 `Array.map`
 *
 * @see https://vueuse.org/useArrayMap
 * @param list - 被调用的数组。
 * @param fn - 对给定 `list` 的每个元素调用的函数。每次 `fn` 执行时，返回的值都会添加到新数组中。
 *
 * @returns 一个新数组，其中每个元素都是回调函数的结果。
 */
export function useArrayMap<T, U = T>(
  list: MaybeRefOrGetter<MaybeRefOrGetter<T>[]>,
  fn: (element: T, index: number, array: T[]) => U,
): UseArrayMapReturn<U> {
  return computed(() => toValue(list).map(i => toValue(i)).map(fn))
}
