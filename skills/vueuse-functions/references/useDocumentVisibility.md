---
category: Elements
---

# useDocumentVisibility

响应式地跟踪 [`document.visibilityState`](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState)

## 用法

```vue
<script setup lang="ts">
import { useDocumentVisibility } from '@vueuse/core'

const visibility = useDocumentVisibility()
</script>
```

## 组件用法

```vue
<template>
  <UseDocumentVisibility v-slot="{ visibility }">
    文档可见性：{{ visibility }}
  </UseDocumentVisibility>
</template>
```

## 类型声明

```ts
export interface UseDocumentVisibilityOptions extends ConfigurableDocument {}
export type UseDocumentVisibilityReturn = ShallowRef<DocumentVisibilityState>
/**
 * 响应式地跟踪 `document.visibilityState`。
 *
 * @see https://vueuse.org/useDocumentVisibility
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useDocumentVisibility(
  options?: UseDocumentVisibilityOptions,
): UseDocumentVisibilityReturn
```
