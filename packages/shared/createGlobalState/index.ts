import type { AnyFn } from '../utils'
import { effectScope } from 'vue'

export type CreateGlobalStateReturn<Fn extends AnyFn = AnyFn> = Fn

/**
 * 在全局范围内保留状态，以便在 Vue 实例之间重复使用。
 *
 * @see https://vueuse.org/createGlobalState
 * @param stateFactory 用于创建状态的工厂函数
 *
 * @__NO_SIDE_EFFECTS__
 */
export function createGlobalState<Fn extends AnyFn>(
  stateFactory: Fn,
): CreateGlobalStateReturn<Fn> {
  let initialized = false
  let state: any
  const scope = effectScope(true)

  return ((...args: any[]) => {
    if (!initialized) {
      state = scope.run(() => stateFactory(...args))!
      initialized = true
    }
    return state
  }) as Fn
}
