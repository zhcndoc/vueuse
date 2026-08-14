import type { Pausable } from '@vueuse/shared'
import type { ShallowRef } from 'vue'
import type { ConfigurableScheduler } from '../_configurable'
import { shallowRef } from 'vue'
import { useRafFn } from '../useRafFn'

export interface UseNowOptions<Controls extends boolean> extends ConfigurableScheduler {
  /**
   * 暴露更多控制选项
   *
   * @default false
   */
  controls?: Controls
}

export type UseNowReturn<Controls extends boolean> = Controls extends true ? ({ now: ShallowRef<Date> } & Pausable) : ShallowRef<Date>

/**
 * 反应性当前 Date 实例
 *
 * @see https://vueuse.org/useNow
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export function useNow(options?: UseNowOptions<false>): ShallowRef<Date>
export function useNow(options: UseNowOptions<true>): { now: ShallowRef<Date> } & Pausable

/**
 * Reactive current Date instance.
 *
 * @see https://vueuse.org/useNow
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export function useNow(options: UseNowOptions<boolean> = {}): UseNowReturn<boolean> {
  const {
    controls: exposeControls = false,
    scheduler = useRafFn,
  } = options

  const now = shallowRef(new Date())

  const update = () => now.value = new Date()

  const controls = scheduler(update)

  if (exposeControls) {
    return {
      now,
      ...controls,
    }
  }
  else {
    return now
  }
}
