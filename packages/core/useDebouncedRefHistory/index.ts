import type { MaybeRefOrGetter, Ref } from 'vue'
import type { UseRefHistoryOptions, UseRefHistoryReturn } from '../useRefHistory'
import { debounceFilter } from '@vueuse/shared'
import { useRefHistory } from '../useRefHistory'

/**
 * [useRefHistory](https://vueuse.org/useRefHistory) 的防抖实现
 *
 * @see https://vueuse.org/useDebouncedRefHistory
 * @param source
 * @param options
 */
export function useDebouncedRefHistory<Raw, Serialized = Raw>(
  source: Ref<Raw>,
  options: Omit<UseRefHistoryOptions<Raw, Serialized>, 'eventFilter'> & { debounce?: MaybeRefOrGetter<number> } = {},
): UseRefHistoryReturn<Raw, Serialized> {
  const filter = options.debounce ? debounceFilter(options.debounce) : undefined
  const history = useRefHistory(source, { ...options, eventFilter: filter })

  return {
    ...history,
  }
}
