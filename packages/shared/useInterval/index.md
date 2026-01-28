---
category: Animation
---

# useInterval

每个间隔递增的响应式计数器。

## 使用方法

```ts
import { useInterval } from '@vueuse/core'

// 每200毫秒计数增加一次
const counter = useInterval(200)
```

### 含控制功能

```ts
import { useInterval } from '@vueuse/core'

const { counter, reset, pause, resume, isActive } = useInterval(200, {
  controls: true,
})

// 将计数器重置为0
reset()

// 暂停/恢复计时器
pause()
resume()
```

### 选项

| 选项        | 类型                      | 默认值  | 描述                                                       |
| ----------- | ------------------------- | ------- | ---------------------------------------------------------- |
| `controls`  | `boolean`                 | `false` | 是否暴露 `pause`、`resume`、`reset` 和 `isActive` 控制方法 |
| `immediate` | `boolean`                 | `true`  | 是否立即启动计时器                                         |
| `callback`  | `(count: number) => void` | —       | 每次间隔触发时调用，传入当前计数                           |

### 响应式间隔时间

间隔时间可以是响应式的：

```ts
import { useInterval } from '@vueuse/core'

const intervalMs = ref(1000)
const counter = useInterval(intervalMs)

// 动态改变间隔时间
intervalMs.value = 500
```

### 每次间隔时的回调

```ts
import { useInterval } from '@vueuse/core'

useInterval(1000, {
  callback: (count) => {
    console.log(`Tick ${count}`)
  },
})
```
