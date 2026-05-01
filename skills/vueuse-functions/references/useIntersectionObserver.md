---
category: Elements
---

# useIntersectionObserver

检测目标元素可见性的变化。

## 用法

```vue
<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { shallowRef, useTemplateRef } from 'vue'

const target = useTemplateRef('target')
const targetIsVisible = shallowRef(false)

const { stop } = useIntersectionObserver(
  target,
  ([entry], observerElement) => {
    targetIsVisible.value = entry?.isIntersecting || false
  },
)
</script>

<template>
  <div ref="target">
    <h1>Hello world</h1>
  </div>
</template>
```

## 指令用法

```vue
<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'
import { shallowRef, useTemplateRef } from 'vue'

const root = useTemplateRef('root')

const isVisible = shallowRef(false)

function onIntersectionObserver([entry]: IntersectionObserverEntry[]) {
  isVisible.value = entry?.isIntersecting || false
}
</script>

<template>
  <div>
    <p>
      向下滚动！
    </p>
    <div v-intersection-observer="onIntersectionObserver">
      <p>Hello world!</p>
    </div>
  </div>

  <!-- 带选项 -->
  <div ref="root">
    <p>
      向下滚动！
    </p>
    <div v-intersection-observer="[onIntersectionObserver, { root }]">
      <p>Hello world!</p>
    </div>
  </div>
</template>
```

[IntersectionObserver MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

## 类型声明

```ts
export interface UseIntersectionObserverOptions extends ConfigurableWindow {
  /**
   * 创建时立即启动 IntersectionObserver
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 用作测试交叉时边界框的元素或文档。
   */
  root?: MaybeComputedElementRef | Document
  /**
   * 一个字符串，用于指定在计算交叉时添加到根边界框的偏移量集合。
   */
  rootMargin?: MaybeRefOrGetter<string>
  /**
   * 单个数字或介于 0.0 和 1 之间的数字数组。
   * @default 0
   */
  threshold?: number | number[]
}
export interface UseIntersectionObserverReturn extends Supportable, Pausable {
  stop: () => void
}
/**
 * 检测目标元素可见性的变化。
 *
 * @see https://vueuse.org/useIntersectionObserver
 * @param target
 * @param callback
 * @param options
 */
export declare function useIntersectionObserver(
  target:
    | MaybeComputedElementRef
    | MaybeRefOrGetter<MaybeElement[]>
    | MaybeComputedElementRef[],
  callback: IntersectionObserverCallback,
  options?: UseIntersectionObserverOptions,
): UseIntersectionObserverReturn
```
