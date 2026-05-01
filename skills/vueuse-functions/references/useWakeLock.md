---
category: Browser
---

# useWakeLock

响应式 [Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API)。提供了一种在应用需要持续运行时，防止设备调暗或锁定屏幕的方法。

## 用法

```ts
import { useWakeLock } from '@vueuse/core'

const { isSupported, isActive, forceRequest, request, release } = useWakeLock()
```

当调用 `request` 时，如果文档可见，则会请求唤醒锁。否则，请求将被排队，直到文档变为可见。如果请求成功，`isActive` 将为 **true**。每当文档被隐藏时，`isActive` 将为 **false**。

当调用 `release` 时，唤醒锁将被释放。如果存在排队中的请求，它将被取消。

要立即请求唤醒锁，即使文档处于隐藏状态，也可以使用 `forceRequest`。请注意，如果文档隐藏，这可能会抛出错误。

## 类型声明

```ts
type WakeLockType = "screen"
export interface WakeLockSentinel extends EventTarget {
  type: WakeLockType
  released: boolean
  release: () => Promise<void>
}
export type UseWakeLockOptions = ConfigurableNavigator & ConfigurableDocument
export interface UseWakeLockReturn extends Supportable {
  sentinel: ShallowRef<WakeLockSentinel | null>
  isActive: ComputedRef<boolean>
  request: (type: WakeLockType) => Promise<void>
  forceRequest: (type: WakeLockType) => Promise<void>
  release: () => Promise<void>
}
/**
 * 响应式 Screen Wake Lock API。
 *
 * @see https://vueuse.org/useWakeLock
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useWakeLock(
  options?: UseWakeLockOptions,
): UseWakeLockReturn
```
