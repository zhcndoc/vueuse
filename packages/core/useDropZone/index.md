---
category: Elements
---

# useDropZone

创建一个可接收文件拖放的区域。

## 用法

```vue
<script setup lang="ts">
import { useDropZone } from '@vueuse/core'

const dropZoneRef = ref<HTMLDivElement>()

function onDrop(files: File[] | null) {
  // 当文件被拖放到区域时调用
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  // 指定要接收的数据类型。
  dataTypes: ['image/jpeg'],
  // 多文件拖放控制
  multiple: true,
  // 是否阻止未处理事件的默认行为
  preventDefaultForUnhandled: false,
})
</script>

<template>
  <div ref="dropZoneRef">
    拖放文件到这里
  </div>
</template>
```
