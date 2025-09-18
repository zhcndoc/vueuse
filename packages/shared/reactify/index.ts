import type { ComputedRef, MaybeRef, MaybeRefOrGetter } from 'vue'

import type { AnyFn } from '../utils'
// eslint-disable-next-line no-restricted-imports
import { computed, toValue, unref } from 'vue'

export type Reactified<T, Computed extends boolean> = T extends (...args: infer A) => infer R
  ? (...args: { [K in keyof A]: Computed extends true ? MaybeRefOrGetter<A[K]> : MaybeRef<A[K]> }) => ComputedRef<R>
  : never

export type ReactifyReturn<T extends AnyFn = AnyFn, K extends boolean = true> = Reactified<T, K>

export interface ReactifyOptions<T extends boolean> {
  /**
   * Accept passing a function as a reactive getter
   *
   * @default true
   */
  computedGetter?: T
}

/**
 * 将普通函数转换为响应式函数。
 * 转换后的函数接受 ref 作为其参数，并返回一个具有正确类型的 ComputedRef。
 *
 * @param fn - 源函数
 * @param options - Options
 *
 * @__NO_SIDE_EFFECTS__
 */
export function reactify<T extends AnyFn, K extends boolean = true>(fn: T, options?: ReactifyOptions<K>): ReactifyReturn<T, K> {
  const unrefFn = options?.computedGetter === false ? unref : toValue
  return function (this: any, ...args: any[]) {
    return computed(() => fn.apply(this, args.map(i => unrefFn(i))))
  } as ReactifyReturn<T, K>
}

/** @deprecated use `reactify` instead */
export const createReactiveFn = reactify
