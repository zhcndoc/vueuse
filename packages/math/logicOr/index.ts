import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import { computed, toValue } from 'vue'

/**
 * `OR` 条件的响应式封装。
 *
 * @see https://vueuse.org/logicOr
 */
export function logicOr(...args: MaybeRefOrGetter<any>[]): ComputedRef<boolean> {
  return computed(() => args.some(i => toValue(i)))
}

// alias
export { logicOr as or }
