import type { MaybeRefOrGetter } from '@vueuse/shared'
import type { ComputedRef } from 'vue'
import { computed, toValue } from 'vue'

/**
 * `NOT` 条件的响应式封装。
 *
 * @see https://vueuse.org/logicNot
 */
export function logicNot(v: MaybeRefOrGetter<any>): ComputedRef<boolean> {
  return computed(() => !toValue(v))
}

// alias
export { logicNot as not }
