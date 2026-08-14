---
category: 元素
---

# useIntersectionObserver

检测目标元素可见性的变化。

## 使用方法

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

### 控制与清理

`useIntersectionObserver` 返回用于控制底层观察器的控制项：

| 状态          | 类型                   | 描述                                                                                |
| ------------- | ---------------------- | ----------------------------------------------------------------------------------- |
| `isSupported` | `ComputedRef<boolean>` | `IntersectionObserver` API 是否可用                                                 |
| `isActive`    | `ShallowRef<boolean>`  | 观察器当前是否正在运行。在调用 `pause()` 或 `stop()` 后变为 `false`                  |
| `pause`       | `() => void`           | 暂停观察并将 `isActive` 设置为 `false`                                              |
| `resume`      | `() => void`           | 恢复观察                                                                              |
| `stop`        | `() => void`           | 永久停止观察                                                                          |

当创建它的组件或 effect scope 被销毁时，观察器会通过 [`tryOnScopeDispose`](https://vueuse.org/shared/tryOnScopeDispose/) 自动断开，因此在大多数情况下你不需要自行调用 `stop`。调用 `stop()` 可以更早地断开观察器，例如元素变为可见后：

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
      <p>Hello world!</p>
    </div>
  </div>

  <!-- 使用选项 -->
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

[IntersectionObserver MDN 文档](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)。
