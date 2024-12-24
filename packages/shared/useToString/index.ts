import type { ComputedRef } from 'vue'
import type { MaybeRefOrGetter } from '../utils'
import { computed, toValue } from 'vue'

/**
 * 将 ref 转换为字符串。
 *
 * @see https://vueuse.org/useToString
 */
export function useToString(
  value: MaybeRefOrGetter<unknown>,
): ComputedRef<string> {
  return computed(() => `${toValue(value)}`)
}
