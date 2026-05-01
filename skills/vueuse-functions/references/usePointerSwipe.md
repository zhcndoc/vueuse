---
category: 传感器
---

# usePointerSwipe

基于 [PointerEvents](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent) 的响应式滑动检测。

## 用法

```vue
<script setup lang="ts">
import { usePointerSwipe } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const { isSwiping, direction } = usePointerSwipe(el)
</script>

<template>
  <div ref="el">
    在这里滑动
  </div>
</template>
```

## 类型声明

```ts
export interface UsePointerSwipeOptions {
  /**
   * @default 50
   */
  threshold?: number
  /**
   * 滑动开始时的回调。
   */
  onSwipeStart?: (e: PointerEvent) => void
  /**
   * 滑动过程中的回调。
   */
  onSwipe?: (e: PointerEvent) => void
  /**
   * 滑动结束时的回调。
   */
  onSwipeEnd?: (e: PointerEvent, direction: UseSwipeDirection) => void
  /**
   * 要监听的指针类型。
   *
   * @default ['mouse', 'touch', 'pen']
   */
  pointerTypes?: PointerType[]
  /**
   * 在滑动时禁用文本选择。
   *
   * @default false
   */
  disableTextSelect?: boolean
}
export interface UsePointerSwipeReturn {
  readonly isSwiping: ShallowRef<boolean>
  direction: Readonly<ShallowRef<UseSwipeDirection>>
  readonly posStart: DeepReadonly<Position>
  readonly posEnd: DeepReadonly<Position>
  distanceX: Readonly<ComputedRef<number>>
  distanceY: Readonly<ComputedRef<number>>
  stop: () => void
}
/**
 * 基于 PointerEvents 的响应式滑动检测。
 *
 * @see https://vueuse.org/usePointerSwipe
 * @param target
 * @param options
 */
export declare function usePointerSwipe(
  target: MaybeRefOrGetter<HTMLElement | null | undefined>,
  options?: UsePointerSwipeOptions,
): UsePointerSwipeReturn
```
