---
category: Component
---

# unrefElement

从 Vue ref 或组件实例中获取底层 DOM 元素

## 用法

```vue
<script setup lang="ts">
import { unrefElement } from '@vueuse/core'
import { onMounted, useTemplateRef } from 'vue'

const div = useTemplateRef('div') // 将绑定到 <div> 元素
const hello = useTemplateRef('hello') // 将绑定到 HelloWorld 组件

onMounted(() => {
  console.log(unrefElement(div)) // <div> 元素
  console.log(unrefElement(hello)) // HelloWorld 组件的根元素
})
</script>

<template>
  <div ref="div" />
  <HelloWorld ref="hello" />
</template>
```

## 类型声明

```ts
export type VueInstance = ComponentPublicInstance
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>
export type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> =
  MaybeRefOrGetter<T>
export type MaybeElement =
  HTMLElement | SVGElement | VueInstance | undefined | null
export type MaybeComputedElementRefOrArray<
  T extends MaybeElement = MaybeElement,
> =
  | MaybeComputedElementRef<T>
  | MaybeComputedElementRef<T>[]
  | MaybeRefOrGetter<T[] | null>
export type UnRefElementReturn<T extends MaybeElement = MaybeElement> =
  T extends VueInstance ? Exclude<MaybeElement, VueInstance> : T | undefined
/**
 * 获取元素或 Vue 组件实例的 ref 对应的 DOM 元素
 *
 * @param elRef
 */
export declare function unrefElement<T extends MaybeElement>(
  elRef: MaybeComputedElementRef<T>,
): UnRefElementReturn<T>
```
