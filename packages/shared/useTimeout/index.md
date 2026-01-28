---
category: 动画
---

# useTimeout

响应式值，在指定时间后变为 `true`。

## 使用方法

```ts
import { useTimeout } from '@vueuse/core'

const ready = useTimeout(1000)
```

1 秒后，`ready.value` 变为 `true`。

### 带控制功能

```ts
import { useTimeout } from '@vueuse/core'

const { ready, start, stop, isPending } = useTimeout(1000, { controls: true })

// 检查超时是否处于等待状态
console.log(isPending.value) // true

// 停止超时
stop()

// 启动/重启超时
start()
```

### 选项

| 选项        | 类型         | 默认值  | 描述                                         |
| ----------- | ------------ | ------- | -------------------------------------------- |
| `controls`  | `boolean`    | `false` | 暴露 `start`、`stop` 和 `isPending` 控制方法 |
| `immediate` | `boolean`    | `true`  | 是否立即开始超时                             |
| `callback`  | `() => void` | —       | 超时完成时调用的回调函数                     |

### 超时回调

```ts
import { useTimeout } from '@vueuse/core'

useTimeout(1000, {
  callback: () => {
    console.log('超时完成！')
  },
})
```

### 响应式时长

超时时长可以是响应式的：

```ts
import { useTimeout } from '@vueuse/core'

const duration = ref(1000)
const ready = useTimeout(duration)

// 修改时长（仅对使用控制功能时的未来超时生效）
duration.value = 2000
```
