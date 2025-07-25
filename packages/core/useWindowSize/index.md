---
category: Elements
---

# useWindowSize

响应式窗口大小

## 用法

```vue
<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

<template>
  <div>
    Width: {{ width }}
    Height: {{ height }}
  </div>
</template>
```

## 组件使用

```vue
<template>
  <UseWindowSize v-slot="{ width, height }">
    Width: {{ width }}
    Height: {{ height }}
  </UseWindowSize>
</template>
```
