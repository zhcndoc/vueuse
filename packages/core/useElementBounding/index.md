---
category: Elements
---

# useElementBounding

获取 HTML 元素的响应式[边界框](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

## 用法

```vue
<script>
import { useElementBounding } from '@vueuse/core'
import { ref } from 'vue'

export default {
  setup() {
    const el = ref(null)
    const { x, y, top, right, bottom, left, width, height }
        = useElementBounding(el)

    return {
      el,
      /* ... */
    }
  },
}
</script>

<template>
  <div ref="el" />
</template>
```

## 组件用法

```vue
<template>
  <UseElementBounding v-slot="{ width, height }">
    Width: {{ width }} Height: {{ height }}
  </UseElementBounding>
</template>
```

## 指令使用

```vue
<script setup lang="ts">
import { vElementBounding } from '@vueuse/components'

interface BoundingType {
  height: number
  bottom: number
  left: number
  right: number
  top: number
  width: number
  x: number
  y: number
}

function onBounding({ height, bottom, left, right, top, width, x, y }: BoundingType) {
  console.log(height, bottom, left, right, top, width, x, y)
}

const options = {
  reset: true,
  windowResize: true,
  windowScroll: true,
  immediate: true,
  updateTiming: 'sync',
}
</script>

<template>
  <textarea v-element-bounding="onBounding" />
  <!-- with options -->
  <textarea v-element-bounding="[onBounding, options]" />
</template>
```
