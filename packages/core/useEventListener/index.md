---
category: Browser
---

# useEventListener

轻松使用 EventListener。在组件挂载时使用 [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) 进行注册，在组件卸载时自动使用 [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) 进行注销。

## 用法

```ts
import { useEventListener } from '@vueuse/core'

useEventListener(document, 'visibilitychange', (evt) => {
  console.log(evt)
})
```

### 默认目标

当省略目标时，默认使用 `window`：

```ts
import { useEventListener } from '@vueuse/core'

// 监听 window 的事件
useEventListener('resize', (evt) => {
  console.log(evt)
})
```

### 响应式目标

你可以将一个 ref 作为事件目标传递给 `useEventListener`，当你改变目标时，`useEventListener` 会注销之前的事件并注册新的事件。

```vue
<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const element = useTemplateRef('element')
useEventListener(element, 'keydown', (e) => {
  console.log(e.key)
})
</script>

<template>
  <div v-if="cond" ref="element">
    Div1
  </div>
  <div v-else ref="element">
    Div2
  </div>
</template>
```

### 多个事件

你可以传入一个事件数组，同时监听多个事件：

```ts
import { useEventListener } from '@vueuse/core'

useEventListener(document, ['mouseenter', 'mouseleave'], (evt) => {
  console.log(evt.type)
})
```

### 多个目标

你也可以传入多个目标的数组：

```ts
import { useEventListener } from '@vueuse/core'

const buttons = document.querySelectorAll('button')
useEventListener(buttons, 'click', (evt) => {
  console.log('Button clicked')
})
```

### 清理

返回一个清理函数，可以手动注销监听器：

```ts
import { useEventListener } from '@vueuse/core'

const cleanup = useEventListener(document, 'keydown', (e) => {
  console.log(e.key)
})

cleanup() // 这将注销监听器。
```

注意，如果你的组件也在 SSR（服务器端渲染）中运行，你可能会遇到错误（如 `document is not defined`），因为类似 `document` 和 `window` 的 DOM API 在 Node.js 中不可用。为了避免这种情况，你可以将逻辑放在 `onMounted` 钩子内部。

```ts
import { useEventListener } from '@vueuse/core'
// ---cut---
// onMounted 只会在客户端调用
// 因此可以保证 DOM API 可用。
onMounted(() => {
  useEventListener(document, 'keydown', (e) => {
    console.log(e.key)
  })
})
```
