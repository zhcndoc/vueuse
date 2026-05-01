---
category: Elements
---

# useElementSize

HTML 元素的响应式尺寸。[ResizeObserver MDN](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)

## 用法

```vue
<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const { width, height } = useElementSize(el)
</script>

<template>
  <div ref="el">
    高度：{{ height }}
    宽度：{{ width }}
  </div>
</template>
```

## 组件用法

```vue
<template>
  <UseElementSize v-slot="{ width, height }">
    宽度：{{ width }} 高度：{{ height }}
  </UseElementSize>
</template>
```

## 指令用法

```vue
<script setup lang="ts">
import { vElementSize } from '@vueuse/components'

function onResize({ width, height }: { width: number, height: number }) {
  console.log(width, height)
}
</script>

<template>
  <textarea v-element-size="onResize" />
  <!-- 带选项 -->
  <textarea v-element-size="[onResize, { width: 100, height: 100 }, { box: 'content-box' }]" />
</template>
```

## 类型声明

```ts
export interface ElementSize {
  width: number
  height: number
}
export interface UseElementSizeOptions extends UseResizeObserverOptions {}
export interface UseElementSizeReturn {
  width: ShallowRef<number>
  height: ShallowRef<number>
  stop: () => void
}
/**
 * HTML 元素的响应式尺寸。
 *
 * @see https://vueuse.org/useElementSize
 */
export declare function useElementSize(
  target: MaybeComputedElementRef,
  initialSize?: ElementSize,
  options?: UseElementSizeOptions,
): UseElementSizeReturn
```
