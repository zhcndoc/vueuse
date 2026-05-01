---
category: Sensors
---

# useMousePressed

响应式鼠标按下状态。通过目标元素上的 `mousedown` `touchstart` 触发，并在 window 上通过 `mouseup` `mouseleave` `touchend` `touchcancel` 释放。

## 基本用法

```ts
import { useMousePressed } from '@vueuse/core'

const { pressed } = useMousePressed()
```

默认启用触摸。若要仅检测鼠标变化，将 `touch` 设置为 `false`

```ts
import { useMousePressed } from '@vueuse/core'
// ---cut---
const { pressed } = useMousePressed({ touch: false })
```

若只想捕获特定元素上的 `mousedown` 和 `touchstart`，可以通过传入该元素的 ref 来指定 `target`。

```vue
<script setup lang="ts">
import { useMousePressed } from '@vueuse/core'
// ---cut---
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')

const { pressed } = useMousePressed({ target: el })
</script>

<template>
  <div ref="el">
    只有点击这个元素才会触发更新。
  </div>
</template>
```

## 组件用法

```vue
<template>
  <UseMousePressed v-slot="{ pressed }">
    是否按下：{{ pressed }}
  </UseMousePressed>
</template>
```

## 类型声明

```ts
export interface UseMousePressedOptions extends ConfigurableWindow {
  /**
   * 监听 `touchstart` `touchend` 事件
   *
   * @default true
   */
  touch?: boolean
  /**
   * 监听 `dragstart` `drop` 和 `dragend` 事件
   *
   * @default true
   */
  drag?: boolean
  /**
   * 添加事件监听器时将 `capture` 选项设置为 `true`
   *（参见 [MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#capture)）
   *
   * @default false
   */
  capture?: boolean
  /**
   * 初始值
   *
   * @default false
   */
  initialValue?: boolean
  /**
   * 用于捕获点击的元素目标
   */
  target?: MaybeComputedElementRef
  /**
   * 鼠标按下时调用的回调
   *
   * @param event
   */
  onPressed?: (event: MouseEvent | TouchEvent | DragEvent) => void
  /**
   * 鼠标释放时调用的回调
   *
   * @param event
   */
  onReleased?: (event: MouseEvent | TouchEvent | DragEvent) => void
}
/** @deprecated 请改用 {@link UseMousePressedOptions} */
export type MousePressedOptions = UseMousePressedOptions
export interface UseMousePressedReturn {
  pressed: ShallowRef<boolean>
  sourceType: ShallowRef<UseMouseSourceType>
}
/**
 * 响应式鼠标按下状态。
 *
 * @see https://vueuse.org/useMousePressed
 * @param options
 */
export declare function useMousePressed(
  options?: UseMousePressedOptions,
): UseMousePressedReturn
```
