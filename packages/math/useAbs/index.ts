import type { MaybeRefOrGetter } from '@vueuse/shared'
import type { ComputedRef } from 'vue'
import { computed, toValue } from 'vue'

/**
 * 响应式 `Math.abs`。
 *
 * @see https://vueuse.org/useAbs
 */
export function useAbs(value: MaybeRefOrGetter<number>): ComputedRef<number> {
  return computed(() => Math.abs(toValue(value)))
}
