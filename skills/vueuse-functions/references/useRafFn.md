---
category: Animation
---

# useRafFn

在每次 `requestAnimationFrame` 时调用函数。支持暂停和恢复控制。

## 用法

```ts
import { useRafFn } from '@vueuse/core'
import { shallowRef } from 'vue'

const count = shallowRef(0)

const { pause, resume } = useRafFn(() => {
  count.value++
  console.log(count.value)
})
```

## 类型声明

```ts
export interface UseRafFnCallbackArguments {
  /**
   * 此帧与上一帧之间经过的时间。
   */
  delta: number
  /**
   * 自网页创建以来经过的时间。参见 {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp#the_time_origin 时间原点}。
   */
  timestamp: DOMHighResTimeStamp
}
export interface UseRafFnOptions extends ConfigurableWindow {
  /**
   * 在创建时立即启动 requestAnimationFrame 循环
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 函数执行的最大帧率。
   * 设置为 `null` 可禁用限制。
   *
   * @default null
   */
  fpsLimit?: MaybeRefOrGetter<number | null>
  /**
   * requestAnimationFrame 循环执行一次后，将自动停止。
   *
   * @default false
   */
  once?: boolean
}
/**
 * 在每次 `requestAnimationFrame` 时调用函数。支持暂停和恢复控制。
 *
 * @see https://vueuse.org/useRafFn
 * @param fn
 * @param options
 */
export declare function useRafFn(
  fn: (args: UseRafFnCallbackArguments) => void,
  options?: UseRafFnOptions,
): Pausable
```
