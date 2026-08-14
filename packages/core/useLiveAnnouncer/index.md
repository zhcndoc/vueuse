---
category: Browser
---

# useLiveAnnouncer

为屏幕阅读器用户播报消息的无障碍方式（ARIA 实时区域）

## 用法

```ts
import { useLiveAnnouncer } from '@vueuse/core'

const { announce, polite, assertive } = useLiveAnnouncer()

announce('This is a polite announcement')
polite('This is also a polite announcement')
assertive('Important message!')
```

消息会一直保留在实时区域中，直到被下一条播报替换。传入 `timeout`（以毫秒为单位）可在延迟后自动清除消息：

```ts
// clears the message after 3000ms
announce('Saved successfully', 'polite', 3000)
polite('Saved successfully', 3000)
assertive('Network error', 3000)
```

## 无障碍

播报器使用以下 ARIA 属性：

- **温和**：`role="status"`、`aria-live="polite"`、`aria-atomic="true"`
- **强制**：`role="alert"`、`aria-live="assertive"`、`aria-atomic="true"`

这些属性确保在不同的屏幕阅读器中获得可靠的支持。

## 选项

### idPrefix

- 类型：`string`
- 默认值：`'vueuse-live-announcer'`

播报器元素 ID 的前缀。生成的元素将具有 ID `${idPrefix}-container`、`${idPrefix}-polite` 和 `${idPrefix}-assertive`。

### window

- 类型：`Window`
- 默认值：`defaultWindow`

创建播报器元素的 window 对象。
