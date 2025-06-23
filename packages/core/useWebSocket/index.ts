import type { Fn, TimerHandle } from '@vueuse/shared'
import type { MaybeRefOrGetter, Ref, ShallowRef } from 'vue'
import { isClient, isWorker, toRef, tryOnScopeDispose, useIntervalFn } from '@vueuse/shared'
import { ref as deepRef, shallowRef, toValue, watch } from 'vue'
import { useEventListener } from '../useEventListener'

export type WebSocketStatus = 'OPEN' | 'CONNECTING' | 'CLOSED'
export type WebSocketHeartbeatMessage = string | ArrayBuffer | Blob

const DEFAULT_PING_MESSAGE = 'ping'

export interface UseWebSocketOptions {
  onConnected?: (ws: WebSocket) => void
  onDisconnected?: (ws: WebSocket, event: CloseEvent) => void
  onError?: (ws: WebSocket, event: Event) => void
  onMessage?: (ws: WebSocket, event: MessageEvent) => void

  /**
   * 每过 x 毫秒发送一次心跳。
   *
   * @default false
   */
  heartbeat?: boolean | {
    /**
     * 心跳消息
     *
     * @default 'ping'
     */
    message?: MaybeRefOrGetter<WebSocketHeartbeatMessage>

    /**
     * 心跳的响应消息，如果未定义，将使用该消息
     */
    responseMessage?: MaybeRefOrGetter<WebSocketHeartbeatMessage>

    /**
     * 间隔时间，毫秒为单位
     *
     * @default 1000
     */
    interval?: number

    /**
     * 心跳响应超时时间，毫秒为单位
     *
     * @default 1000
     */
    pongTimeout?: number
  }

  /**
   * 启用自动重新连接
   *
   * @default false
   */
  autoReconnect?: boolean | {
    /**
     * 最大重试次数。
     *
     * 或者你可以传递一个谓词函数（如果要重试，则返回 true）。
     *
     * @default -1
     */
    retries?: number | ((retried: number) => boolean)

    /**
     * 重新连接延迟，毫秒为单位
     *
     * @default 1000
     */
    delay?: number

    /**
     * 当达到最大重试次数时。
     */
    onFailed?: Fn
  }

  /**
   * Immediately open the connection when calling this composable
   *
   * @default true
   */
  immediate?: boolean

  /**
   * 当 URL 发生变化时自动连接到 WebSocket
   *
   * @default true
   */
  autoConnect?: boolean

  /**
   * 自动关闭连接
   *
   * @default true
   */
  autoClose?: boolean

  /**
   * 一个或多个子协议字符串的列表
   *
   * @default []
   */
  protocols?: string[]
}

export interface UseWebSocketReturn<T> {
  /**
   * WebSocket 最新接收到的数据的 ref，可以监听以响应传入的消息
   */
  data: Ref<T | null>

  /**
   * 当前 WebSocket 的状态，只能是以下之一：
   * 'OPEN'，'CONNECTING'，'CLOSED'
   */
  status: ShallowRef<WebSocketStatus>

  /**
   * 优雅地关闭 WebSocket 连接。
   */
  close: WebSocket['close']

  /**
   * 重新打开 WebSocket 连接。
   * 如果当前连接处于活动状态，将在打开新连接之前关闭它。
   */
  open: Fn

  /**
   * 通过 WebSocket 连接发送数据。
   *
   * @param data
   * @param useBuffer 当套接字尚未打开时，将数据存储到缓冲区并在连接时发送。默认为 true。
   */
  send: (data: string | ArrayBuffer | Blob, useBuffer?: boolean) => boolean

  /**
   * WebSocket 实例的 ref。
   */
  ws: Ref<WebSocket | undefined>
}

function resolveNestedOptions<T>(options: T | true): T {
  if (options === true)
    return {} as T
  return options
}

/**
 * 响应式 WebSocket 客户端。
 *
 * @see https://vueuse.org/useWebSocket
 * @param url
 */
export function useWebSocket<Data = any>(
  url: MaybeRefOrGetter<string | URL | undefined>,
  options: UseWebSocketOptions = {},
): UseWebSocketReturn<Data> {
  const {
    onConnected,
    onDisconnected,
    onError,
    onMessage,
    immediate = true,
    autoConnect = true,
    autoClose = true,
    protocols = [],
  } = options

  const data: Ref<Data | null> = deepRef(null)
  const status = shallowRef<WebSocketStatus>('CLOSED')
  const wsRef = deepRef<WebSocket | undefined>()
  const urlRef = toRef(url)

  let heartbeatPause: Fn | undefined
  let heartbeatResume: Fn | undefined

  let explicitlyClosed = false
  let retried = 0

  let bufferedData: (string | ArrayBuffer | Blob)[] = []

  let retryTimeout: TimerHandle
  let pongTimeoutWait: TimerHandle

  const _sendBuffer = () => {
    if (bufferedData.length && wsRef.value && status.value === 'OPEN') {
      for (const buffer of bufferedData)
        wsRef.value.send(buffer)
      bufferedData = []
    }
  }

  const resetRetry = () => {
    if (retryTimeout != null) {
      clearTimeout(retryTimeout)
      retryTimeout = undefined
    }
  }

  const resetHeartbeat = () => {
    clearTimeout(pongTimeoutWait)
    pongTimeoutWait = undefined
  }

  // Status code 1000 -> Normal Closure https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
  const close: WebSocket['close'] = (code = 1000, reason) => {
    resetRetry()
    if ((!isClient && !isWorker) || !wsRef.value)
      return
    explicitlyClosed = true
    resetHeartbeat()
    heartbeatPause?.()
    wsRef.value.close(code, reason)
    wsRef.value = undefined
  }

  const send = (data: string | ArrayBuffer | Blob, useBuffer = true) => {
    if (!wsRef.value || status.value !== 'OPEN') {
      if (useBuffer)
        bufferedData.push(data)
      return false
    }
    _sendBuffer()
    wsRef.value.send(data)
    return true
  }

  const _init = () => {
    if (explicitlyClosed || typeof urlRef.value === 'undefined')
      return

    const ws = new WebSocket(urlRef.value, protocols)
    wsRef.value = ws
    status.value = 'CONNECTING'

    ws.onopen = () => {
      status.value = 'OPEN'
      retried = 0
      onConnected?.(ws!)
      heartbeatResume?.()
      _sendBuffer()
    }

    ws.onclose = (ev) => {
      status.value = 'CLOSED'
      resetHeartbeat()
      heartbeatPause?.()
      onDisconnected?.(ws, ev)

      if (!explicitlyClosed && options.autoReconnect && (wsRef.value == null || ws === wsRef.value)) {
        const {
          retries = -1,
          delay = 1000,
          onFailed,
        } = resolveNestedOptions(options.autoReconnect)

        const checkRetires = typeof retries === 'function'
          ? retries
          : () => typeof retries === 'number' && (retries < 0 || retried < retries)

        if (checkRetires(retried)) {
          retried += 1
          retryTimeout = setTimeout(_init, delay)
        }
        else {
          onFailed?.()
        }
      }
    }

    ws.onerror = (e) => {
      onError?.(ws!, e)
    }

    ws.onmessage = (e: MessageEvent) => {
      if (options.heartbeat) {
        resetHeartbeat()
        const {
          message = DEFAULT_PING_MESSAGE,
          responseMessage = message,
        } = resolveNestedOptions(options.heartbeat)
        if (e.data === toValue(responseMessage))
          return
      }

      data.value = e.data
      onMessage?.(ws!, e)
    }
  }

  if (options.heartbeat) {
    const {
      message = DEFAULT_PING_MESSAGE,
      interval = 1000,
      pongTimeout = 1000,
    } = resolveNestedOptions(options.heartbeat)

    const { pause, resume } = useIntervalFn(
      () => {
        send(toValue(message), false)
        if (pongTimeoutWait != null)
          return
        pongTimeoutWait = setTimeout(() => {
          // auto-reconnect will be trigger with ws.onclose()
          close()
          explicitlyClosed = false
        }, pongTimeout)
      },
      interval,
      { immediate: false },
    )

    heartbeatPause = pause
    heartbeatResume = resume
  }

  if (autoClose) {
    if (isClient)
      useEventListener('beforeunload', () => close(), { passive: true })
    tryOnScopeDispose(close)
  }

  const open = () => {
    if (!isClient && !isWorker)
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

  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef,
  }
}
