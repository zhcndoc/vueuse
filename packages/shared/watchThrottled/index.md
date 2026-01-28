---
category: Watch
alias: throttledWatch
---

# watchThrottled

节流式监视。回调函数最多在指定的时间间隔内调用一次。

## 用法

类似于 `watch`，但提供了额外的选项 `throttle`、`trailing` 和 `leading`，这些选项将应用于回调函数。

```typescript
import { watchThrottled } from '@vueuse/core'

watchThrottled(
  source,
  () => { console.log('changed!') },
  { throttle: 500 },
)
```

### 选项

| 选项       | 类型                       | 默认值 | 说明                           |
| ---------- | -------------------------- | ------ | ------------------------------ |
| `throttle` | `MaybeRefOrGetter<number>` | `0`    | 节流间隔时间（毫秒，可响应式） |
| `trailing` | `boolean`                  | `true` | 是否在节流时间结束时调用回调   |
| `leading`  | `boolean`                  | `true` | 是否在节流时间开始时调用回调   |

所有标准的 `watch` 选项（如 `deep`、`immediate`、`flush` 等）也都支持。

### 领先与滞后

控制回调函数调用的时机：

```ts
import { watchThrottled } from '@vueuse/core'

// 只在每个节流周期开始时调用
watchThrottled(source, callback, {
  throttle: 500,
  leading: true,
  trailing: false,
})

// 只在每个节流周期结束时调用
watchThrottled(source, callback, {
  throttle: 500,
  leading: false,
  trailing: true,
})
```

## 工作原理

实质上，它相当于以下代码的简写：

```typescript
import { throttleFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: throttleFilter(500),
  },
)
```
