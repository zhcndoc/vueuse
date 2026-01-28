---
category: 元素
---

# useActiveElement

响应式的 `document.activeElement`。返回一个浅层的 ref，当焦点改变时更新。

## 用法

```vue
<script setup lang="ts">
import { useActiveElement } from '@vueuse/core'
import { watch } from 'vue'

const activeElement = useActiveElement()

watch(activeElement, (el) => {
  console.log('当前活动元素是', el)
})
</script>
```

### Shadow DOM 支持

默认情况下，`useActiveElement` 会遍历进入 shadow DOM 来查找深层活动元素。设置 `deep: false` 可禁用此行为。

```ts
import { useActiveElement } from '@vueuse/core'

// 只获取 shadow host，而不是 shadow DOM 内部的元素
const activeElement = useActiveElement({ deep: false })
```

### 跟踪元素移除

设置 `triggerOnRemoval: true`，则当当前活动元素从 DOM 中移除时也会更新活动元素。这是通过底层的 `MutationObserver` 实现的。

```ts
import { useActiveElement } from '@vueuse/core'

const activeElement = useActiveElement({ triggerOnRemoval: true })
```

## 组件用法

```vue
<template>
  <UseActiveElement v-slot="{ element }">
    当前活动元素是 {{ element?.dataset.id }}
  </UseActiveElement>
</template>
```
