---
category: Network
---

# useEventSource

一个 [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) 或 [Server-Sent-Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) 实例打开了与 HTTP 服务器的持久连接，服务器以 text/event-stream 格式发送事件。

## 用法

```js
import { useEventSource } from '@vueuse/core'

const { status, data, error, close } = useEventSource('https://event-source-url')
```

查看[类型声明](#type-declarations)以获取更多选项。

### 命名事件

你可以使用第二个参数定义命名事件

```ts
import { useEventSource } from '@vueuse/core'

const { event, data } = useEventSource('https://event-source-url', ['notice', 'update'] as const)
```

### immediate

默认启用。

当调用可组合对象时立即建立连接。

### autoConnect

默认启用。

如果提供了 URL 作为引用，当 URL 更改时，它将自动重新连接到新 URL。

### 错误时自动重连

自动在发生错误时重新连接 (默认禁用)。

```js
const { status, data, close } = useEventSource('https://event-source-url', [], {
  autoReconnect: true,
})
```

或者使用更多对其行为的控制：

```js
const { status, data, close } = useEventSource('https://event-source-url', [], {
  autoReconnect: {
    retries: 3,
    delay: 1000,
    onFailed() {
      alert('重试 3 次后无法连接 EventSource')
    },
  },
})
```
