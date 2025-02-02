import type { ComputedGetter, UnwrapNestedRefs } from 'vue'
import { computed } from 'vue'
import { toReactive } from '../toReactive'

/**
 * 计算响应式对象。
 */
export function reactiveComputed<T extends object>(fn: ComputedGetter<T>): UnwrapNestedRefs<T> {
  return toReactive(computed(fn))
}
