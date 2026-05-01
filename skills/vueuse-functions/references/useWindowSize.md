---
category: Elements
---

# useWindowSize

响应式窗口尺寸

## 用法

```vue
<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

<template>
  <div>
    宽度：{{ width }}
    高度：{{ height }}
  </div>
</template>
```

## 组件用法

```vue
<template>
  <UseWindowSize v-slot="{ width, height }">
    宽度：{{ width }}
    高度：{{ height }}
  </UseWindowSize>
</template>
```

## 类型声明

```ts
export interface UseWindowSizeOptions extends ConfigurableWindow {
  initialWidth?: number
  initialHeight?: number
  /**
   * 监听 window 的 `orientationchange` 事件
   *
   * @default true
   */
  listenOrientation?: boolean
  /**
   * 宽度和高度中是否应包含滚动条
   * 仅在 `type` 为 `'inner'` 时生效
   *
   * @default true
   */
  includeScrollbar?: boolean
  /**
   * 使用 `window.innerWidth`、`window.outerWidth` 或 `window.visualViewport`
   * 来自 MDN 的 visualViewport 文档(https://developer.mozilla.org/zh-CN/docs/Web/API/VisualViewport)
   * @default 'inner'
   */
  type?: "inner" | "outer" | "visual"
}
export interface UseWindowSizeReturn {
  width: ShallowRef<number>
  height: ShallowRef<number>
}
/**
 * 响应式窗口尺寸。
 *
 * @see https://vueuse.org/useWindowSize
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useWindowSize(
  options?: UseWindowSizeOptions,
): UseWindowSizeReturn
```
