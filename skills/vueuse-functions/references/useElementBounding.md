---
category: Elements
---

# useElementBounding

HTML 元素的响应式 [边界框](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

## 用法

```vue
<script setup lang="ts">
import { useElementBounding } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const { x, y, top, right, bottom, left, width, height } = useElementBounding(el)
</script>

<template>
  <div ref="el" />
</template>
```

## 组件用法

```vue
<template>
  <UseElementBounding v-slot="{ width, height }">
    宽度：{{ width }} 高度：{{ height }}
  </UseElementBounding>
</template>
```

## 指令用法

```vue
<script setup lang="ts">
import { vElementBounding } from '@vueuse/components'

interface BoundingType {
  height: number
  bottom: number
  left: number
  right: number
  top: number
  width: number
  x: number
  y: number
}

function onBounding({ height, bottom, left, right, top, width, x, y }: BoundingType) {
  console.log(height, bottom, left, right, top, width, x, y)
}

const options = {
  reset: true,
  windowResize: true,
  windowScroll: true,
  immediate: true,
  updateTiming: 'sync',
}
</script>

<template>
  <textarea v-element-bounding="onBounding" />
  <!-- 使用选项 -->
  <textarea v-element-bounding="[onBounding, options]" />
</template>
```

## 类型声明

```ts
export interface UseElementBoundingOptions {
  /**
   * 组件卸载时将值重置为 0
   *
   * @default true
   */
  reset?: boolean
  /**
   * 监听 window resize 事件
   *
   * @default true
   */
  windowResize?: boolean
  /**
   * 监听 window scroll 事件
   *
   * @default true
   */
  windowScroll?: boolean
  /**
   * 在组件挂载后立即调用 update
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 重新计算边界框的时机
   *
   * 将其设置为 `next-frame` 在与 {@link useBreakpoints} 之类的内容一起使用时可能很有用，
   * 因此当前 tick 上不会更新布局（这会影响被观察元素的边界框）。
   *
   * @default 'sync'
   */
  updateTiming?: "sync" | "next-frame"
}
export interface UseElementBoundingReturn {
  height: ShallowRef<number>
  bottom: ShallowRef<number>
  left: ShallowRef<number>
  right: ShallowRef<number>
  top: ShallowRef<number>
  width: ShallowRef<number>
  x: ShallowRef<number>
  y: ShallowRef<number>
  update: () => void
}
/**
 * HTML 元素的响应式边界框。
 *
 * @see https://vueuse.org/useElementBounding
 * @param target
 */
export declare function useElementBounding(
  target: MaybeComputedElementRef,
  options?: UseElementBoundingOptions,
): UseElementBoundingReturn
```
