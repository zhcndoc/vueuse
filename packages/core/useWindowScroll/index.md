---
category: Elements
---

# useWindowScroll

响应式窗口滚动

## 用法

```vue
<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { x, y } = useWindowScroll()
</script>

<template>
  <div>
    read current x, y scroll: {{ x }}, {{ y }}
  </div>
  <button @click="x = 100">
    scroll X to 100
  </button>
  <button @click="y = 100">
    scroll Y to 100
  </button>
</template>
```
