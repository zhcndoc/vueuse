import type { Pausable } from '@vueuse/shared'
import type { ShallowRef } from 'vue'
import type { ConfigurableScheduler } from '../_configurable'
import { timestamp } from '@vueuse/shared'
import { shallowRef } from 'vue'
import { useRafFn } from '../useRafFn'

export interface UseTimestampOptions<Controls extends boolean> extends ConfigurableScheduler {
  /**
   * 暴露更多控制选项
   *
   * @default false
   */
  controls?: Controls

  /**
   * 添加到值的偏移量
   *
   * @default 0
   */
  offset?: number

  /**
   * 每次更新时的回调函数
   */
  callback?: (timestamp: number) => void
}

export type UseTimestampReturn<Controls extends boolean> = Controls extends true
  ? ({ timestamp: ShallowRef<number> } & Pausable)
  : ShallowRef<number>

/**
 * 响应式的当前时间戳。
 *
 * @see https://vueuse.org/useTimestamp
 * @param options
 */
export function useTimestamp(options?: UseTimestampOptions<false>): ShallowRef<number>
export function useTimestamp(options: UseTimestampOptions<true>): { timestamp: ShallowRef<number> } & Pausable

export function useTimestamp(options: UseTimestampOptions<boolean> = {}): UseTimestampReturn<boolean> {
  const {
    controls: exposeControls = false,
    offset = 0,
    scheduler = useRafFn,
    callback,
  } = options

  const ts = shallowRef(timestamp() + offset)

  const update = () => ts.value = timestamp() + offset
  const cb = callback
    ? () => {
        update()
        callback(ts.value)
      }
    : update

  const controls = scheduler(cb)

  if (exposeControls) {
    return {
      timestamp: ts,
      ...controls,
    }
  }
  else {
    return ts
  }
}
