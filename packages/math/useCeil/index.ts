import type { MaybeRefOrGetter } from '@vueuse/shared'
import type { ComputedRef } from 'vue'
import { computed, toValue } from 'vue'

/**
 * 响应式 `Math.ceil`
 *
 * @see https://vueuse.org/useCeil
 */
export function useCeil(value: MaybeRefOrGetter<number>): ComputedRef<number> {
  return computed<number>(() => Math.ceil(toValue(value)))
}
