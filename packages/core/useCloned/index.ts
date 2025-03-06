import type { MaybeRefOrGetter, Ref, WatchOptions } from 'vue'
import { ref as deepRef, isRef, shallowRef, toValue, watch } from 'vue'

export interface UseClonedOptions<T = any> extends WatchOptions {
  /**
   * 自定义克隆函数。
   *
   * 默认情况下，它使用 `JSON.parse(JSON.stringify(value))` 进行克隆。
   */
  clone?: (source: T) => T

  /**
   * 手动同步 ref
   *
   * @default false
   */
  manual?: boolean
}

export interface UseClonedReturn<T> {
  /**
   * 克隆的 ref
   */
  cloned: Ref<T>
  /**
   * Ref表示克隆的数据是否被修改。
   */
  isModified: Ref<boolean>
  /**
   * 手动将克隆的数据与源同步
   */
  sync: () => void
}

export type CloneFn<F, T = F> = (x: F) => T

export function cloneFnJSON<T>(source: T): T {
  return JSON.parse(JSON.stringify(source))
}

export function useCloned<T>(
  source: MaybeRefOrGetter<T>,
  options: UseClonedOptions = {},
): UseClonedReturn<T> {
  const cloned = deepRef({} as T) as Ref<T>
  const isModified = shallowRef<boolean>(false)
  let _lastSync = false

  const {
    manual,
    clone = cloneFnJSON,
    // watch options
    deep = true,
    immediate = true,
  } = options

  watch(cloned, () => {
    if (_lastSync) {
      _lastSync = false
      return
    }
    isModified.value = true
  }, {
    deep: true,
    flush: 'sync',
  })

  function sync() {
    _lastSync = true
    isModified.value = false

    cloned.value = clone(toValue(source))
  }

  if (!manual && (isRef(source) || typeof source === 'function')) {
    watch(source, sync, {
      ...options,
      deep,
      immediate,
    })
  }
  else {
    sync()
  }

  return { cloned, isModified, sync }
}
