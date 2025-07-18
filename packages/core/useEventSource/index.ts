import type { Fn } from '@vueuse/shared'
import type { MaybeRefOrGetter, Ref, ShallowRef } from 'vue'
import { isClient, toRef, tryOnScopeDispose } from '@vueuse/shared'
import { ref as deepRef, shallowRef, watch } from 'vue'
import { useEventListener } from '../useEventListener'

export type EventSourceStatus = 'CONNECTING' | 'OPEN' | 'CLOSED'

export interface UseEventSourceOptions extends EventSourceInit {
  /**
   * 启用自动重连
   *
   * @default false
   */
  autoReconnect?: boolean | {
    /**
     * 最大重试次数。
     *
     * 或者你可以传递一个断言函数（如果要重试，则返回true）。
     *
     * @default -1
     */
    retries?: number | (() => boolean)

    /**
     * 重连延迟，单位为毫秒
     *
     * @default 1000
     */
    delay?: number

    /**
     * 在达到最大重试次数时触发。
     */
    onFailed?: Fn
  }

  /**
   * 在调用这个可组合组件时立即打开连接
   *
   * @default true
   */
  immediate?: boolean

  /**
   * 当 URL 改变时自动连接到 websocket
   *
   * @default true
   */
  autoConnect?: boolean
}

export interface UseEventSourceReturn<Events extends string[], Data = any> {
  /**
   * 对通过 EventSource 接收到的最新数据的 ref，
   * 可以被监视以响应传入的消息
   */
  data: ShallowRef<Data | null>

  /**
   * 连接的当前状态，只能是以下之一：
   * 'CONNECTING', 'OPEN', 'CLOSED'
   */
  status: ShallowRef<EventSourceStatus>

  /**
   * 最新的命名事件
   */
  event: ShallowRef<Events[number] | null>

  /**
   * 当前错误
   */
  error: ShallowRef<Event | null>

  /**
   * 优雅地关闭 EventSource 连接。
   */
  close: EventSource['close']

  /**
   * 重新打开 EventSource 连接。
   * 如果当前连接处于活动状态，则会在打开新连接之前关闭当前连接。
   */
  open: Fn

  /**
   * 对当前 EventSource 实例的 ref。
   */
  eventSource: Ref<EventSource | null>
  /**
   * The last event ID string, for server-sent events.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/lastEventId
   */
  lastEventId: ShallowRef<string | null>
}

function resolveNestedOptions<T>(options: T | true): T {
  if (options === true)
    return {} as T
  return options
}

/**
 * EventSource 的响应式包装器。
 *
 * @see https://vueuse.org/useEventSource
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource EventSource
 * @param url
 * @param events
 * @param options
 */
export function useEventSource<Events extends string[], Data = any>(
  url: MaybeRefOrGetter<string | URL | undefined>,
  events: Events = [] as unknown as Events,
  options: UseEventSourceOptions = {},
): UseEventSourceReturn<Events, Data> {
  const event: ShallowRef<string | null> = shallowRef(null)
  const data: ShallowRef<Data | null> = shallowRef(null)
  const status = shallowRef<EventSourceStatus>('CONNECTING')
  const eventSource = deepRef<EventSource | null>(null)
  const error = shallowRef<Event | null>(null)
  const urlRef = toRef(url)
  const lastEventId = shallowRef<string | null>(null)

  let explicitlyClosed = false
  let retried = 0

  const {
    withCredentials = false,
    immediate = true,
    autoConnect = true,
    autoReconnect,
  } = options

  const close = () => {
    if (isClient && eventSource.value) {
      eventSource.value.close()
      eventSource.value = null
      status.value = 'CLOSED'
      explicitlyClosed = true
    }
  }

  const _init = () => {
    if (explicitlyClosed || typeof urlRef.value === 'undefined')
      return

    const es = new EventSource(urlRef.value, { withCredentials })

    status.value = 'CONNECTING'

    eventSource.value = es

    es.onopen = () => {
      status.value = 'OPEN'
      error.value = null
    }

    es.onerror = (e) => {
      status.value = 'CLOSED'
      error.value = e

      // only reconnect if EventSource isn't reconnecting by itself
      // this is the case when the connection is closed (readyState is 2)
      if (es.readyState === 2 && !explicitlyClosed && autoReconnect) {
        es.close()
        const {
          retries = -1,
          delay = 1000,
          onFailed,
        } = resolveNestedOptions(autoReconnect)
        retried += 1

        if (typeof retries === 'number' && (retries < 0 || retried < retries))
          setTimeout(_init, delay)
        else if (typeof retries === 'function' && retries())
          setTimeout(_init, delay)
        else
          onFailed?.()
      }
    }

    es.onmessage = (e: MessageEvent) => {
      event.value = null
      data.value = e.data
      lastEventId.value = e.lastEventId
    }

    for (const event_name of events) {
      useEventListener(es, event_name, (e: Event & { data?: Data, lastEventId?: string }) => {
        event.value = event_name
        data.value = e.data || null
        lastEventId.value = e.lastEventId || null
      }, { passive: true })
    }
  }

  const open = () => {
    if (!isClient)
      return
    close()
    explicitlyClosed = false
    retried = 0
    _init()
  }

  if (immediate)
    open()

  if (autoConnect)
    watch(urlRef, open)

  tryOnScopeDispose(close)

  return {
    eventSource,
    event,
    data,
    status,
    error,
    open,
    close,
    lastEventId,
  }
}
