import type { InjectionKey } from 'vue'
import type { LocalProvidedKey } from './map'
import { getCurrentInstance, provide } from 'vue'
import { localProvidedStateMap } from './map'

export type ProvideLocalReturn = void

/**
 * 在 `provide` 的基础上，允许在同一组件中直接调用 `inject` 来获取值。
 *
 * @example
 * ```ts
 * provideLocal('MyInjectionKey', 1)
 * const injectedValue = injectLocal('MyInjectionKey') // injectedValue === 1
 * ```
 */
export function provideLocal<T, K = LocalProvidedKey<T>>(key: K, value: K extends InjectionKey<infer V> ? V : T): ProvideLocalReturn {
  const instance = getCurrentInstance()?.proxy
  if (instance == null)
    throw new Error('provideLocal must be called in setup')

  if (!localProvidedStateMap.has(instance))
    localProvidedStateMap.set(instance, Object.create(null))

  const localProvidedState = localProvidedStateMap.get(instance)!
  // @ts-expect-error allow InjectionKey as key
  localProvidedState[key] = value
  return provide<T, K>(key, value)
}
