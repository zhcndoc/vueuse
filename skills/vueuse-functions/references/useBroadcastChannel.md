---
category: Browser
---

# useBroadcastChannel

响应式 [BroadcastChannel API](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel)。

在组件卸载时自动关闭广播频道。

## 用法

BroadcastChannel 接口表示一个命名频道，给定来源的任何浏览上下文都可以订阅它。它允许不同文档（位于不同窗口、标签页、框架或 iframe 中）之间进行通信，这些文档都属于同一来源。

消息会通过在所有监听该频道的 BroadcastChannel 对象上触发的消息事件进行广播。

```ts
import { useBroadcastChannel } from '@vueuse/core'
import { shallowRef } from 'vue'

const {
  isSupported,
  channel,
  post,
  close,
  error,
  isClosed,
} = useBroadcastChannel({ name: 'vueuse-demo-channel' })

const message = shallowRef('')

message.value = 'Hello, VueUse World!'

// 将消息发布到广播频道：
post(message.value)

// 如果你愿意，可以选择关闭频道：
close()
```

## 类型声明

```ts
export interface UseBroadcastChannelOptions extends ConfigurableWindow {
  /**
   * 频道的名称。
   */
  name: string
}
/**
 * 响应式 BroadcastChannel
 *
 * @see https://vueuse.org/useBroadcastChannel
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel
 * @param options
 *
 */
export declare function useBroadcastChannel<D, P>(
  options: UseBroadcastChannelOptions,
): UseBroadcastChannelReturn<D, P>
export interface UseBroadcastChannelReturn<D, P> extends Supportable {
  channel: ShallowRef<BroadcastChannel | undefined>
  data: ShallowRef<D>
  post: (data: P) => void
  close: () => void
  error: ShallowRef<Event | null>
  isClosed: ShallowRef<boolean>
}
```
