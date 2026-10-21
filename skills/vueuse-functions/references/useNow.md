---
category: Animation
---

# useNow

响应式当前 Date 实例。

## 用法

```ts
import { useNow } from '@vueuse/core'

const now = useNow()
```

```ts
import { useNow } from '@vueuse/core'
// ---cut---
const { now, pause, resume } = useNow({ controls: true })
```

## 组件用法

```vue
<template>
  <UseNow v-slot="{ now, pause, resume }">
    当前：{{ now }}
    <button @click="pause()">
      暂停
    </button>
    <button @click="resume()">
      恢复
    </button>
  </UseNow>
</template>
```

## 类型声明

```ts
export interface UseNowOptions<
  Controls extends boolean,
> extends ConfigurableScheduler {
  /**
   * 暴露更多控制
   *
   * @default false
   */
  controls?: Controls
}
export type UseNowReturn<Controls extends boolean> = Controls extends true
  ? {
      now: ShallowRef<Date>
    } & Pausable
  : ShallowRef<Date>
/**
 * 响应式当前 Date 实例。
 *
 * @see https://vueuse.org/useNow
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useNow(options?: UseNowOptions<false>): ShallowRef<Date>
export declare function useNow(options: UseNowOptions<true>): {
  now: ShallowRef<Date>
} & Pausable
```
