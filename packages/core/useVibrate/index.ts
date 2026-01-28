import type { AnyFn, Arrayable, Pausable } from '@vueuse/shared'
import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import type { ConfigurableNavigator, ConfigurableScheduler } from '../_configurable'
import { toRef, useIntervalFn } from '@vueuse/shared'
import { defaultNavigator } from '../_configurable'
import { useSupported } from '../useSupported'

function getDefaultScheduler(options: UseVibrateOptions = { interval: 0 }) {
  const {
    interval,
  } = options

  if (interval === 0)
    return

  return (fn: AnyFn) => useIntervalFn(fn, interval, {
    immediate: false,
    immediateCallback: false,
  })
}

export interface UseVibrateOptions extends ConfigurableNavigator, ConfigurableScheduler {
  /**
   *
   * 一个值数组描述了设备震动和不震动的交替周期。
   * 数组中的每个值都被转换为整数，然后交替解释为设备应该震动的毫秒数和不应该震动的毫秒数。
   *
   * @default []
   *
   */
  pattern?: MaybeRefOrGetter<Arrayable<number>>
  /**
   * 持续震动的间隔，以毫秒为单位
   *
   * 设置为 `0` 表示禁用
   *
   * @deprecated Please use `scheduler` option instead
   * @default 0
   *
   */
  interval: number
}

export interface UseVibrateReturn {
  isSupported: ComputedRef<boolean>
  pattern: MaybeRefOrGetter<Arrayable<number>>
  intervalControls?: Pausable
  vibrate: (pattern?: Arrayable<number>) => void
  stop: () => void
}

/**
 * 响应式震动
 *
 * @see https://vueuse.org/useVibrate
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export function useVibrate(options?: UseVibrateOptions): UseVibrateReturn {
  const {
    pattern = [],
    scheduler = getDefaultScheduler(options),
    navigator = defaultNavigator,
  } = options || {}

  const isSupported = useSupported(() => typeof navigator !== 'undefined' && 'vibrate' in navigator)

  const patternRef = toRef(pattern)

  const vibrate = (pattern = patternRef.value) => {
    if (isSupported.value)
      navigator!.vibrate(pattern)
  }

  const intervalControls = scheduler?.(vibrate)

  // Attempt to stop the vibration:
  const stop = () => {
    // Stope the vibration if we need to:
    if (isSupported.value)
      navigator!.vibrate(0)
    intervalControls?.pause()
  }

  return {
    isSupported,
    pattern,
    intervalControls,
    vibrate,
    stop,
  }
}
