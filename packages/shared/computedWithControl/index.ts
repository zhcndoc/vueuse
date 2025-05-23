import type { ComputedGetter, ComputedRef, WatchSource, WritableComputedOptions, WritableComputedRef } from 'vue'
import type { Fn } from '../utils'
import { customRef, shallowRef, watch } from 'vue'

export interface ComputedWithControlRefExtra {
  /**
   * 强制更新计算值
   */
  trigger: () => void
}

export interface ComputedRefWithControl<T> extends ComputedRef<T>, ComputedWithControlRefExtra {}
export interface WritableComputedRefWithControl<T> extends WritableComputedRef<T>, ComputedWithControlRefExtra {}

export type ComputedWithControlRef<T = any> = ComputedRefWithControl<T> | WritableComputedRefWithControl<T>

export function computedWithControl<T, S>(
  source: WatchSource<S> | WatchSource<S>[],
  fn: ComputedGetter<T>
): ComputedRefWithControl<T>

export function computedWithControl<T, S>(
  source: WatchSource<S> | WatchSource<S>[],
  fn: WritableComputedOptions<T>
): WritableComputedRefWithControl<T>

/**
 * 显式定义计算属性的依赖关系。
 *
 * @param source
 * @param fn
 */
export function computedWithControl<T, S>(
  source: WatchSource<S> | WatchSource<S>[],
  fn: ComputedGetter<T> | WritableComputedOptions<T>,
): ComputedWithControlRef<T> {
  let v: T = undefined!
  let track: Fn
  let trigger: Fn
  const dirty = shallowRef(true)

  const update = () => {
    dirty.value = true
    trigger()
  }

  watch(source, update, { flush: 'sync' })

  const get = typeof fn === 'function' ? fn : fn.get
  const set = typeof fn === 'function' ? undefined : fn.set

  const result = customRef<T>((_track, _trigger) => {
    track = _track
    trigger = _trigger

    return {
      get() {
        if (dirty.value) {
          v = get(v)
          dirty.value = false
        }
        track()
        return v
      },
      set(v) {
        set?.(v)
      },
    }
  }) as ComputedRefWithControl<T>

  if (Object.isExtensible(result))
    result.trigger = update

  return result
}

// alias
export { computedWithControl as controlledComputed }
