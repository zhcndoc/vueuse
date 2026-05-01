---
category: 传感器
---

# useMouse

响应式鼠标位置

## 基本用法

```ts twoslash
import { useMouse } from '@vueuse/core'

const { x, y, sourceType } = useMouse()
```

默认启用触摸。若只检测鼠标变化，请将 `touch` 设置为 `false`。
使用 `dragover` 事件来在拖拽时跟踪鼠标位置。

```ts twoslash
import { useMouse } from '@vueuse/core'
// ---cut---
const { x, y } = useMouse({ touch: false })
```

## 自定义提取器

也可以提供一个自定义提取函数，以从事件中获取位置。

```ts twoslash
import type { UseMouseEventExtractor } from '@vueuse/core'
import { useMouse, useParentElement } from '@vueuse/core'

const parentEl = useParentElement()

const extractor: UseMouseEventExtractor = event => (
  event instanceof MouseEvent
    ? [event.offsetX, event.offsetY]
    : null
)

const { x, y, sourceType } = useMouse({ target: parentEl, type: extractor })
```

## 组件用法

```vue
<template>
  <UseMouse v-slot="{ x, y }">
    x: {{ x }}
    y: {{ y }}
  </UseMouse>
</template>
```

## 类型声明

```ts
export type UseMouseCoordType = "page" | "client" | "screen" | "movement"
export type UseMouseSourceType = "mouse" | "touch" | null
export type UseMouseEventExtractor = (
  event: MouseEvent | Touch,
) => [x: number, y: number] | null | undefined
export interface UseMouseOptions
  extends ConfigurableWindow, ConfigurableEventFilter {
  /**
   * 基于 page、client、screen 或相对于前一个位置的鼠标位置
   *
   * @default 'page'
   */
  type?: UseMouseCoordType | UseMouseEventExtractor
  /**
   * 监听 `target` 元素上的事件
   *
   * @default 'Window'
   */
  target?: MaybeRefOrGetter<Window | EventTarget | null | undefined>
  /**
   * 监听 `touchmove` 事件
   *
   * @default true
   */
  touch?: boolean
  /**
   * 监听 window 上的 `scroll` 事件，仅在 type 为 `page` 时生效
   *
   * @default true
   */
  scroll?: boolean
  /**
   * 当触发 `touchend` 事件时重置为初始值
   *
   * @default false
   */
  resetOnTouchEnds?: boolean
  /**
   * 初始值
   */
  initialValue?: Position
}
export interface UseMouseReturn {
  x: ShallowRef<number>
  y: ShallowRef<number>
  sourceType: ShallowRef<UseMouseSourceType>
}
/**
 * 响应式鼠标位置。
 *
 * @see https://vueuse.org/useMouse
 * @param options
 */
export declare function useMouse(options?: UseMouseOptions): UseMouseReturn
```
