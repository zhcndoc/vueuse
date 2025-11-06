import type { Fn } from '@vueuse/shared'
import type { ComponentPublicInstance, MaybeRefOrGetter, VNode } from 'vue'
import type { ConfigurableWindow } from '../_configurable'
import type { MaybeComputedElementRef, MaybeElementRef } from '../unrefElement'
import { isIOS, noop } from '@vueuse/shared'
import { toValue } from 'vue'
import { defaultWindow } from '../_configurable'
import { unrefElement } from '../unrefElement'
import { useEventListener } from '../useEventListener'

export interface OnClickOutsideOptions<Controls extends boolean = false> extends ConfigurableWindow {
  /**
   * List of elements that should not trigger the event,
   * provided as Refs or CSS Selectors.
   */
  ignore?: MaybeRefOrGetter<(MaybeElementRef | string)[]>
  /**
   * 对内部事件侦听器使用捕获阶段。
   * @default true
   */
  capture?: boolean
  /**
   * 如果焦点移动到iframe，运行处理函数。
   * @default false
   */
  detectIframe?: boolean
  /**
   * Use controls to cancel/trigger listener.
   * @default false
   */
  controls?: Controls
}

export type OnClickOutsideHandler<
  T extends OnClickOutsideOptions<boolean> = OnClickOutsideOptions,
> = (
  event: (T['detectIframe'] extends true ? FocusEvent : never)
    | (T['controls'] extends true ? Event : never)
    | PointerEvent,
) => void

interface OnClickOutsideControlsReturn {
  stop: Fn
  cancel: Fn
  trigger: (event: Event) => void
}

let _iOSWorkaround = false

/**
 * 监听元素外部的点击事件。
 *
 * @see https://vueuse.org/onClickOutside
 * @param target 目标元素
 * @param handler 事件处理器
 * @param options 配置选项
 */
export function onClickOutside<
  T extends OnClickOutsideOptions,
>(
  target: MaybeComputedElementRef,
  handler: OnClickOutsideHandler<T>,
  options?: T
): Fn

export function onClickOutside<
  T extends OnClickOutsideOptions<true>,
>(
  target: MaybeComputedElementRef,
  handler: OnClickOutsideHandler<T>,
  options: T
): OnClickOutsideControlsReturn

// Implementation
export function onClickOutside(
  target: MaybeComputedElementRef,
  handler: OnClickOutsideHandler,
  options: OnClickOutsideOptions<boolean> = {},
) {
  const { window = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options

  if (!window) {
    return controls
      ? { stop: noop, cancel: noop, trigger: noop }
      : noop
  }

  // Fixes: https://github.com/vueuse/vueuse/issues/1520
  // How it works: https://stackoverflow.com/a/39712411
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true
    const listenerOptions = { passive: true }
    // Not using useEventListener because these event handlers must not be disposed.
    // See previously linked references and https://github.com/vueuse/vueuse/issues/4724
    Array.from(window.document.body.children)
      .forEach(el => el.addEventListener('click', noop, listenerOptions))
    window.document.documentElement.addEventListener('click', noop, listenerOptions)
  }

  let shouldListen = true

  const shouldIgnore = (event: Event) => {
    return toValue(ignore).some((target) => {
      if (typeof target === 'string') {
        return Array.from(window.document.querySelectorAll(target))
          .some(el => el === event.target || event.composedPath().includes(el))
      }
      else {
        const el = unrefElement(target)
        return el && (event.target === el || event.composedPath().includes(el))
      }
    })
  }

  /**
   * Determines if the given target has multiple root elements.
   * Referenced from: https://github.com/vuejs/test-utils/blob/ccb460be55f9f6be05ab708500a41ec8adf6f4bc/src/vue-wrapper.ts#L21
   */
  function hasMultipleRoots(target: MaybeComputedElementRef): boolean {
    const vm = toValue(target) as ComponentPublicInstance
    return vm && vm.$.subTree.shapeFlag === 16
  }

  function checkMultipleRoots(target: MaybeComputedElementRef, event: Event): boolean {
    const vm = toValue(target) as ComponentPublicInstance
    const children = vm.$.subTree && vm.$.subTree.children

    if (children == null || !Array.isArray(children))
      return false

    // @ts-expect-error should be VNode
    return children.some((child: VNode) => child.el === event.target || event.composedPath().includes(child.el))
  }

  const listener = (event: Event) => {
    const el = unrefElement(target)

    if (event.target == null)
      return

    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event))
      return

    if (!el || el === event.target || event.composedPath().includes(el))
      return

    if ('detail' in event && event.detail === 0)
      shouldListen = !shouldIgnore(event)

    if (!shouldListen) {
      shouldListen = true
      return
    }

    handler(event as any)
  }

  let isProcessingClick = false

  const cleanup = [
    useEventListener(window, 'click', (event: PointerEvent) => {
      if (!isProcessingClick) {
        isProcessingClick = true
        setTimeout(() => {
          isProcessingClick = false
        }, 0)
        listener(event)
      }
    }, { passive: true, capture }),
    useEventListener(window, 'pointerdown', (e) => {
      const el = unrefElement(target)
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el))
    }, { passive: true }),
    detectIframe && useEventListener(window, 'blur', (event) => {
      setTimeout(() => {
        const el = unrefElement(target)
        if (
          window.document.activeElement?.tagName === 'IFRAME'
          && !el?.contains(window.document.activeElement)
        ) {
          handler(event as any)
        }
      }, 0)
    }, { passive: true }),
  ].filter(Boolean) as Fn[]

  const stop = () => cleanup.forEach(fn => fn())

  if (controls) {
    return {
      stop,
      cancel: () => {
        shouldListen = false
      },
      trigger: (event: Event) => {
        shouldListen = true
        listener(event)
        shouldListen = false
      },
    }
  }

  return stop
}
