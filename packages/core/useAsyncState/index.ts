import type { MaybeRef, Ref, ShallowRef, UnwrapRef } from 'vue'
import { noop, promiseTimeout, until } from '@vueuse/shared'
import { ref as deepRef, shallowRef, toValue } from 'vue'

export interface UseAsyncStateReturnBase<Data, Params extends any[], Shallow extends boolean> {
  state: Shallow extends true ? Ref<Data> : Ref<UnwrapRef<Data>>
  isReady: Ref<boolean>
  isLoading: Ref<boolean>
  error: Ref<unknown>
  execute: (delay?: number, ...args: Params) => Promise<Data | undefined>
  executeImmediate: (...args: Params) => Promise<Data | undefined>
}

export type UseAsyncStateReturn<Data, Params extends any[], Shallow extends boolean>
  = UseAsyncStateReturnBase<Data, Params, Shallow>
    & PromiseLike<UseAsyncStateReturnBase<Data, Params, Shallow>>

export interface UseAsyncStateOptions<Shallow extends boolean, D = any> {
  /**
   * Delay for the first execution of the promise when "immediate" is true. In milliseconds.
   *
   * @default 0
   */
  delay?: number

  /**
   * 在函数调用后立即执行 Promise。
   * 如果设置了延迟，将应用延迟。
   *
   * 当设置为 false 时，需要手动执行。
   *
   * @default true
   */
  immediate?: boolean

  /**
   * 捕获到错误时的回调。
   */
  onError?: (e: unknown) => void

  /**
   * 捕获到成功时的回调。
   * @param {D} data
   */
  onSuccess?: (data: D) => void

  /**
   * 在执行 Promise 前将状态设置为初始状态。
   *
   * 当多次调用执行函数时（例如，刷新数据），这可能很有用。
   * 当设置为 false 时，
   * 当前状态保持不变，直到 Promise 解析。
   *
   * @default true
   */
  resetOnExecute?: boolean

  /**
   * 使用 shallowRef。
   *
   * @default true
   */
  shallow?: Shallow
  /**
   *
   * 在执行 execute 函数时抛出错误
   *
   * @default false
   */
  throwError?: boolean
}

/**
 * 响应式的异步状态。不会阻塞你的函数，
 * 并在 Promise 完成时触发更改。
 *
 * @see https://vueuse.org/useAsyncState
 * @param promise         要解析的异步函数
 * @param initialState    初始状态，在第一次评估完成之前使用
 * @param options
 */
export function useAsyncState<Data, Params extends any[] = any[], Shallow extends boolean = true>(
  promise: Promise<Data> | ((...args: Params) => Promise<Data>),
  initialState: MaybeRef<Data>,
  options?: UseAsyncStateOptions<Shallow, Data>,
): UseAsyncStateReturn<Data, Params, Shallow> {
  const {
    immediate = true,
    delay = 0,
    onError = globalThis.reportError ?? noop,
    onSuccess = noop,
    resetOnExecute = true,
    shallow = true,
    throwError,
  } = options ?? {}
  const state = shallow ? shallowRef(initialState) : deepRef(initialState)
  const isReady = shallowRef(false)
  const isLoading = shallowRef(false)
  const error = shallowRef<unknown | undefined>(undefined)

  let executionsCount = 0
  async function execute(delay = 0, ...args: any[]) {
    const executionId = (executionsCount += 1)

    if (resetOnExecute)
      state.value = toValue(initialState)
    error.value = undefined
    isReady.value = false
    isLoading.value = true

    if (delay > 0)
      await promiseTimeout(delay)

    const _promise = typeof promise === 'function'
      ? promise(...args as Params)
      : promise

    try {
      const data = await _promise
      if (executionId === executionsCount) {
        state.value = data
        isReady.value = true
      }
      onSuccess(data)
      return data
    }
    catch (e) {
      if (executionId === executionsCount)
        error.value = e
      onError(e)
      if (throwError)
        throw e
    }
    finally {
      if (executionId === executionsCount)
        isLoading.value = false
    }
  }

  if (immediate) {
    execute(delay)
  }

  const shell: UseAsyncStateReturnBase<Data, Params, Shallow> = {
    state: state as Shallow extends true ? ShallowRef<Data> : Ref<UnwrapRef<Data>>,
    isReady,
    isLoading,
    error,
    execute,
    executeImmediate: (...args: any[]) => execute(0, ...args),
  }

  function waitUntilIsLoaded() {
    return new Promise<UseAsyncStateReturnBase<Data, Params, Shallow>>((resolve, reject) => {
      until(isLoading).toBe(false).then(() => resolve(shell)).catch(reject)
    })
  }

  return {
    ...shell,
    then(onFulfilled, onRejected) {
      return waitUntilIsLoaded()
        .then(onFulfilled, onRejected)
    },
  }
}
