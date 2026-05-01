---
category: Browser
---

# useTextareaAutosize

根据内容自动更新 textarea 的高度。

## 用法

### 简单示例

```vue
<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'

const { textarea, input } = useTextareaAutosize()
</script>

<template>
  <textarea
    ref="textarea"
    v-model="input"
    class="resize-none"
    placeholder="想说点什么？"
  />
</template>
```

::: info

建议重置 textarea 元素的滚动条样式，以避免大量文本导致的高度值不正确。

```css
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

textarea::-webkit-scrollbar {
  display: none;
}
```

:::

### 使用 `rows` 属性

如果你需要在 textarea 元素上支持 `rows` 属性，则应将 `styleProp` 选项设置为 `minHeight`。

```vue
<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'

const { textarea, input } = useTextareaAutosize({ styleProp: 'minHeight' })
</script>

<template>
  <textarea
    ref="textarea"
    v-model="input"
    class="resize-none"
    placeholder="你在想什么？"
    rows="3"
  />
</template>
```

### 使用 `maxHeight`

使用 `maxHeight` 选项可在保持自动调整大小行为的同时，以像素为单位限制 textarea 的高度。

```vue
<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'

const { textarea, input } = useTextareaAutosize({
  maxHeight: 180,
  styleProp: 'minHeight',
})
</script>

<template>
  <textarea
    ref="textarea"
    v-model="input"
    class="resize-none"
    placeholder="你在想什么？"
    rows="3"
  />
</template>
```
