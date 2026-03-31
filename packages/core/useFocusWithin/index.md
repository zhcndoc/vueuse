---
category: Sensors
---

# useFocusWithin

用于跟踪元素或其后代元素是否拥有焦点的响应式工具。它旨在匹配 `:focus-within` CSS 伪类的行为。一个常见的用例是在表单元素上，以查看其任何输入项当前是否拥有焦点。

## 基本用法

```vue
<script setup lang="ts">
import { useFocusWithin } from '@vueuse/core'
import { ref, watch } from 'vue'

const target = ref()
const { focused } = useFocusWithin(target)

watch(focused, (focused) => {
  if (focused)
    console.log('目标包含有焦点的元素')
  else
    console.log('目标不包含有焦点的元素')
})
</script>

<template>
  <form ref="target">
    <input type="text" placeholder="名">
    <input type="text" placeholder="姓">
    <input type="text" placeholder="电子邮件">
    <input type="text" placeholder="密码">
  </form>
</template>
```
