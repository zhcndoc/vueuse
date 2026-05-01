---
category: Network
---

# useWebSocket

响应式 [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) 客户端。

## 用法

```ts
import { useWebSocket } from '@vueuse/core'

const { status, data, send, open, close, ws } = useWebSocket('ws://websocketurl')
```

### 返回值

| 属性     | 类型                                      | 描述                         |
| -------- | ----------------------------------------- | ---------------------------- |
| `data`   | `Ref<any>`                                | 最近接收到的数据             |
| `status` | `Ref<'OPEN' \| 'CONNECTING' \| 'CLOSED'>` | 连接状态                     |
| `ws`     | `Ref<WebSocket>`                          | WebSocket 实例               |
| `send`   | `(data, useBuffer?) => boolean`           | 发送数据（未连接时会缓冲）   |
| `open`   | `() => void`                              | 打开/重新连接                |
| `close`  | `(code?, reason?) => void`                | 关闭连接                     |

### 回调

```ts
const { data } = useWebSocket('ws://websocketurl', {
  onConnected(ws) {
    console.log('已连接！')
  },
  onDisconnected(ws, event) {
    console.log('已断开连接！', event.code)
  },
  onError(ws, event) {
    console.error('错误：', event)
  },
  onMessage(ws, event) {
    console.log('消息：', event.data)
  },
})
```

更多选项请参见 [类型声明](#type-declarations)。

### immediate

默认启用。

在调用该组合式函数时立即建立连接。

### autoConnect

默认启用。

如果提供的 URL 是一个 ref，当 URL 变化时，会自动重新连接到新的 URL。

### autoClose

默认启用。

当触发 `beforeunload` 事件或关联的 effect scope 停止时，会自动调用 `close()`。

### autoReconnect

在出错时自动重连（默认禁用）。

```ts
import { useWebSocket } from '@vueuse/core'
// ---cut---
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: true,
})
```

或者对其行为进行更多控制：

```ts
import { useWebSocket } from '@vueuse/core'
// ---cut---
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: {
    retries: 3,
    delay: 1000,
    onFailed() {
      alert('在 3 次重试后仍无法连接 WebSocket')
    },
  },
})
```

你也可以向 `delay` 传入一个函数，根据重试次数计算延迟时间。这对于实现指数退避很有用：

```ts
import { useWebSocket } from '@vueuse/core'
// ---cut---
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: {
    retries: 5,
    // 指数退避：1秒、2秒、4秒、8秒、16秒
    delay: retries => Math.min(1000 * 2 ** (retries - 1), 30000),
  },
})
```

```ts
import { useWebSocket } from '@vueuse/core'
// ---cut---
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: {
    retries: 5,
    // 线性退避：1秒、2秒、3秒、4秒、5秒
    delay: retries => retries * 1000,
  },
})
```

显式调用 `close()` 不会触发自动重连。

### heartbeat

通常做法是在每隔一段时间发送一条小消息（心跳）来保持连接活跃。在这个函数中，我们提供了一个方便的辅助方法来实现它：

```ts
import { useWebSocket } from '@vueuse/core'
// ---cut---
const { status, data, close } = useWebSocket('ws://websocketurl', {
  heartbeat: true,
})
```

或者使用更多控制：

```ts
import { useWebSocket } from '@vueuse/core'
// ---cut---
const { status, data, close } = useWebSocket('ws://websocketurl', {
  heartbeat: {
    message: 'ping',
    scheduler: cb => useIntervalFn(cb, 2000),
    pongTimeout: 1000,
  },
})
```

### 子协议

要使用的一个或多个子协议列表，在此示例中为 SOAP 和 WAMP。

```ts
import { useWebSocket } from '@vueuse/core'
// ---cut---
const { status, data, send, open, close } = useWebSocket('ws://websocketurl', {
  protocols: ['soap'], // ['soap', 'wamp']
})
```

## 类型声明

```ts
export type WebSocketStatus = "OPEN" | "CONNECTING" | "CLOSED"
export type WebSocketHeartbeatMessage = string | ArrayBuffer | Blob
export interface UseWebSocketOptions {
  onConnected?: (ws: WebSocket) => void
  onDisconnected?: (ws: WebSocket, event: CloseEvent) => void
  onError?: (ws: WebSocket, event: Event) => void
  onMessage?: (ws: WebSocket, event: MessageEvent) => void
  /**
   * 每隔 x 毫秒发送一次心跳
   *
   * @default false
   */
  heartbeat?:
    | boolean
    | (ConfigurableScheduler & {
        /**
         * 心跳消息
         *
         * @default 'ping'
         */
        message?: MaybeRefOrGetter<WebSocketHeartbeatMessage>
        /**
         * 心跳响应消息，如果未定义则会使用 message
         */
        responseMessage?: MaybeRefOrGetter<WebSocketHeartbeatMessage>
        /**
         * 间隔（毫秒）
         *
         * @deprecated 请改用 `scheduler` 选项
         * @default 1000
         */
        interval?: number
        /**
         * 心跳响应超时时间（毫秒）
         *
         * @default 1000
         */
        pongTimeout?: number
      })
  /**
   * 启用自动重连
   *
   * @default false
   */
  autoReconnect?:
    | boolean
    | {
        /**
         * 最大重试次数。
         *
         * 你也可以传入一个谓词函数（如果你希望重试，则返回 true）。
         *
         * @default -1
         */
        retries?: number | ((retried: number) => boolean)
        /**
         * 重连延迟（毫秒）
         *
         * 你也可以传入一个函数，根据重试次数计算延迟时间。
         *
         * @default 1000
         */
        delay?: number | ((retries: number) => number)
        /**
         * 达到最大重试次数时触发。
         */
        onFailed?: Fn
      }
  /**
   * 调用此组合式函数时立即打开连接
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 当 URL 变化时自动连接到 websocket
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
   * 对通过 websocket 接收到的最新数据的引用，
   * 可通过监听它来响应传入消息
   */
  data: ShallowRef<T | null>
  /**
   * 当前 websocket 状态，只能是以下之一：
   * 'OPEN'、'CONNECTING'、'CLOSED'
   */
  status: ShallowRef<WebSocketStatus>
  /**
   * 优雅地关闭 websocket 连接。
   */
  close: WebSocket["close"]
  /**
   * 重新打开 websocket 连接。
   * 如果当前连接处于活动状态，会先将其关闭，再打开新的连接。
   */
  open: Fn
  /**
   * 通过 websocket 连接发送数据。
   *
   * @param data
   * @param useBuffer 当 socket 尚未打开时，将数据存入缓冲区，并在连接建立后发送。默认为 true。
   */
  send: (data: string | ArrayBuffer | Blob, useBuffer?: boolean) => boolean
  /**
   * WebSocket 实例的引用。
   */
  ws: ShallowRef<WebSocket | undefined>
}
/**
 * 响应式 WebSocket 客户端。
 *
 * @see https://vueuse.org/useWebSocket
 * @param url
 */
export declare function useWebSocket<Data = any>(
  url: MaybeRefOrGetter<string | URL | undefined>,
  options?: UseWebSocketOptions,
): UseWebSocketReturn<Data>
```
