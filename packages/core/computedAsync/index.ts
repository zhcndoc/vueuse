import type { Fn } from '@vueuse/shared'
import type { ComputedRef, Ref } from 'vue'
import { noop } from '@vueuse/shared'
import {
  computed,
  ref as deepRef,
  isRef,
  shallowRef,
  watchEffect,
} from 'vue'

/**
 * 清除计算属性的副作用
 *
 * @param cancelCallback 当触发计算值的重新计算时，调用提供的回调函数
 */
export type AsyncComputedOnCancel = (cancelCallback: Fn) => void

export interface AsyncComputedOptions {
  /**
   * 是否应该延迟评估值
   *
   * @default false
   */
  lazy?: boolean

  /**
   * 传递的 Ref 以接收异步评估的更新
   */
  evaluating?: Ref<boolean>

  /**
   * 使用 shallowRef
   *
   * @default true
   */
  shallow?: boolean

  /**
   * 刷新选项允许更好地控制历史点的时机，默认为 `pre`。
   *
   * 可能的值：`pre`、`post`、`sync`
   *
   * 它的工作方式与 Vue 响应式中的 watch 和 watch effect 的 flush 选项相同。
   * @default 'pre'
   */
  flush?: 'pre' | 'post' | 'sync'

  /**
   * 捕获到错误时的回调函数。
   */
  onError?: (e: unknown) => void
}

/**
 * 创建一个计算属性，其值是通过异步回调函数生成的。
 *
 * @see https://vueuse.org/computedAsync
 * @param evaluationCallback     生成计算值的返回 Promise 的回调函数
 * @param initialState           初始状态，在第一次执行完成之前使用
 * @param optionsOrRef           额外选项或传递的 Ref 以接收异步状态的更新
 */
export function computedAsync<T>(
  evaluationCallback: (onCancel: AsyncComputedOnCancel) => T | Promise<T>,
  initialState: T,
  optionsOrRef: AsyncComputedOptions & { lazy: true },
): ComputedRef<T>
export function computedAsync<T>(
  evaluationCallback: (onCancel: AsyncComputedOnCancel) => T | Promise<T>,
  initialState: undefined,
  optionsOrRef: AsyncComputedOptions & { lazy: true },
): ComputedRef<T | undefined>
export function computedAsync<T>(
  evaluationCallback: (onCancel: AsyncComputedOnCancel) => T | Promise<T>,
  initialState: T,
  optionsOrRef?: Ref<boolean> | (AsyncComputedOptions & { lazy?: false | undefined }),
): Ref<T>
export function computedAsync<T>(
  evaluationCallback: (onCancel: AsyncComputedOnCancel) => T | Promise<T>,
  initialState?: undefined,
  optionsOrRef?: Ref<boolean> | (AsyncComputedOptions & { lazy?: false | undefined }),
): Ref<T | undefined>
export function computedAsync<T>(
  evaluationCallback: (onCancel: AsyncComputedOnCancel) => T | Promise<T>,
  initialState?: T,
  optionsOrRef?: Ref<boolean> | AsyncComputedOptions,
): Ref<T> | Ref<T | undefined> | ComputedRef<T> | ComputedRef<T | undefined> {
  let options: AsyncComputedOptions

  if (isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef,
    }
  }
  else {
    options = optionsOrRef || {}
  }

  const {
    lazy = false,
    flush = 'pre',
    evaluating = undefined,
    shallow = true,
    onError = noop,
  } = options

  const started = shallowRef(!lazy)
  const current = (shallow ? shallowRef(initialState) : deepRef(initialState)) as Ref<T>
  let counter = 0

  watchEffect(async (onInvalidate) => {
    if (!started.value)
      return

    counter++
    const counterAtBeginning = counter
    let hasFinished = false

    // 推迟对 `evaluating` ref 的初始设置
    // 避免将其作为依赖项
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true
      })
    }

    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false

          if (!hasFinished)
            cancelCallback()
        })
      })

      if (counterAtBeginning === counter)
        current.value = result
    }
    catch (e) {
      onError(e)
    }
    finally {
      if (evaluating && counterAtBeginning === counter)
        evaluating.value = false

      hasFinished = true
    }
  }, { flush })

  if (lazy) {
    return computed(() => {
      started.value = true
      return current.value
    })
  }
  else {
    return current
  }
}

// 别名
export { computedAsync as asyncComputed }
