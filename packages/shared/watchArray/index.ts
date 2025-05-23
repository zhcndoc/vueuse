import type { WatchOptions, WatchSource } from 'vue'
import { toValue, watch } from 'vue'

export declare type WatchArrayCallback<V = any, OV = any> = (value: V, oldValue: OV, added: V, removed: OV, onCleanup: (cleanupFn: () => void) => void) => any

/**
 * 监视数组的添加和移除。
 *
 * @see https://vueuse.org/watchArray
 */
export function watchArray<T, Immediate extends Readonly<boolean> = false>(
  source: WatchSource<T[]> | T[],
  cb: WatchArrayCallback<T[], Immediate extends true ? T[] | undefined : T[]>,
  options?: WatchOptions<Immediate>,
) {
  let oldList: T[] = options?.immediate
    ? []
    : [...(typeof source === 'function'
        ? source()
        : Array.isArray(source)
          ? source
          : toValue(source))]

  return watch(source as WatchSource<T[]>, (newList, _, onCleanup) => {
    const oldListRemains = Array.from({ length: oldList.length })
    const added: T[] = []
    for (const obj of newList) {
      let found = false
      for (let i = 0; i < oldList.length; i++) {
        if (!oldListRemains[i] && obj === oldList[i]) {
          oldListRemains[i] = true
          found = true
          break
        }
      }
      if (!found)
        added.push(obj)
    }
    const removed = oldList.filter((_, i) => !oldListRemains[i])
    cb(newList, oldList, added, removed, onCleanup)
    oldList = [...newList]
  }, options)
}
