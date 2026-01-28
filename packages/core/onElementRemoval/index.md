---
category: 传感器
---

# onElementRemoval

当该元素或任何包含该元素的元素从 DOM 中被移除时触发。

## 用法

```vue {13}
<script setup lang="ts">
import { onElementRemoval } from '@vueuse/core'
import { shallowRef, useTemplateRef } from 'vue'

const btnRef = useTemplateRef('btn')
const btnState = shallowRef(true)
const removedCount = shallowRef(0)

function btnOnClick() {
  btnState.value = !btnState.value
}

onElementRemoval(btnRef, () => ++removedCount.value)
</script>

<template>
  <button
    v-if="btnState"
    @click="btnOnClick"
  >
    recreate me
  </button>
  <button
    v-else
    ref="btnRef"
    @click="btnOnClick"
  >
    remove me
  </button>
  <b>removed times: {{ removedCount }}</b>
</template>
```

### 带有 Mutation Records 的回调

回调函数会接收一个触发移除的 `MutationRecord` 对象数组。

```ts
import { onElementRemoval } from '@vueuse/core'

onElementRemoval(targetRef, (mutationRecords) => {
  console.log('元素已被移除', mutationRecords)
})
```

### 返回值

返回一个停止函数，用于停止观察。

```ts
const stop = onElementRemoval(targetRef, callback)

// 之后，停止观察
stop()
```
