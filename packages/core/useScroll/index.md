---
category: Sensors
---

# useScroll

响应式的滚动位置和状态。

## 用法

```vue
<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef<HTMLElement>('el')
const { x, y, isScrolling, arrivedState, directions } = useScroll(el)
</script>

<template>
  <div ref="el" />
</template>
```

### 带偏移量

```js
const { x, y, isScrolling, arrivedState, directions } = useScroll(el, {
  offset: { top: 30, bottom: 30, right: 30, left: 30 },
})
```

### 设置滚动位置

设置 `x` 和 `y` 的值以使元素滚动到该位置。

```vue
<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef<HTMLElement>('el')
const { x, y } = useScroll(el)
</script>

<template>
  <div ref="el" />
  <button @click="x += 10">
    向右滚动 10px
  </button>
  <button @click="y += 10">
    向下滚动 10px
  </button>
</template>
```

### 平滑滚动

设置 `behavior: smooth` 以启用平滑滚动。`behavior` 选项默认为 `auto`，表示没有平滑滚动。有关更多信息，请参阅 [`window.scrollTo()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo) 上的 `behavior` 选项。

```ts
import { useScroll } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef<HTMLElement>('el')
const { x, y } = useScroll(el, { behavior: 'smooth' })

// 或作为 `ref`：
const smooth = ref(false)
const behavior = computed(() => smooth.value ? 'smooth' : 'auto')
const { x, y } = useScroll(el, { behavior })
```

### Recalculate scroll state

You can call the `measure()` method to manually update the scroll position and `arrivedState` at any time.

This is useful, for example, after dynamic content changes or when you want to recalculate the scroll state outside of scroll events.

```ts
import { useScroll } from '@vueuse/core'
import { nextTick, onMounted, useTemplateRef, watch } from 'vue'

const el = useTemplateRef<HTMLElement>('el')
const reactiveValue = shallowRef(false)

const { measure } = useScroll(el)

// In a watcher
watch(reactiveValue, () => {
  measure()
})

// Or inside any function
function updateScrollState() {
  // ...some logic
  nextTick(() => {
    measure()
  })
}
```

> [!NOTE]
> it's recommended to call `measure()` inside `nextTick()`, to ensure the DOM is updated first.
> The scroll state is initialized automatically `onMount`.
> You only need to call `measure()` manually if you want to recalculate the state after some dynamic changes.

### 重新计算滚动状态

您可以随时调用 `measure()` 方法手动更新滚动位置和 `arrivedState`。

例如，这在动态内容更改后或在您想要在滚动事件之外重新计算滚动状态时非常有用。

```ts
import { useScroll } from '@vueuse/core'
import { nextTick, onMounted, useTemplateRef, watch } from 'vue'

const el = useTemplateRef<HTMLElement>('el')
const reactiveValue = shallowRef(false)

const { measure } = useScroll(el)

// In a watcher
watch(reactiveValue, () => {
  measure()
})

// Or inside any function
function updateScrollState() {
  // ...some logic
  nextTick(() => {
    measure()
  })
}
```

> [!NOTE]
> 推荐在 `nextTick()` 中调用 `measure()`，以确保 DOM 首先更新。
> 滚动状态在 `onMount` 时自动初始化。
> 只有在您希望在某些动态变化后重新计算状态时，才需要手动调用 `measure()`。

## 指令用法

```vue
<script setup lang="ts">
import type { UseScrollReturn } from '@vueuse/core'
import { vScroll } from '@vueuse/components'

const data = ref([1, 2, 3, 4, 5, 6])

function onScroll(state: UseScrollReturn) {
  console.log(state) // {x, y, isScrolling, arrivedState, directions}
}
</script>

<template>
  <div v-scroll="onScroll">
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>

  <!-- 带选项 -->
  <div v-scroll="[onScroll, { throttle: 10 }]">
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>
</template>
```
