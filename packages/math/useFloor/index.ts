import type { MaybeRefOrGetter } from '@vueuse/shared'
import type { ComputedRef } from 'vue'
import { computed, toValue } from 'vue'

/**
 * 响应式 `Math.floor`
 *
 * @see https://vueuse.org/useFloor
 */
export function useFloor(value: MaybeRefOrGetter<number>): ComputedRef<number> {
  return computed<number>(() => Math.floor(toValue(value)))
}
