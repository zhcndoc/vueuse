import type { MaybeRefOrGetter, Ref } from 'vue'
import type { DebounceFilterOptions } from '../utils'
import { ref as deepRef, watch } from 'vue'
import { useDebounceFn } from '../useDebounceFn'

/**
 * 对 ref 的更新进行防抖。
 *
 * @return 一个新的防抖 Ref
 */
export function refDebounced<T>(value: Ref<T>, ms: MaybeRefOrGetter<number> = 200, options: DebounceFilterOptions = {}): Readonly<Ref<T>> {
  const debounced = deepRef(value.value as T) as Ref<T>

  const updater = useDebounceFn(() => {
    debounced.value = value.value
  }, ms, options)

  watch(value, () => updater())

  return debounced
}

// alias
export {
  refDebounced as debouncedRef,
  refDebounced as useDebounce,
}
