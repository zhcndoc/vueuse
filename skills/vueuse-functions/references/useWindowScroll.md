---
category: Elements
---

# useWindowScroll

响应式窗口滚动

## 使用

```vue
<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { x, y } = useWindowScroll()
</script>

<template>
  <div>
    读取当前 x、y 滚动位置：{{ x }}，{{ y }}
  </div>
  <button @click="x = 100">
    将 X 滚动到 100
  </button>
  <button @click="y = 100">
    将 Y 滚动到 100
  </button>
</template>
```

## 类型声明

```ts
export interface UseWindowScrollOptions
  extends ConfigurableWindow, UseScrollOptions {}
export interface UseWindowScrollReturn extends UseScrollReturn {}
/**
 * 响应式窗口滚动。
 *
 * @see https://vueuse.org/useWindowScroll
 * @param options
 */
export declare function useWindowScroll(
  options?: UseWindowScrollOptions,
): UseWindowScrollReturn
```
