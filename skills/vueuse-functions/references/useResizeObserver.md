---
category: 元素
---

# useResizeObserver

报告元素内容或边框盒尺寸的变化

## 用法

```vue
<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core'
import { ref, useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const text = ref('')

useResizeObserver(el, (entries) => {
  const entry = entries[0]
  const { width, height } = entry.contentRect
  text.value = `width: ${width}, height: ${height}`
})
</script>

<template>
  <div ref="el">
    {{ text }}
  </div>
</template>
```

## 指令用法

```vue
<script setup lang="ts">
import { vResizeObserver } from '@vueuse/components'

const text = ref('')

function onResizeObserver(entries) {
  const [entry] = entries
  const { width, height } = entry.contentRect
  text.value = `width: ${width}, height: ${height}`
}
</script>

<template>
  <div v-resize-observer="onResizeObserver">
    {{ text }}
  </div>
</template>
```

[ResizeObserver MDN](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)

## 类型声明

```ts
/**
 * @deprecated 此接口现在可在 DOM 库中使用。
 * 请改用全局 {@link globalThis.ResizeObserverSize}。
 */
export interface ResizeObserverSize {
  readonly inlineSize: number
  readonly blockSize: number
}
/**
 * @deprecated 此接口现在可在 DOM 库中使用。
 * 请改用全局 {@link globalThis.ResizeObserverEntry}。
 */
export interface ResizeObserverEntry {
  readonly target: Element
  readonly contentRect: DOMRectReadOnly
  readonly borderBoxSize: ReadonlyArray<ResizeObserverSize>
  readonly contentBoxSize: ReadonlyArray<ResizeObserverSize>
  readonly devicePixelContentBoxSize: ReadonlyArray<ResizeObserverSize>
}
/**
 * @deprecated 此接口现在可在 DOM 库中使用。
 * 请改用全局 {@link globalThis.ResizeObserverCallback}。
 */
export type ResizeObserverCallback = (
  entries: ReadonlyArray<ResizeObserverEntry>,
  observer: ResizeObserver,
) => void
export interface UseResizeObserverOptions
  extends ResizeObserverOptions, ConfigurableWindow {}
export interface UseResizeObserverReturn extends Supportable {
  stop: () => void
}
/**
 * 报告元素内容或边框盒尺寸的变化
 *
 * @see https://vueuse.org/useResizeObserver
 * @param target
 * @param callback
 * @param options
 */
export declare function useResizeObserver(
  target:
    | MaybeComputedElementRef
    | MaybeComputedElementRef[]
    | MaybeRefOrGetter<MaybeElement[]>,
  callback: globalThis.ResizeObserverCallback,
  options?: UseResizeObserverOptions,
): UseResizeObserverReturn
```
