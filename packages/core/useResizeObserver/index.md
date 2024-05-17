---
category: Elements
---

# useResizeObserver

报告元素内容或边框框的尺寸变化。

## 用法

```vue
<script setup>
import { ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'

const el = ref(null)
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

[ResizeObserver MDN](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
