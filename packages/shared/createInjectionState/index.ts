import type { InjectionKey } from 'vue'
import { injectLocal } from '../injectLocal'
import { provideLocal } from '../provideLocal'

export type CreateInjectionStateReturn<Arguments extends Array<any>, Return> = Readonly<[
  /**
   * Call this function in a provider component to create and provide the state.
   *
   * @param args Arguments passed to the composable
   * @returns The state returned by the composable
   */
  useProvidingState: (...args: Arguments) => Return,
  /**
   * Call this function in a consumer component to inject the state.
   *
   * @returns The injected state, or `undefined` if not provided and no default value was set.
   */
  useInjectedState: () => Return | undefined,
]>

export interface CreateInjectionStateOptions<Return> {
  /**
   * 自定义注入状态的 injectionKey
   */
  injectionKey?: string | InjectionKey<Return>
  /**
   * Default value for the InjectionState
   */
  defaultValue?: Return
}

/**
 * 创建可以注入到组件中的全局状态。
 *
 * @see https://vueuse.org/createInjectionState
 *
 * @__NO_SIDE_EFFECTS__
 */
export function createInjectionState<Arguments extends Array<any>, Return>(
  composable: (...args: Arguments) => Return,
  options?: CreateInjectionStateOptions<Return>,
): CreateInjectionStateReturn<Arguments, Return> {
  const key: string | InjectionKey<Return> = options?.injectionKey || Symbol(composable.name || 'InjectionState')
  const defaultValue = options?.defaultValue
  const useProvidingState = (...args: Arguments) => {
    const state = composable(...args)
    provideLocal(key, state)
    return state
  }
  const useInjectedState = () => injectLocal(key, defaultValue)
  return [useProvidingState, useInjectedState]
}
