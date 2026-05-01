---
category: Browser
---

# useMemory

响应式内存信息。

## 用法

```ts
import { useMemory } from '@vueuse/core'

const { isSupported, memory } = useMemory()
```

## 类型声明

```ts
/**
 * Performance.memory
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory
 */
export interface MemoryInfo {
  /**
   * 当前上下文可用的堆最大大小，单位为字节。
   */
  readonly jsHeapSizeLimit: number
  /**
   * 已分配的堆总大小，单位为字节。
   */
  readonly totalJSHeapSize: number
  /**
   * 当前活动的 JS 堆分段，单位为字节。
   */
  readonly usedJSHeapSize: number
  [Symbol.toStringTag]: "MemoryInfo"
}
export interface UseMemoryOptions extends ConfigurableScheduler {
  /**
   * 立即启动定时器
   *
   * @deprecated 请改用 `scheduler` 选项
   * @default true
   */
  immediate?: boolean
  /**
   * 在调用 `resume` 后立即执行回调
   *
   * @deprecated 请改用 `scheduler` 选项
   * @default false
   */
  immediateCallback?: boolean
  /** @deprecated 请改用 `scheduler` 选项 */
  interval?: number
}
export interface UseMemoryReturn extends Supportable {
  memory: ShallowRef<MemoryInfo | undefined>
}
/**
 * 响应式内存信息。
 *
 * @see https://vueuse.org/useMemory
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useMemory(options?: UseMemoryOptions): UseMemoryReturn
```
