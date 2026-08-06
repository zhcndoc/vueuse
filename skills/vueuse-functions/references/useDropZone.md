---
category: 元素
---

# useDropZone

创建一个可供文件拖放的区域。

::: warning

由于 Safari 浏览器的限制，文件类型验证只能在放置事件期间进行，无法在拖动事件期间进行。因此，在 Safari 中进行拖动操作时，无论文件类型如何，`isOverDropZone` 的值始终为 `true`。

:::

## 用法

```vue
<script setup lang="ts">
import { useDropZone } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const dropZoneRef = useTemplateRef('dropZoneRef')

function onDrop(files: File[] | null) {
  // 文件被拖放到区域时调用
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  // 指定要接收的数据类型。
  dataTypes: ['image/jpeg'],
  // 控制多文件拖放
  multiple: true,
  // 是否为未处理的事件阻止默认行为
  preventDefaultForUnhandled: false,
})
</script>

<template>
  <div ref="dropZoneRef">
    将文件拖放到此处
  </div>
</template>
```

## 类型声明

```ts
export interface UseDropZoneReturn {
  files: ShallowRef<File[] | null>
  isOverDropZone: ShallowRef<boolean>
}
export interface UseDropZoneOptions {
  /**
   * 允许的数据类型；如果未设置，则允许所有数据类型。
   * 也可以是用于检查数据类型的函数。
   */
  dataTypes?:
    MaybeRef<readonly string[]> | ((types: readonly string[]) => boolean)
  /**
   * 类似于 dataTypes，但会提供 DataTransferItemList 以进行自定义验证。
   * 如果提供了此函数，则优先使用它，而不是 dataTypes。
   */
  checkValidity?: (items: DataTransferItemList) => boolean
  onDrop?: (files: File[] | null, event: DragEvent) => void
  onEnter?: (files: File[] | null, event: DragEvent) => void
  onLeave?: (files: File[] | null, event: DragEvent) => void
  onOver?: (files: File[] | null, event: DragEvent) => void
  /**
   * 允许拖放多个文件。默认为 true。
   */
  multiple?: boolean
  /**
   * 阻止未处理事件的默认行为。默认为 false。
   */
  preventDefaultForUnhandled?: boolean
}
export declare function useDropZone(
  target: MaybeRefOrGetter<HTMLElement | Document | null | undefined>,
  options?: UseDropZoneOptions | UseDropZoneOptions["onDrop"],
): UseDropZoneReturn
```
