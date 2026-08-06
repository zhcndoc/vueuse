---
category: 组件
---

# useVirtualList

::: warning
如果你正在寻找更多功能，建议改用 [`@tanstack/vue-virtual`](https://tanstack.com/virtual/v3/docs/framework/vue/vue-virtual)。
:::

轻松创建虚拟列表。虚拟列表（有时也称为 [_虚拟滚动器_](https://vue-virtual-scroller-demo.netlify.app/)）可以让你高性能地渲染大量项目。它们只会渲染必要的最少 DOM 节点，通过使用 `wrapper` 元素来模拟容器元素的完整高度，从而显示 `container` 元素中的项目。

## 用法

### 简单列表

```ts
import { useVirtualList } from '@vueuse/core'

const { list, containerProps, wrapperProps } = useVirtualList(
  Array.from(Array.from({ length: 99999 }).keys()),
  {
    // 使 `itemHeight` 与项目行高保持同步。
    itemHeight: 22,
  },
)
```

### 配置

| 状态 | 类型 | 描述 |
| ---- | ---- | ---- |
| itemHeight | `number` | 确保正确计算 `wrapper` 元素的总高度。\* |
| itemWidth  | `number` | 确保正确计算 `wrapper` 元素的总宽度。\* |
| overscan   | `number` | 预渲染的 DOM 节点数量。如果你滚动得非常快，可防止项目之间出现空白。 |

\* `itemHeight` 或 `itemWidth` 必须与每一行渲染的高度保持同步。如果你在滚动到列表底部时看到多余的空白或抖动，请确保 `itemHeight` 或 `itemWidth` 的高度与该行相同。

### 响应式列表

```ts
import { useToggle, useVirtualList } from '@vueuse/core'
import { computed } from 'vue'

const [isEven, toggle] = useToggle()
const allItems = Array.from(Array.from({ length: 99999 }).keys())
const filteredList = computed(() => allItems.filter(i => isEven.value ? i % 2 === 0 : i % 2 === 1))

const { list, containerProps, wrapperProps } = useVirtualList(
  filteredList,
  {
    itemHeight: 22,
  },
)
```

```vue
<template>
  <p>显示{{ isEven ? '偶数' : '奇数' }}项目</p>
  <button @click="toggle">
    切换偶数/奇数
  </button>
  <div v-bind="containerProps" style="height: 300px">
    <div v-bind="wrapperProps">
      <div v-for="item in list" :key="item.index" style="height: 22px">
        行：{{ item.data }}
      </div>
    </div>
  </div>
</template>
```

### 横向列表

```ts
import { useVirtualList } from '@vueuse/core'

const allItems = Array.from(Array.from({ length: 99999 }).keys())

const { list, containerProps, wrapperProps } = useVirtualList(
  allItems,
  {
    itemWidth: 200,
  },
)
```

```vue
<template>
  <div v-bind="containerProps" style="height: 300px">
    <div v-bind="wrapperProps">
      <div v-for="item in list" :key="item.index" style="width: 200px">
        行：{{ item.data }}
      </div>
    </div>
  </div>
</template>
```

## 组件用法

```vue
<template>
  <UseVirtualList :list="list" :options="options" height="300px">
    <template #default="props">
      <!-- 你可以在这里获取列表中的当前项 -->
      <div style="height: 22px">
        行 {{ props.index }} {{ props.data }}
      </div>
    </template>
  </UseVirtualList>
</template>
```

要滚动到特定元素，该组件公开了 `scrollTo(index: number, options?: { behavior?: ScrollBehavior, block?: ScrollLogicalPosition, inline?: ScrollLogicalPosition }) => void`。

## 类型声明

```ts
type UseVirtualListItemSize = number | ((index: number) => number)
export interface UseHorizontalVirtualListOptions extends UseVirtualListOptionsBase {
  /**
   * 项目宽度，接受像素值或返回宽度的函数
   *
   * @default 0
   */
  itemWidth: UseVirtualListItemSize
}
export interface UseVerticalVirtualListOptions extends UseVirtualListOptionsBase {
  /**
   * 项目高度，接受像素值或返回高度的函数
   *
   * @default 0
   */
  itemHeight: UseVirtualListItemSize
}
export interface UseVirtualListOptionsBase {
  /**
   * 视图区域外的额外缓冲项目数
   *
   * @default 5
   */
  overscan?: number
}
export type UseVirtualListOptions =
  UseHorizontalVirtualListOptions | UseVerticalVirtualListOptions
export interface UseVirtualListItem<T> {
  data: T
  index: number
}
export interface UseVirtualListScrollToOptions {
  behavior?: ScrollBehavior
  block?: ScrollLogicalPosition
  inline?: ScrollLogicalPosition
}
export interface UseVirtualListReturn<T> {
  list: Ref<UseVirtualListItem<T>[]>
  scrollTo: (index: number, options?: UseVirtualListScrollToOptions) => void
  containerProps: {
    ref: Ref<HTMLElement | null>
    onScroll: () => void
    style: StyleValue
  }
  wrapperProps: ComputedRef<{
    style:
      | {
          width: string
          height: string
          marginTop: string
        }
      | {
          width: string
          height: string
          marginLeft: string
          display: string
        }
  }>
}
/**
 * 如果您需要更多功能，请考虑使用 [`vue-virtual-scroller`](https://github.com/Akryum/vue-virtual-scroller)。
 */
export declare function useVirtualList<T = any>(
  list: MaybeRef<readonly T[]>,
  options: UseVirtualListOptions,
): UseVirtualListReturn<T>
```
