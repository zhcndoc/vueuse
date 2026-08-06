---
category: 动画
---

# useInterval

每隔一段时间增加的响应式计数器。

## 用法

```ts
import { useInterval } from '@vueuse/core'

// 计数器每 200 毫秒增加一次
const counter = useInterval(200)
```

### 使用控制功能

```ts
import { useInterval } from '@vueuse/core'

const { counter, reset, pause, resume, isActive } = useInterval(200, {
  controls: true,
})

// 将计数器重置为 0
reset()

// 暂停/恢复间隔
pause()
resume()
```

### 选项

| 选项        | 类型                      | 默认值  | 描述                                                     |
| ----------- | ------------------------- | ------- | -------------------------------------------------------- |
| `controls`  | `boolean`                 | `false` | 暴露 `pause`、`resume`、`reset` 和 `isActive` 控制项 |
| `immediate` | `boolean`                 | `true`  | 立即启动间隔                                             |
| `callback`  | `(count: number) => void` | —       | 每次间隔触发时使用当前计数调用                           |

### 响应式间隔

间隔可以是响应式的：

```ts
import { useInterval } from '@vueuse/core'

const intervalMs = ref(1000)
const counter = useInterval(intervalMs)

// 动态更改间隔
intervalMs.value = 500
```

### 每次间隔触发回调

```ts
import { useInterval } from '@vueuse/core'

useInterval(1000, {
  callback: (count) => {
    console.log(`Tick ${count}`)
  },
})
```

## 类型声明

```ts
export interface UseIntervalOptions<Controls extends boolean> {
  /**
   * 暴露更多控制项
   *
   * @default false
   */
  controls?: Controls
  /**
   * 调用时立即执行更新
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 每个时间间隔执行的回调
   */
  callback?: (count: number) => void
}
export interface UseIntervalControls {
  counter: ShallowRef<number>
  reset: () => void
}
export type UseIntervalReturn =
  Readonly<ShallowRef<number>> | Readonly<UseIntervalControls & Pausable>
/**
 * 每个时间间隔增加的响应式计数器
 *
 * @see https://vueuse.org/useInterval
 * @param interval
 * @param options
 */
export declare function useInterval(
  interval?: MaybeRefOrGetter<number>,
  options?: UseIntervalOptions<false>,
): Readonly<ShallowRef<number>>
export declare function useInterval(
  interval: MaybeRefOrGetter<number>,
  options: UseIntervalOptions<true>,
): Readonly<UseIntervalControls & Pausable>
```
