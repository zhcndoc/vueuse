import type { WatchCallback, WatchHandle, WatchOptions, WatchSource } from 'vue'
import { nextTick, watch } from 'vue'

type Truthy<T> = T extends false | null | undefined ? never : T

export interface WheneverOptions<Immediate = boolean> extends WatchOptions<Immediate> {
  /**
   * 当条件满足时仅触发一次
   *
   * 覆盖 `WatchOptions` 中的 `once` 选项
   *
   * @default false
   */
  once?: boolean
}

/**
 * 监视值为真的简写形式
 *
 * @see https://vueuse.org/whenever
 */
export function whenever<T>(source: WatchSource<T>, cb: WatchCallback<Truthy<T>, T | undefined>, options?: WheneverOptions<true>): WatchHandle
export function whenever<T>(source: WatchSource<T>, cb: WatchCallback<Truthy<T>, T>, options?: WheneverOptions<false>): WatchHandle
export function whenever<T, Immediate extends Readonly<boolean> = false>(source: WatchSource<T>, cb: WatchCallback<Truthy<T>, T | undefined>, options?: WheneverOptions<Immediate>) {
  const stop = watch(
    source,
    (v, ov, onInvalidate) => {
      if (v) {
        if (options?.once)
          nextTick(() => stop())
        cb(v as Truthy<T>, ov, onInvalidate)
      }
    },
    {
      ...options,
      once: false,
    } as WatchOptions,
  )
  return stop
}
