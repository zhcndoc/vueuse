---
category: 网络
---

# useEventSource

一个 [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) 或 [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) 实例会打开到 HTTP 服务器的持久连接，并以 text/event-stream 格式发送事件。

## 用法

```ts
import { useEventSource } from '@vueuse/core'

const { status, data, error, close } = useEventSource('https://event-source-url')
```

更多选项请参见 [类型声明](#type-declarations)。

### 命名事件

你可以通过第二个参数定义命名事件

```ts
import { useEventSource } from '@vueuse/core'
// ---cut---
const { event, data } = useEventSource(
  'https://event-source-url',
  ['notice', 'update']
)
```

### immediate

默认启用。

在调用该组合式函数时立即建立连接。

### autoConnect

默认启用。

如果 url 以 ref 形式提供，当 url 变化时，会自动重新连接到新的 url。

### 出错时自动重连

自动在出错时重连（默认禁用）。

```ts
import { useEventSource } from '@vueuse/core'
// ---cut---
const { status, data, close } = useEventSource(
  'https://event-source-url',
  [],
  {
    autoReconnect: true,
  }
)
```

或者使用更多控制其行为的方式：

```ts
import { useEventSource } from '@vueuse/core'
// ---cut---
const { status, data, close } = useEventSource(
  'https://event-source-url',
  [],
  {
    autoReconnect: {
      retries: 3,
      delay: 1000,
      onFailed() {
        alert('在 3 次重试后连接 EventSource 失败')
      },
    },
  }
)
```

### 数据序列化

使用序列化函数对传入数据应用自定义转换。

```ts
import { useEventSource } from '@vueuse/core'
// ---cut---
const { data } = useEventSource(
  'https://event-source-url',
  [],
  {
    serializer: {
      read: rawData => JSON.parse(rawData),
    },
  }
)

// 如果服务器发送：'{"name":"John","age":30}'
// data.value 将会是：{ name: 'John', age: 30 }
```

## 类型声明

```ts
export type EventSourceStatus = "CONNECTING" | "OPEN" | "CLOSED"
export interface UseEventSourceOptions<Data> extends EventSourceInit {
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
         * 或者你可以传入一个谓词函数（如果你希望重试，该函数返回 true）。
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
   * 自定义数据序列化
   */
  serializer?: {
    read: (v?: string) => Data
  }
}
export interface UseEventSourceReturn<Events extends string[], Data = any> {
  /**
   * 对通过 EventSource 接收到的最新数据的引用，
   * 可被监听以响应传入消息
   */
  data: ShallowRef<Data | null>
  /**
   * 当前连接状态，只能是以下之一：
   * 'CONNECTING', 'OPEN' 'CLOSED'
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
  close: EventSource["close"]
  /**
   * 重新打开 EventSource 连接。
   * 如果当前连接处于活动状态，将在打开新连接之前先关闭它。
   */
  open: Fn
  /**
   * 当前 EventSource 实例的引用。
   */
  eventSource: ShallowRef<EventSource | null>
  /**
   * 最后的 event ID 字符串，用于 server-sent events。
   * @see https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/lastEventId
   */
  lastEventId: ShallowRef<string | null>
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
export declare function useEventSource<Events extends string[], Data = any>(
  url: MaybeRefOrGetter<string | URL | undefined>,
  events?: Events,
  options?: UseEventSourceOptions<Data>,
): UseEventSourceReturn<Events, Data>
```
