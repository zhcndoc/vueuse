import type { InjectionKey } from 'vue'
import { getCurrentInstance, getCurrentScope, hasInjectionContext, inject } from 'vue'
import { localProvidedStateMap } from '../provideLocal/map'

/**
 * 在 `inject` 的基础上，允许直接调用 `inject` 来获取在同一组件中调用 provide 后的值。
 *
 * @example
 * ```ts
 * injectLocal('MyInjectionKey', 1)
 * const injectedValue = injectLocal('MyInjectionKey') // injectedValue === 1
 * ```
 *
 * @__NO_SIDE_EFFECTS__
 */
// @ts-expect-error overloads are not compatible
export const injectLocal: typeof inject = <T>(...args) => {
  const key = args[0] as InjectionKey<T> | string | number
  const instance = getCurrentInstance()?.proxy
  const owner = instance ?? getCurrentScope()

  if (owner == null && !hasInjectionContext())
    throw new Error('injectLocal must be called in setup')

  if (owner && localProvidedStateMap.has(owner) && key in localProvidedStateMap.get(owner)!)
    return localProvidedStateMap.get(owner)![key]

  // @ts-expect-error overloads are not compatible
  return inject(...args)
}
