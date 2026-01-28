---
category: Network
---

# useWebSocket

响应式的 [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket) 客户端。

## 用法

```ts
import { useWebSocket } from '@vueuse/core'

const { status, data, send, open, close, ws } = useWebSocket('ws://websocketurl')
```

### Return Values

| Property | Type                                      | Description                          |
| -------- | ----------------------------------------- | ------------------------------------ |
| `data`   | `Ref<any>`                                | Latest received data                 |
| `status` | `Ref<'OPEN' \| 'CONNECTING' \| 'CLOSED'>` | Connection status                    |
| `ws`     | `Ref<WebSocket>`                          | WebSocket instance                   |
| `send`   | `(data, useBuffer?) => boolean`           | Send data (buffers if not connected) |
| `open`   | `() => void`                              | Open/reconnect the connection        |
| `close`  | `(code?, reason?) => void`                | Close the connection                 |

### Callbacks

```ts
const { data } = useWebSocket('ws://websocketurl', {
  onConnected(ws) {
    console.log('Connected!')
  },
  onDisconnected(ws, event) {
    console.log('Disconnected!', event.code)
  },
  onError(ws, event) {
    console.error('Error:', event)
  },
  onMessage(ws, event) {
    console.log('Message:', event.data)
  },
})
```

有关更多选项，请参阅[类型声明](#type-declarations)。

### immediate

默认启用。

调用此组合函数时立即建立连接。

### autoConnect

默认启用。

如果 URL 作为 ref 提供，当 URL 发生变化时，它将自动重新连接到新 URL。

### autoClose

默认启用。

当触发 `beforeunload` 事件或关联的 effect 范围停止时，这将自动调用 `close()`。

### autoReconnect

在发生错误时自动重连（默认禁用）。

```ts
import { useWebSocket } from '@vueuse/core'
// ---cut---
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: true,
})
```

或者具有更多控制其行为的选项：

```ts
import { useWebSocket } from '@vueuse/core'
// ---cut---
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: {
    retries: 3,
    delay: 1000,
    onFailed() {
      alert('重试 3 次后无法连接 WebSocket')
    },
  },
})
```

你也可以传入一个函数给 `delay`，根据重试次数计算延迟时间。这在实现指数退避时非常有用：

```ts
import { useWebSocket } from '@vueuse/core'
// ---cut---
const { status, data, close } = useWebSocket('ws://websocketurl', {
  autoReconnect: {
    retries: 5,
    // 指数退避：1秒，2秒，4秒，8秒，16秒
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
    // 线性退避：1秒，2秒，3秒，4秒，5秒
    delay: retries => retries * 1000,
  },
})
```

显式调用 `close()` 不会触发自动重新连接。

### heartbeat

通常会每隔一段时间发送一个小消息（心跳）以保持连接活动。在此函数中，我们提供了一个方便的辅助工具来执行此操作：

```ts
import { useWebSocket } from '@vueuse/core'
// ---cut---
const { status, data, close } = useWebSocket('ws://websocketurl', {
  heartbeat: true,
})
```

或者具有更多控制：

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

要使用的一个或多个子协议列表，在这种情况下是 SOAP 和 WAMP。

```ts
import { useWebSocket } from '@vueuse/core'
// ---cut---
const { status, data, send, open, close } = useWebSocket('ws://websocketurl', {
  protocols: ['soap'], // ['soap', 'wamp']
})
```
