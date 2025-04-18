// ported from https://dev.to/linusborg/vue-when-a-computed-property-can-be-the-wrong-tool-195j
// by @linusborg https://github.com/LinusBorg

import type { ShallowRef, WatchOptionsBase } from 'vue'
import { readonly, shallowRef, watchEffect } from 'vue'

export type ComputedEagerOptions = WatchOptionsBase

export type ComputedEagerReturn<T = any> = Readonly<ShallowRef<T>>

/**
 * 注意: 如果你正在使用 Vue 3.4+，你可以直接使用 computed。
 * 因为在 Vue 3.4+ 中，如果计算属性的新值没有变化，
 * computed、effect、watch、watchEffect、render 的依赖关系将不会触发。
 * 参考: https://github.com/vuejs/core/pull/5912
 *
 * @param fn effect function
 * @param options WatchOptionsBase
 * @returns 只读的 shallowRef
 */
export function computedEager<T>(fn: () => T, options?: ComputedEagerOptions): ComputedEagerReturn<T> {
  const result = shallowRef()

  watchEffect(() => {
    result.value = fn()
  }, {
    ...options,
    flush: options?.flush ?? 'sync',
  })

  return readonly(result)
}

// alias
export { computedEager as eagerComputed }
