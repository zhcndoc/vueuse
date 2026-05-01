---
category: Elements
---

# useElementVisibility

跟踪元素在视口内的可见性。

## 用法

```vue
<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const target = useTemplateRef('target')
const targetIsVisible = useElementVisibility(target)

const target2 = useTemplateRef('target2')
const targetVisibilityController = useElementVisibility(target2, { controls: true })
</script>

<template>
  <div ref="target">
    <h1>Hello world</h1>
  </div>

  <div ref="target2">
    <h1>Hi there</h1>
  </div>
</template>
```

### rootMargin

如果你希望在元素完全可见之前更早触发回调，可以使用 `rootMargin` 选项（参见 [MDN IntersectionObserver/rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin)）。

```ts
import { useElementVisibility } from '@vueuse/core'
// ---cut---
const targetIsVisible = useElementVisibility(target, {
  rootMargin: '0px 0px 100px 0px',
})
```

### threshold

如果你想控制更新该值所需的可见比例，可以使用 `threshold` 选项（参见 [MDN IntersectionObserver/threshold](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#threshold)）。

```ts
const targetIsVisible = useElementVisibility(target, {
  threshold: 1.0, // 100% 可见
})
```

## 组件用法

```vue
<template>
  <UseElementVisibility v-slot="{ isVisible }">
    是否可见：{{ isVisible }}
  </UseElementVisibility>
</template>
```

## 指令用法

```vue
<script setup lang="ts">
import { vElementVisibility } from '@vueuse/components'
import { shallowRef, useTemplateRef } from 'vue'

const target = useTemplateRef('target')
const isVisible = shallowRef(false)

function onElementVisibility(state) {
  isVisible.value = state
}

const target2 = useTemplateRef('target2')
const isVisible2 = shallowRef(false)

function onElementVisibilityWithControls(state) {
  isVisible2.value = state.isVisible.value
  if (state.isVisible.value) {
    state.stop()
  }
}
</script>

<template>
  <div v-element-visibility="onElementVisibility">
    {{ isVisible ? '内部' : '外部' }}
  </div>

  <!-- 带选项 -->
  <div ref="target">
    <div v-element-visibility="[onElementVisibility, { scrollTarget: target }]">
      {{ isVisible ? '内部' : '外部' }}
    </div>
  </div>

  <!-- 带控制 -->
  <div ref="target2">
    <div v-element-visibility="[onElementVisibilityWithControls, { controls: true }]">
      {{ isVisible2 ? '内部' : '外部' }}
    </div>
  </div>
</template>
```

## 类型声明

```ts
export interface UseElementVisibilityOptions<Controls extends boolean = false>
  extends
    ConfigurableWindow,
    Pick<UseIntersectionObserverOptions, "rootMargin" | "threshold"> {
  /**
   * 初始值。
   *
   * @default false
   */
  initialValue?: boolean
  /**
   * 用作视口以检查目标可见性的元素。
   */
  scrollTarget?: UseIntersectionObserverOptions["root"]
  /**
   * 当元素可见性第一次发生变化时停止跟踪
   *
   * @default false
   */
  once?: boolean
  /**
   * 暴露更多控制项
   *
   * @default false
   */
  controls?: Controls
}
export type UseElementVisibilityReturn<Controls extends boolean = false> =
  Controls extends true
    ? UseElementVisibilityReturnWithControls
    : ShallowRef<boolean>
export interface UseElementVisibilityReturnWithControls extends UseIntersectionObserverReturn {
  isVisible: ShallowRef<boolean>
}
/**
 * 跟踪元素在视口内的可见性。
 *
 * @see https://vueuse.org/useElementVisibility
 */
export declare function useElementVisibility(
  element: MaybeComputedElementRef,
  options?: UseElementVisibilityOptions<false>,
): UseElementVisibilityReturn<false>
export declare function useElementVisibility(
  element: MaybeComputedElementRef,
  options?: UseElementVisibilityOptions<true>,
): UseElementVisibilityReturn<true>
```
