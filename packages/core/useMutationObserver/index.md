---
category: Elements
---

# useMutationObserver

监视对 DOM 树的变更。[MutationObserver MDN](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)

## 用法

```vue
<script setup lang="ts">
import { useMutationObserver } from '@vueuse/core'
import { ref, useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const messages = ref([])

useMutationObserver(el, (mutations) => {
  if (mutations[0])
    messages.value.push(mutations[0].attributeName)
}, {
  attributes: true,
})
</script>

<template>
  <div ref="el">
    Hello VueUse
  </div>
</template>
```
