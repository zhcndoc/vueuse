import type { MaybeRefOrGetter } from 'vue'
import type { CancelablePromisifyFn, DebounceFilterOptions, FunctionArgs } from '../utils'
import { createFilterWrapper, debounceFilter } from '../utils'

export type UseDebounceFnReturn<T extends FunctionArgs> = CancelablePromisifyFn<T>

/**
 * 延迟执行函数。
 *
 * @see https://vueuse.org/useDebounceFn
 * @param  fn          要在延迟毫秒后执行的函数。
 * @param  ms          毫秒为单位的延迟时间，必须为零或更大。对于事件回调，最有用的值大约为 100 或 250（甚至更高）。
 * @param  options     选项
 *
 * @return A new, debounced, function with isPending, cancel, and flush properties.
 */
export function useDebounceFn<T extends FunctionArgs>(
  fn: T,
  ms: MaybeRefOrGetter<number> = 200,
  options: DebounceFilterOptions = {},
): UseDebounceFnReturn<T> {
  return createFilterWrapper(debounceFilter(ms, options), fn)
}
