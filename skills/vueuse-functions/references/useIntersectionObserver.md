---
category: 元素
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
    <h1>你好，世界</h1>
  </div>
</template>
```

## 控制与清理

`useIntersectionObserver` 会返回底层 observer 的控制项：

| 状态           | 类型                   | 说明                                                      |
| -------------- | ---------------------- | --------------------------------------------------------- |
| `isSupported` | `ComputedRef<boolean>` | 浏览器是否支持 `IntersectionObserver` API。              |
| `isActive`    | `ShallowRef<boolean>`  | observer 当前是否运行；调用 `pause()` 或 `stop()` 后为 `false`。 |
| `pause`       | `() => void`           | 暂停观察，并将 `isActive` 设为 `false`。                 |
| `resume`      | `() => void`           | 恢复观察。                                                |
| `stop`        | `() => void`           | 永久停止观察。                                            |

创建它的组件或 effect scope 销毁时，会通过 [`tryOnScopeDispose`](https://vueuse.org/shared/tryOnScopeDispose/) 自动断开 observer，因此大多数情况下无需自行调用 `stop`。如果需要提前断开，例如元素变为可见后，可以调用 `stop()`：

```ts
import { useIntersectionObserver } from '@vueuse/core'
// ---cut---
const { stop } = useIntersectionObserver(
  target,
  ([entry]) => {
    if (entry?.isIntersecting) {
      // react to the element becoming visible once, then stop observing
      stop()
    }
  },
)
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
      <p>你好，世界！</p>
    </div>
  </div>

  <!-- 带选项 -->
  <div ref="root">
    <p>
      向下滚动！
    </p>
    <div v-intersection-observer="[onIntersectionObserver, { root }]">
      <p>你好，世界！</p>
    </div>
  </div>
</template>
```

[IntersectionObserver MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)。

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
  target: MaybeComputedElementRefOrArray,
  callback: IntersectionObserverCallback,
  options?: UseIntersectionObserverOptions,
): UseIntersectionObserverReturn
```
