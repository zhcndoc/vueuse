---
category: Browser
---

# useWakeLock

响应式[屏幕唤醒锁定 API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API)。提供了一种防止设备在应用程序需要持续运行时变暗或锁定屏幕的方法。

## 用法

```ts
import { useWakeLock } from '@vueuse/core'

const { isSupported, isActive, forceRequest, request, release } = useWakeLock()
```

当调用 `request` 时，如果文档可见，将请求唤醒锁。否则，请求将排队，直到文档变为可见。如果请求成功，`isActive` 将为 **true**。每当文档被隐藏时，`isActive` 将为 **false**。

当调用 `release` 时，将释放唤醒锁。如果有排队的请求，将被取消。

要立即请求唤醒锁，即使文档被隐藏，请使用 `forceRequest`。请注意，如果文档被隐藏，可能会引发错误。
