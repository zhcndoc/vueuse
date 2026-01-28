---
category: 传感器
---

# onStartTyping

当用户在不可编辑的元素上开始输入时触发。用于当用户在页面任意位置开始输入时，自动聚焦输入框。

## 用法

```vue
<script setup lang="ts">
import { onStartTyping } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const input = useTemplateRef('input')

onStartTyping(() => {
  if (!input.value.active)
    input.value.focus()
})
</script>

<template>
  <input ref="input" type="text" placeholder="开始输入以聚焦">
</template>
```

## 工作原理

回调函数仅在以下情况触发：

- 没有可编辑元素（`<input>`、`<textarea>` 或 `contenteditable`）被聚焦
- 按下的键是字母数字键（A-Z，0-9）
- 未按下任何修饰键（Ctrl、Alt、Meta）

这允许用户在页面任意位置开始输入，而不会在使用快捷键或与表单字段交互时意外触发回调。
