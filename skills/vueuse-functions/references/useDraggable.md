---
category: 元素
---

# useDraggable

使元素可拖拽。

## 用法

```vue
<script setup lang="ts">
import { useDraggable } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')

// `style` 将是一个辅助计算属性，用于 `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>

<template>
  <div ref="el" :style="style" style="position: fixed">
    拖我！我现在在 {{ x }}, {{ y }}
  </div>
</template>
```

### 返回值

| 属性         | 类型                   | 描述                                 |
| ------------ | ---------------------- | --------------------------------------- |
| `x`          | `Ref<number>`          | 当前 x 位置                            |
| `y`          | `Ref<number>`          | 当前 y 位置                            |
| `position`   | `Ref<{x, y}>`          | 当前位置信息对象                       |
| `isDragging` | `ComputedRef<boolean>` | 当前是否正在拖拽                       |
| `style`      | `ComputedRef<string>`  | CSS 样式字符串 `left: ?px; top: ?px;` |

### 选项

```ts
useDraggable(el, {
  // 初始位置（默认：{ x: 0, y: 0 }）
  initialValue: { x: 40, y: 40 },
  // 将拖拽限制在特定轴上：'x'、'y' 或 'both'（默认）
  axis: 'both',
  // 仅在直接点击元素时触发（默认：false）
  exact: false,
  // 阻止浏览器默认行为（默认：false）
  preventDefault: true,
  // 阻止事件冒泡（默认：false）
  stopPropagation: false,
  // 为事件使用捕获阶段（默认：true）
  capture: true,
  // 禁用拖拽（默认：false）
  disabled: false,
  // 触发拖拽的鼠标按键（默认：[0] - 左键）
  buttons: [0],
  // 监听的指针类型（默认：['mouse', 'touch', 'pen']）
  pointerTypes: ['mouse', 'touch', 'pen'],
  // 自定义拖拽手柄元素（默认：目标元素）
  handle: handleRef,
  // 用于边界限制的容器元素（默认：无）
  containerElement: containerRef,
  // 绑定 pointermove/pointerup 事件的元素（默认：window）
  draggingElement: window,
  // 回调
  onStart: (position, event) => {
    // 返回 false 以阻止拖拽
  },
  onMove: (position, event) => {},
  onEnd: (position, event) => {},
})
```

### 阻止默认行为

设置 `preventDefault: true` 以覆盖浏览器中某些元素（例如图片）的默认拖放行为。

```ts
import { useDraggable } from '@vueuse/core'

const { x, y, style } = useDraggable(el, {
  preventDefault: true,
})
```

### 容器边界

使用 `containerElement` 将拖拽限制在容器内。

```ts
import { useDraggable } from '@vueuse/core'

const { x, y } = useDraggable(el, {
  containerElement: containerRef,
})
```

设置 `autoScroll: true` 可在拖拽靠近边缘时启用自动滚动。

```ts
const { x, y, style } = useDraggable(el, {
  autoScroll: {
    speed: 2, // 控制自动滚动速度。
    margin: 30, // 设置触发自动滚动的边缘距离。
    direction: 'both' // 确定自动滚动方向。
  },
})
```

## 组件用法

```vue
<template>
  <UseDraggable v-slot="{ x, y }" :initial-value="{ x: 10, y: 10 }">
    拖我！我现在在 {{ x }}, {{ y }}
  </UseDraggable>
</template>
```

在组件用法中，可以向组件传递额外的 `storageKey` 和 `storageType` 属性，以启用元素位置的持久化。

```vue
<template>
  <UseDraggable storage-key="vueuse-draggable" storage-type="session">
    刷新页面后，我仍然在相同的位置！
  </UseDraggable>
</template>
```

## 类型声明

```ts
export interface UseDraggableOptions {
  /**
   * 仅在直接点击元素时开始拖拽
   *
   * @default false
   */
  exact?: MaybeRefOrGetter<boolean>
  /**
   * 阻止事件默认行为
   *
   * @default false
   */
  preventDefault?: MaybeRefOrGetter<boolean>
  /**
   * 阻止事件传播
   *
   * @default false
   */
  stopPropagation?: MaybeRefOrGetter<boolean>
  /**
   * 是否在捕获阶段分发事件
   *
   * @default true
   */
  capture?: boolean
  /**
   * 用于绑定 `pointermove` 和 `pointerup` 事件的元素。
   *
   * @default window
   */
  draggingElement?: MaybeRefOrGetter<
    HTMLElement | SVGElement | Window | Document | null | undefined
  >
  /**
   * 用于计算边界的元素（如果未设置，则使用事件目标）。
   *
   * @default undefined
   */
  containerElement?: MaybeRefOrGetter<
    HTMLElement | SVGElement | null | undefined
  >
  /**
   * 触发拖拽事件的手柄
   *
   * @default target
   */
  handle?: MaybeRefOrGetter<HTMLElement | SVGElement | null | undefined>
  /**
   * 要监听的指针类型。
   *
   * @default ['mouse', 'touch', 'pen']
   */
  pointerTypes?: PointerType[]
  /**
   * 元素的初始位置。
   *
   * @default { x: 0, y: 0 }
   */
  initialValue?: MaybeRefOrGetter<Position>
  /**
   * 拖拽开始时的回调。返回 `false` 以阻止拖拽。
   */
  onStart?: (position: Position, event: PointerEvent) => void | false
  /**
   * 拖拽过程中回调。
   */
  onMove?: (position: Position, event: PointerEvent) => void
  /**
   * 拖拽结束时回调。
   */
  onEnd?: (position: Position, event: PointerEvent) => void
  /**
   * 拖拽轴向。
   *
   * @default 'both'
   */
  axis?: "x" | "y" | "both"
  /**
   * 禁用拖放。
   *
   * @default false
   */
  disabled?: MaybeRefOrGetter<boolean>
  /**
   * 允许触发拖拽事件的鼠标按键。
   *
   * - `0`：主按键，通常是左键或未初始化状态
   * - `1`：辅助按键，通常是滚轮按钮或中键（如果有）
   * - `2`：次按键，通常是右键
   * - `3`：第四按键，通常是浏览器后退按钮
   * - `4`：第五按键，通常是浏览器前进按钮
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button#value
   * @default [0]
   */
  buttons?: MaybeRefOrGetter<number[]>
  /**
   * 是否将拖拽限制在容器的可见区域内。
   *
   * 启用后，可拖拽元素不会离开其容器的可见区域，
   * 确保在拖拽过程中始终保持在容器的视口内。
   *
   * @default false
   */
  restrictInView?: MaybeRefOrGetter<boolean>
  /**
   * 是否在拖拽靠近边缘时启用自动滚动。
   *
   * @default false
   */
  autoScroll?: MaybeRefOrGetter<
    | boolean
    | {
        /**
         * 自动滚动速度。
         *
         * @default 2
         */
        speed?: MaybeRefOrGetter<number | Position>
        /**
         * 触发自动滚动的边缘距离。
         *
         * @default 30
         */
        margin?: MaybeRefOrGetter<number | Position>
        /**
         * 自动滚动方向。
         *
         * @default 'both'
         */
        direction?: "x" | "y" | "both"
      }
  >
}
export interface UseDraggableReturn {
  x: Ref<number>
  y: Ref<number>
  position: Ref<Position>
  isDragging: ComputedRef<boolean>
  style: ComputedRef<string>
}
/**
 * 使元素可拖拽。
 *
 * @see https://vueuse.org/useDraggable
 * @param target
 * @param options
 */
export declare function useDraggable(
  target: MaybeRefOrGetter<HTMLElement | SVGElement | null | undefined>,
  options?: UseDraggableOptions,
): UseDraggableReturn
```
