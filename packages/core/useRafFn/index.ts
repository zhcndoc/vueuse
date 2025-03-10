import type { Pausable } from '@vueuse/shared'
import type { MaybeRefOrGetter } from 'vue'
import type { ConfigurableWindow } from '../_configurable'
import { tryOnScopeDispose } from '@vueuse/shared'
import { computed, readonly, shallowRef, toValue } from 'vue'
import { defaultWindow } from '../_configurable'

export interface UseRafFnCallbackArguments {
  /**
   * 当前帧与上一帧之间经过的时间。
   */
  delta: number

  /**
   * 自网页创建以来经过的时间。参见 {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp#the_time_origin 时间起点}。
   */
  timestamp: DOMHighResTimeStamp
}

export interface UseRafFnOptions extends ConfigurableWindow {
  /**
   * 在创建时立即开始 requestAnimationFrame 循环。
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 每秒执行函数的最大帧数。
   * 设置为 `undefined` 来禁用限制。
   *
   * @default undefined
   */
  fpsLimit?: MaybeRefOrGetter<number>
  /**
   * After the requestAnimationFrame loop executed once, it will be automatically stopped.
   *
   * @default false
   */
  once?: boolean
}

/**
 * 在每次 `requestAnimationFrame` 上调用函数。具有暂停和恢复控制。
 *
 * @see https://vueuse.org/useRafFn
 * @param fn
 * @param options
 */
export function useRafFn(fn: (args: UseRafFnCallbackArguments) => void, options: UseRafFnOptions = {}): Pausable {
  const {
    immediate = true,
    fpsLimit = undefined,
    window = defaultWindow,
    once = false,
  } = options

  const isActive = shallowRef(false)
  const intervalLimit = computed(() => {
    return fpsLimit ? 1000 / toValue(fpsLimit) : null
  })
  let previousFrameTimestamp = 0
  let rafId: null | number = null

  function loop(timestamp: DOMHighResTimeStamp) {
    if (!isActive.value || !window)
      return

    if (!previousFrameTimestamp)
      previousFrameTimestamp = timestamp

    const delta = timestamp - previousFrameTimestamp

    if (intervalLimit.value && delta < intervalLimit.value) {
      rafId = window.requestAnimationFrame(loop)
      return
    }

    previousFrameTimestamp = timestamp
    fn({ delta, timestamp })
    if (once) {
      isActive.value = false
      rafId = null
      return
    }
    rafId = window.requestAnimationFrame(loop)
  }

  function resume() {
    if (!isActive.value && window) {
      isActive.value = true
      previousFrameTimestamp = 0
      rafId = window.requestAnimationFrame(loop)
    }
  }

  function pause() {
    isActive.value = false
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  if (immediate)
    resume()

  tryOnScopeDispose(pause)

  return {
    isActive: readonly(isActive),
    pause,
    resume,
  }
}
