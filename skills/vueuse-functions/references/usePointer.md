---
category: Sensors
---

# usePointer

响应式 [指针状态](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)。

## 基本用法

```ts
import { usePointer } from '@vueuse/core'

const { x, y, pressure, pointerType } = usePointer()
```

## 组件用法

默认情况下，组件会在 `window` 上跟踪指针

```vue
<template>
  <UsePointer v-slot="{ x, y }">
    x: {{ x }}
    y: {{ y }}
  </UsePointer>
</template>
```

要跟踪元素内的局部位置，请设置 `target="self"`：

```vue
<template>
  <UsePointer v-slot="{ x, y }" target="self">
    x: {{ x }} y: {{ y }}
  </UsePointer>
</template>
```

## 类型声明

```ts
export interface UsePointerState extends Position {
  pressure: number
  pointerId: number
  tiltX: number
  tiltY: number
  width: number
  height: number
  twist: number
  pointerType: PointerType | null
}
export interface UsePointerOptions extends ConfigurableWindow {
  /**
   * 监听的指针类型。
   *
   * @default ['mouse', 'touch', 'pen']
   */
  pointerTypes?: PointerType[]
  /**
   * 初始值
   */
  initialValue?: MaybeRef<Partial<UsePointerState>>
  /**
   * @default window
   */
  target?: MaybeRef<EventTarget | null | undefined> | Document | Window
}
export interface UsePointerReturn {
  pressure: Ref<number>
  pointerId: Ref<number>
  tiltX: Ref<number>
  tiltY: Ref<number>
  width: Ref<number>
  height: Ref<number>
  twist: Ref<number>
  pointerType: Ref<PointerType | null>
  x: Ref<number>
  y: Ref<number>
  isInside: ShallowRef<boolean>
}
/**
 * 响应式指针状态。
 *
 * @see https://vueuse.org/usePointer
 * @param options
 */
export declare function usePointer(
  options?: UsePointerOptions,
): UsePointerReturn
```
