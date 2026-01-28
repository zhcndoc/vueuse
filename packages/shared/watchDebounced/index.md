---
category: Watch
alias: debouncedWatch
---

# watchDebounced

防抖监听。回调函数仅在源停止变化指定时长后才会被调用。

## 使用方法

类似于 `watch`，但提供额外选项 `debounce` 和 `maxWait`，它们将应用于回调函数。

```ts
import { watchDebounced } from '@vueuse/core'

watchDebounced(
  source,
  () => { console.log('变化了！') },
  { debounce: 500, maxWait: 1000 },
)
```

### 选项

| 选项       | 类型                       | 默认值 | 说明                                 |
| ---------- | -------------------------- | ------ | ------------------------------------ |
| `debounce` | `MaybeRefOrGetter<number>` | `0`    | 防抖延迟时间（毫秒）（支持响应式）   |
| `maxWait`  | `MaybeRefOrGetter<number>` | —      | 最大等待时间，超过后强制调用回调函数 |

所有标准的 `watch` 选项（如 `deep`、`immediate`、`flush` 等）均支持。

### 响应式防抖时间

防抖时间参数可以是响应式的：

```ts
import { watchDebounced } from '@vueuse/core'

const debounceMs = ref(500)

watchDebounced(
  source,
  () => { console.log('变化了！') },
  { debounce: debounceMs },
)

// 之后可以修改防抖时间
debounceMs.value = 1000
```

## 工作原理

本质上，它是以下代码的简写形式：

```ts
import { debounceFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('变化了！') },
  {
    eventFilter: debounceFilter(500, { maxWait: 1000 }),
  },
)
```
