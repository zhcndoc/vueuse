---
category: Browser
---

# useFileDialog

轻松打开文件对话框。

## 使用方法

```vue
<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'

const { files, open, reset, onCancel, onChange } = useFileDialog({
  accept: 'image/*', // 设置仅接受图像文件
  directory: true, // 如果设置为 true，则选择目录而不是文件
})

onChange((files) => {
  /** 处理文件 */
})

onCancel(() => {
  /** 在取消时做一些事情 */
})
</script>

<template>
  <button type="button" @click="open">
    选择文件
  </button>
</template>
```
