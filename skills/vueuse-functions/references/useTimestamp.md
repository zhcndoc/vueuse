---
category: Animation
---

# useTimestamp

响应式当前时间戳

## 用法

```ts
import { useTimestamp } from '@vueuse/core'

const timestamp = useTimestamp({ offset: 0 })
```

```ts
import { useTimestamp } from '@vueuse/core'
// ---cut---
const { timestamp, pause, resume } = useTimestamp({ controls: true })
```

## 组件用法

```vue
<template>
  <UseTimestamp v-slot="{ timestamp, pause, resume }">
    当前时间：{{ timestamp }}
    <button @click="pause()">
      暂停
    </button>
    <button @click="resume()">
      恢复
    </button>
  </UseTimestamp>
</template>
```

## 类型声明

```ts
export interface UseTimestampOptions<
  Controls extends boolean,
> extends ConfigurableScheduler {
  /**
   * 暴露更多控制项
   *
   * @default false
   */
  controls?: Controls
  /**
   * 添加到值上的偏移量
   *
   * @default 0
   */
  offset?: number
  /**
   * 立即更新时间戳
   *
   * @deprecated 请改用 `scheduler` 选项
   * @default true
   */
  immediate?: boolean
  /**
   * 更新间隔，或使用 requestAnimationFrame
   *
   * @deprecated 请改用 `scheduler` 选项
   * @default requestAnimationFrame
   */
  interval?: "requestAnimationFrame" | number
  /**
   * 每次更新时的回调
   */
  callback?: (timestamp: number) => void
}
export type UseTimestampReturn<Controls extends boolean> = Controls extends true
  ? {
      timestamp: ShallowRef<number>
    } & Pausable
  : ShallowRef<number>
/**
 * 响应式当前时间戳。
 *
 * @see https://vueuse.org/useTimestamp
 * @param options
 */
export declare function useTimestamp(
  options?: UseTimestampOptions<false>,
): ShallowRef<number>
export declare function useTimestamp(options: UseTimestampOptions<true>): {
  timestamp: ShallowRef<number>
} & Pausable
```
