import type { MaybeRefOrGetter, Ref } from 'vue'
import type { DebounceFilterOptions } from '../utils'
import { ref as deepRef, shallowReadonly, toValue, watch } from 'vue'
import { useDebounceFn } from '../useDebounceFn'

export type RefDebouncedReturn<T = any> = Readonly<Ref<T>>

/**
 * 对 ref 的更新进行防抖。
 *
 * @return 一个新的防抖 Ref
 */
export function refDebounced<T>(value: Ref<T>, ms: MaybeRefOrGetter<number> = 200, options: DebounceFilterOptions = {}): RefDebouncedReturn<T> {
  const debounced = deepRef(toValue(value)) as Ref<T>

  const updater = useDebounceFn(() => {
    debounced.value = value.value
  }, ms, options)

  watch(value, () => updater())

  return shallowReadonly(debounced)
}

/** @deprecated use `refDebounced` instead */
export const debouncedRef = refDebounced
/** @deprecated use `refDebounced` instead */
export const useDebounce = refDebounced
