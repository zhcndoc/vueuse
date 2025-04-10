import type { ComputedGetter, UnwrapNestedRefs } from 'vue'
import { computed } from 'vue'
import { toReactive } from '../toReactive'

export type ReactiveComputedReturn<T extends object> = UnwrapNestedRefs<T>

/**
 * 计算响应式对象。
 */
export function reactiveComputed<T extends object>(fn: ComputedGetter<T>): ReactiveComputedReturn<T> {
  return toReactive<T>(computed<T>(fn))
}
