---
category: 元素
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

如果你想在元素完全可见之前更早地触发回调，可以使用 `rootMargin` 选项（参见 [MDN IntersectionObserver/rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin)）。

```ts
import { useElementVisibility } from '@vueuse/core'
// ---cut---
const targetIsVisible = useElementVisibility(target, {
  rootMargin: '0px 0px 100px 0px',
})
```

### threshold

如果您想控制更新值所需的可见性百分比，可以使用 `threshold` 选项（请参见 [MDN IntersectionObserver/threshold](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#threshold)）。

```ts
const targetIsVisible = useElementVisibility(target, {
  threshold: 1.0, // 100% 可见
})
```

### controls

默认情况下，`useElementVisibility` 返回一个 `ShallowRef<boolean>`。设置 `controls: true` 可同时获取可见性 ref 以及底层 `useIntersectionObserver` 的控制项：

```ts
import { useElementVisibility } from '@vueuse/core'
// ---cut---
const { isVisible, isActive, pause, resume, stop, isSupported } = useElementVisibility(target, {
  controls: true,
})
```

| 状态          | 类型                    | 描述                                                                                                                     |
| ------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `isVisible`   | `ShallowRef<boolean>`   | 目标当前是否在视口中可见。                                                                                               |
| `isActive`    | `ShallowRef<boolean>`   | 观察器当前是否正在运行。例如，在 `once: true` 触发后观察器停止时，该值会变为 `false`。                                    |
| `isSupported` | `ComputedRef<boolean>`  | 是否支持 `IntersectionObserver` API。                                                                                    |
| `pause`       | `() => void`            | 暂停观察，并将 `isActive` 设置为 `false`。                                                                               |
| `resume`      | `() => void`            | 恢复观察。                                                                                                               |
| `stop`        | `() => void`            | 永久停止观察。                                                                                                           |

设置 `once: true` 后，可以读取 `isActive`，以判断元素首次变为可见后跟踪是否已经停止：

```ts
import { useElementVisibility } from '@vueuse/core'
// ---cut---
const { isVisible, isActive } = useElementVisibility(target, {
  controls: true,
  once: true,
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
    {{ isVisible ? '在内部' : '在外部' }}
  </div>

  <!-- 使用选项 -->
  <div ref="target">
    <div v-element-visibility="[onElementVisibility, { scrollTarget: target }]">
      {{ isVisible ? '在内部' : '在外部' }}
    </div>
  </div>

  <!-- 带控制 -->
  <div ref="target2">
    <div v-element-visibility="[onElementVisibilityWithControls, { controls: true }]">
      {{ isVisible2 ? '在内部' : '在外部' }}
    </div>
  </div>
</template>
```
