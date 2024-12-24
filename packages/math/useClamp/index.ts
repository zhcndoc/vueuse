import type { MaybeRefOrGetter, ReadonlyRefOrGetter } from '@vueuse/shared'
import type { ComputedRef, Ref } from 'vue'
import { clamp } from '@vueuse/shared'
import { computed, isReadonly, ref, toValue } from 'vue'

export function useClamp(
  value: ReadonlyRefOrGetter<number>,
  min: MaybeRefOrGetter<number>,
  max: MaybeRefOrGetter<number>,
): ComputedRef<number>

export function useClamp(
  value: MaybeRefOrGetter<number>,
  min: MaybeRefOrGetter<number>,
  max: MaybeRefOrGetter<number>,
): Ref<number>

/**
 * 在两个其他值之间响应式的夹取一个值。
 *
 * @see https://vueuse.org/useClamp
 * @param value number
 * @param min
 * @param max
 */
export function useClamp(value: MaybeRefOrGetter<number>, min: MaybeRefOrGetter<number>, max: MaybeRefOrGetter<number>) {
  if (typeof value === 'function' || isReadonly(value))
    return computed(() => clamp(toValue(value), toValue(min), toValue(max)))

  const _value = ref(value)
  return computed<number>({
    get() {
      return _value.value = clamp(_value.value, toValue(min), toValue(max))
    },
    set(value) {
      _value.value = clamp(value, toValue(min), toValue(max))
    },
  })
}
