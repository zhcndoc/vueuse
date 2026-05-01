---
category: Sensors
---

# useInfiniteScroll

元素的无限滚动。

## 用法

```vue
<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core'
import { ref, useTemplateRef } from 'vue'

const el = useTemplateRef('el')
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
      // 指示何时没有更多内容可加载，以便 onLoadMore 停止触发
      // if (noMoreContent) return false
      return true // 仅用于演示
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
    重置
  </button>
</template>
```

## 方向

不同的滚动方向需要不同的 CSS 样式设置：

| Direction          | 所需 CSS                                              |
| ------------------ | ----------------------------------------------------- |
| `bottom` (default) | 无需特殊设置                                            |
| `top`              | `display: flex;`<br>`flex-direction: column-reverse;` |
| `left`             | `display: flex;`<br>`flex-direction: row-reverse;`    |
| `right`            | `display: flex;`                                      |

::: warning
请确保使用 `canLoadMore` 指示何时没有更多内容可加载，否则只要还有更多内容的空间，`onLoadMore` 就会持续触发。
:::

## 指令用法

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
  // 指示何时没有更多内容可加载，以便 onLoadMore 停止触发
  // if (noMoreContent) return false
  return true // 仅用于演示
}
</script>

<template>
  <div v-infinite-scroll="onLoadMore">
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>

  <!-- 带选项 -->
  <div v-infinite-scroll="[onLoadMore, { distance: 10, canLoadMore }]">
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>
</template>
```

## 类型声明

```ts
type InfiniteScrollElement =
  | HTMLElement
  | SVGElement
  | Window
  | Document
  | null
  | undefined
export interface UseInfiniteScrollOptions<
  T extends InfiniteScrollElement = InfiniteScrollElement,
> extends UseScrollOptions {
  /**
   * 元素底部与视口底部之间的最小距离
   *
   * @default 0
   */
  distance?: number
  /**
   * 监听滚动的方向。
   *
   * @default 'bottom'
   */
  direction?: "top" | "bottom" | "left" | "right"
  /**
   * 两次加载更多之间的间隔时间（用于避免过多调用）。
   *
   * @default 100
   */
  interval?: number
  /**
   * 一个用于判断特定元素是否可以加载更多内容的函数。
   * 如果允许为给定元素加载更多内容，则应返回 `true`，
   * 否则返回 `false`。
   */
  canLoadMore?: (el: T) => boolean
}
export interface UseInfiniteScrollReturn {
  isLoading: ComputedRef<boolean>
  reset: () => void
}
/**
 * 响应式无限滚动。
 *
 * @see https://vueuse.org/useInfiniteScroll
 */
export declare function useInfiniteScroll<T extends InfiniteScrollElement>(
  element: MaybeRefOrGetter<T>,
  onLoadMore: (state: UnwrapNestedRefs<UseScrollReturn>) => Awaitable<void>,
  options?: UseInfiniteScrollOptions<T>,
): UseInfiniteScrollReturn
```
