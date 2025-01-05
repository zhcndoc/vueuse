---
category: Sensors
---

# useInfiniteScroll

实现元素的无限滚动。

## 使用方法

```vue
<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core'
import { ref } from 'vue'

const el = ref<HTMLElement | null>(null)
const data = ref([1, 2, 3, 4, 5, 6])

const { reset } = useInfiniteScroll(
  el,
  () => {
    // 加载更多
    data.value.push(...moreData)
  },
  {
    distance: 10,
    canLoadMore: () => {
      // inidicate when there is no more content to load so onLoadMore stops triggering
      // if (noMoreContent) return false
      return true // for demo purposes
    },
  }
)

function resetList() {
  data.value = []
  reset()
}
</script>

<template>
  <div ref="el">
    <div v-for="item in data">
      {{ item }}
    </div>
  </div>
  <button @click="resetList()">
    Reset
  </button>
</template>
```

::: warning
确保在没有更多内容可加载时用 `canLoadMore` 指示，否则只要有空间加载更多内容，`onLoadMore` 就会被触发。
:::

## 指令使用

```vue
<script setup lang="ts">
import { vInfiniteScroll } from '@vueuse/components'
import { ref } from 'vue'

const data = ref([1, 2, 3, 4, 5, 6])

function onLoadMore() {
  const length = data.value.length + 1
  data.value.push(...Array.from({ length: 5 }, (_, i) => length + i))
}
function canLoadMore() {
  // inidicate when there is no more content to load so onLoadMore stops triggering
  // if (noMoreContent) return false
  return true // for demo purposes
}
</script>

<template>
  <div v-infinite-scroll="onLoadMore">
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>

  <!-- 使用选项 -->
  <div v-infinite-scroll="[onLoadMore, { distance: 10, canLoadMore }]">
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>
</template>
```
