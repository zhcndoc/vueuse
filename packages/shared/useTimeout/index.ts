import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import type { UseTimeoutFnOptions } from '../useTimeoutFn'
import type { Fn, Stoppable } from '../utils'
import { computed } from 'vue'
import { useTimeoutFn } from '../useTimeoutFn'
import { noop } from '../utils'

export interface UseTimeoutOptions<Controls extends boolean> extends UseTimeoutFnOptions {
  /**
   * 暴露更多控制选项
   *
   * @default false
   */
  controls?: Controls
  /**
   * 超时时的回调函数
   */
  callback?: Fn
}

export type UseTimoutReturn = ComputedRef<boolean> | { readonly ready: ComputedRef<boolean> } & Stoppable

/**
 * 在一定时间后更新值，并带有控制功能。
 *
 * @see   {@link https://vueuse.org/useTimeout}
 * @param interval
 * @param options
 */
export function useTimeout(interval?: MaybeRefOrGetter<number>, options?: UseTimeoutOptions<false>): ComputedRef<boolean>
export function useTimeout(interval: MaybeRefOrGetter<number>, options: UseTimeoutOptions<true>): { ready: ComputedRef<boolean> } & Stoppable
export function useTimeout(interval: MaybeRefOrGetter<number> = 1000, options: UseTimeoutOptions<boolean> = {}): UseTimoutReturn {
  const {
    controls: exposeControls = false,
    callback,
  } = options

  const controls = useTimeoutFn(
    callback ?? noop,
    interval,
    options,
  )

  const ready = computed(() => !controls.isPending.value)

  if (exposeControls) {
    return {
      ready,
      ...controls,
    }
  }
  else {
    return ready
  }
}
