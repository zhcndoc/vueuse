import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import { computed, toValue } from 'vue'

/**
 * 响应式 `Math.trunc`.
 *
 * @see https://vueuse.org/useTrunc
 */
export function useTrunc(value: MaybeRefOrGetter<number>): ComputedRef<number> {
  return computed<number>(() => Math.trunc(toValue(value)))
}
