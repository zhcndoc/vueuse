import type { Arrayable, Fn } from '@vueuse/shared'
import type { MaybeRef, MaybeRefOrGetter } from 'vue'
import { isObject, toArray, tryOnScopeDispose, watchImmediate } from '@vueuse/shared'
// eslint-disable-next-line no-restricted-imports -- We specifically need to use unref here to distinguish between callbacks
import { computed, toValue, unref } from 'vue'
import { defaultWindow } from '../_configurable'
import { unrefElement } from '../unrefElement'

interface InferEventTarget<Events> {
  addEventListener: (event: Events, fn?: any, options?: any) => any
  removeEventListener: (event: Events, fn?: any, options?: any) => any
}

export type WindowEventName = keyof WindowEventMap
export type DocumentEventName = keyof DocumentEventMap

export interface GeneralEventListener<E = Event> {
  (evt: E): void
}

/**
 * 在挂载时使用 addEventListener 进行注册，并在卸载时自动使用 removeEventListener 进行移除。
 *
 * 重载 1：监听 window 事件
 *
 * @see https://vueuse.org/useEventListener
 * @param event 事件类型或事件类型数组。
 * @param listener 事件监听器或事件监听器数组。
 * @param options 可选项，用于配置事件监听的行为。
 */
// @ts-expect-error - TypeScript gets confused with this and can't infer the correct overload with Parameters<...>
export function useEventListener<E extends keyof WindowEventMap>(
  event: MaybeRefOrGetter<Arrayable<E>>,
  listener: MaybeRef<Arrayable<(this: Window, ev: WindowEventMap[E]) => any>>,
  options?: MaybeRefOrGetter<boolean | AddEventListenerOptions>
): Fn

/**
 * 在挂载时使用 addEventListener 进行注册，并在卸载时自动使用 removeEventListener 进行移除。
 *
 * 重载 2：显式指定了 Window 目标
 *
 * @see https://vueuse.org/useEventListener
 * @param target Window 目标对象。
 * @param event 事件类型或事件类型数组。
 * @param listener 事件监听器或事件监听器数组。
 * @param options 可选项，用于配置事件监听的行为。
 */
export function useEventListener<E extends keyof WindowEventMap>(
  target: Window,
  event: MaybeRefOrGetter<Arrayable<E>>,
  listener: MaybeRef<Arrayable<(this: Window, ev: WindowEventMap[E]) => any>>,
  options?: MaybeRefOrGetter<boolean | AddEventListenerOptions>
): Fn

/**
 * 在挂载时使用 addEventListener 进行注册，并在卸载时自动使用 removeEventListener 进行移除。
 *
 * 重载 3：显式指定了 Document 目标
 *
 * @see https://vueuse.org/useEventListener
 * @param target Document 或 ShadowRoot 目标对象。
 * @param event 事件类型或事件类型数组。
 * @param listener 事件监听器或事件监听器数组。
 * @param options 可选项，用于配置事件监听的行为。
 */
export function useEventListener<E extends keyof DocumentEventMap>(
  target: DocumentOrShadowRoot,
  event: MaybeRefOrGetter<Arrayable<E>>,
  listener: MaybeRef<Arrayable<(this: Document, ev: DocumentEventMap[E]) => any>>,
  options?: MaybeRefOrGetter<boolean | AddEventListenerOptions>
): Fn

/**
 * 在挂载时使用 addEventListener 进行注册，并在卸载时自动使用 removeEventListener 进行移除。
 *
 * 重载 4：显式指定了 HTMLElement 目标
 *
 * @see https://vueuse.org/useEventListener
 * @param target HTMLElement 目标对象。
 * @param event 事件类型或事件类型数组。
 * @param listener 事件监听器。
 * @param options 可选项，用于配置事件监听的行为。
 */
export function useEventListener<E extends keyof HTMLElementEventMap>(
  target: MaybeRefOrGetter<Arrayable<HTMLElement> | null | undefined>,
  event: MaybeRefOrGetter<Arrayable<E>>,
  listener: MaybeRef<(this: HTMLElement, ev: HTMLElementEventMap[E]) => any>,
  options?: MaybeRefOrGetter<boolean | AddEventListenerOptions>
): () => void

/**
 * 在挂载时使用 addEventListener 进行注册，并在卸载时自动使用 removeEventListener 进行移除。
 *
 * 重载 5：自定义事件目标，并推断事件类型
 *
 * @see https://vueuse.org/useEventListener
 * @param target 自定义事件目标对象，根据事件名推断。
 * @param event 事件类型或事件类型数组。
 * @param listener 事件监听器或事件监听器数组。
 * @param options 可选项，用于配置事件监听的行为。
 */
export function useEventListener<Names extends string, EventType = Event>(
  target: MaybeRefOrGetter<Arrayable<InferEventTarget<Names>> | null | undefined>,
  event: MaybeRefOrGetter<Arrayable<Names>>,
  listener: MaybeRef<Arrayable<GeneralEventListener<EventType>>>,
  options?: MaybeRefOrGetter<boolean | AddEventListenerOptions>
): Fn

/**
 * 在挂载时使用 addEventListener 进行注册，并在卸载时自动使用 removeEventListener 进行移除。
 *
 * 重载 6：自定义事件目标，通用型
 *
 * @see https://vueuse.org/useEventListener
 * @param target 自定义事件目标对象。
 * @param event 事件类型或事件类型数组。
 * @param listener 事件监听器或事件监听器数组。
 * @param options 可选项，用于配置事件监听的行为。
 */
export function useEventListener<EventType = Event>(
  target: MaybeRefOrGetter<Arrayable<EventTarget> | null | undefined>,
  event: MaybeRefOrGetter<Arrayable<string>>,
  listener: MaybeRef<Arrayable<GeneralEventListener<EventType>>>,
  options?: MaybeRefOrGetter<boolean | AddEventListenerOptions>
): Fn

export function useEventListener(...args: Parameters<typeof useEventListener>) {
  const cleanups: Function[] = []
  const cleanup = () => {
    cleanups.forEach(fn => fn())
    cleanups.length = 0
  }

  const register = (
    el: EventTarget,
    event: string,
    listener: any,
    options: boolean | AddEventListenerOptions | undefined,
  ) => {
    el.addEventListener(event, listener, options)
    return () => el.removeEventListener(event, listener, options)
  }

  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter(e => e != null)
    return test.every(e => typeof e !== 'string') ? test : undefined
  })

  const stopWatch = watchImmediate(
    () => [
      firstParamTargets.value?.map(e => unrefElement(e as never)) ?? [defaultWindow].filter(e => e != null),
      toArray(toValue(firstParamTargets.value ? args[1] : args[0]) as string[]),
      toArray(unref(firstParamTargets.value ? args[2] : args[1]) as Function[]),
      // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
      toValue(firstParamTargets.value ? args[3] : args[2]) as boolean | AddEventListenerOptions | undefined,
    ] as const,
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup()

      if (!raw_targets?.length || !raw_events?.length || !raw_listeners?.length)
        return

      // create a clone of options, to avoid it being changed reactively on removal
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options
      cleanups.push(
        ...raw_targets.flatMap(el =>
          raw_events.flatMap(event =>
            raw_listeners.map(listener => register(el, event, listener, optionsClone)),
          ),
        ),
      )
    },
    { flush: 'post' },
  )

  const stop = () => {
    stopWatch()
    cleanup()
  }

  tryOnScopeDispose(cleanup)

  return stop
}
