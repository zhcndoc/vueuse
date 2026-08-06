---
category: 元素
---

# useElementOverflow

响应式元素的溢出状态。

## 用法

```vue
<script setup>
import { useElementOverflow } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const { isXOverflowed } = useElementOverflow(el)
</script>

<template>
  <div ref="el" style="width: 100px;overflow: hidden;">
    <button v-if="isXOverflowed">
      显示更多
    </button>
    <span v-else>有些文字可能太长，无法在此处显示</span>
  </div>
</template>
```

## 组件用法

```vue
<script setup lang="ts">
import { UseElementOverflow } from '@vueuse/components'
</script>

<template>
  <UseElementOverflow v-slot="{ isXOverflowed }" style="width: 100px;overflow: hidden;">
    <button v-if="isXOverflowed">
      显示更多
    </button>
    <span v-else>某些文字可能太长，无法在此处完整显示</span>
  </UseElementOverflow>
</template>
```

## 指令用法

```vue
<script>
import type { UseElementOverflowReturn } from '@vueuse/core'
import { vElementOverflow } from '@vueuse/components'
import { ref } from 'vue'

export default {
  setup() {
    const isXOverflowed = ref(false)
    function onXOverflowChanged(info: UseElementOverflowReturn) {
      isXOverflowed.value = info.isXOverflowed
    }
    return {
      isXOverflowed,
      onXOverflowChanged,
    }
  },
}
</script>

<template>
  <div v-element-overflow="onXOverflowChanged" style="width: 100px;overflow: hidden;">
    <button v-if="isXOverflowed">
      显示更多
    </button>
    <span v-else>这里显示的文本可能太长</span>
  </div>
</template>
```

## 类型声明

```ts
export interface UseElementOverflowOptions extends ConfigurableWindow {
  /**
   * 使用 MutationObserver 观察目标及其子元素。
   *
   * @default false
   */
  observeMutation?: boolean | MutationObserverInit
  /**
   * 观察器触发时的回调。
   */
  onUpdated?: ResizeObserverCallback | MutationCallback
}
/**
 * 响应 DOM 的溢出状态
 * @see https://vueuse.org/useElementOverflow
 * @param target
 * @param option
 */
export declare function useElementOverflow(
  target: MaybeComputedElementRef,
  option?: UseElementOverflowOptions,
): {
  isXOverflowed: Readonly<ShallowRef<boolean, boolean>>
  isYOverflowed: Readonly<ShallowRef<boolean, boolean>>
  stop: typeof stop
  update: () => void
}
export type UseElementOverflowReturn = ReturnType<typeof useElementOverflow>
```
