import type { AnyFn } from '@vueuse/shared'
import type { ComputedRef, Ref } from 'vue'
import type { ConfigurableScheduler } from '../_configurable'
import { useIntervalFn } from '@vueuse/shared'
import { ref as deepRef } from 'vue'
import { useSupported } from '../useSupported'

function getDefaultScheduler(options: UseMemoryOptions) {
  if ('interval' in options || 'immediate' in options || 'immediateCallback' in options) {
    const {
      interval = 1000,
      immediate,
      immediateCallback,
    } = options

    return (cb: AnyFn) => useIntervalFn(cb, interval, {
      immediate,
      immediateCallback,
    })
  }

  return useIntervalFn
}

/**
 * Performance.memory
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory
 */
export interface MemoryInfo {
  /**
   * 上下文可用的堆的最大大小（以字节为单位）。
   */
  readonly jsHeapSizeLimit: number
  /**
   * 分配的堆的总大小（以字节为单位）。
   */
  readonly totalJSHeapSize: number
  /**
   * 当前活动的 JS 堆段大小（以字节为单位）。
   */
  readonly usedJSHeapSize: number

  [Symbol.toStringTag]: 'MemoryInfo'
}

export interface UseMemoryOptions extends ConfigurableScheduler {
  /**
   * Start the timer immediately
   *
   * @deprecated Please use `scheduler` option instead
   * @default true
   */
  immediate?: boolean

  /**
   * Execute the callback immediately after calling `resume`
   *
   * @deprecated Please use `scheduler` option instead
   * @default false
   */
  immediateCallback?: boolean

  /** @deprecated Please use `scheduler` option instead */
  interval?: number
}

export interface UseMemoryReturn {
  isSupported: ComputedRef<boolean>
  memory: Ref<MemoryInfo | undefined>
}

type PerformanceMemory = Performance & {
  memory: MemoryInfo
}

/**
 * 响应式内存信息
 *
 * @see https://vueuse.org/useMemory
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export function useMemory(options: UseMemoryOptions = {}): UseMemoryReturn {
  const memory = deepRef<MemoryInfo>()
  const isSupported = useSupported(() => typeof performance !== 'undefined' && 'memory' in performance)

  if (isSupported.value) {
    const {
      scheduler = getDefaultScheduler,
    } = options

    scheduler(() => {
      memory.value = (performance as PerformanceMemory).memory
    })
  }

  return { isSupported, memory }
}
