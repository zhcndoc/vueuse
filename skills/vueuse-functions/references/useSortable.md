---
category: '@Integrations'
---

# useSortable

[`sortable`](https://github.com/SortableJS/Sortable) 的包装器。

有关可传入哪些选项的更多信息，请参阅 `Sortable` 文档中的 [`Sortable.options`](https://github.com/SortableJS/Sortable#options)。

::: warning
目前，`useSortable` 仅实现单个列表的拖拽排序。
:::

## 安装

```bash
npm i sortablejs@^1
```

## 用法

### 使用模板 ref

```vue
<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable'
import { shallowRef, useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const list = shallowRef([{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }])

useSortable(el, list)
</script>

<template>
  <div ref="el">
    <div v-for="item in list" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>
```

### 使用指定要操作的选择器

```vue
<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable'
import { shallowRef, useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const list = shallowRef([{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }])

const animation = 200

const { option } = useSortable(el, list, {
  handle: '.handle',
  // 或者设置选项
  // animation
})

// 你可以使用 option 方法来设置和获取 Sortable 的选项
option('animation', animation)
// option('animation') // 200
</script>

<template>
  <div ref="el">
    <div v-for="item in list" :key="item.id">
      <span>{{ item.name }}</span>
      <span class="handle">*</span>
    </div>
  </div>
</template>
```

### 使用选择器获取根元素

```vue
<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable'
import { shallowRef } from 'vue'

const list = shallowRef([{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }])

useSortable('#dv', list)
</script>

<template>
  <div id="dv">
    <div v-for="item in list" :key="item.id">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>
```

### 使用组件

```vue
<script setup lang="ts">
import { UseSortable } from '@vueuse/integrations/useSortable/component'
import { shallowRef } from 'vue'

const list = shallowRef([
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
])
</script>

<template>
  <UseSortable v-model="list" as="ol" :options="{ animation: 150 }">
    <li v-for="item in list" :key="item.id">
      {{ item.name }}
    </li>
  </UseSortable>
</template>
```

你还可以从插槽作用域中访问 `start`、`stop` 和 `option` 这类辅助函数：

```vue
<template>
  <UseSortable v-slot="{ stop, start }" v-model="list">
    <button @click="stop()">
      停止排序
    </button>
    <button @click="start()">
      开始排序
    </button>
    <div v-for="item in list" :key="item.id">
      {{ item.name }}
    </div>
  </UseSortable>
</template>
```

### 返回值

| 属性 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| `start`  | 初始化 Sortable 实例（在挂载时会自动调用） |
| `stop`   | 销毁 Sortable 实例                                    |
| `option` | 在运行时获取或设置 Sortable 选项                           |

```ts
const { start, stop, option } = useSortable(el, list)

// 停止排序
stop()

// 重新开始排序
start()

// 获取/设置选项
option('animation', 200) // set
const animation = option('animation') // get
```

### 监听元素变化

使用 `watchElement` 选项，在元素变化时自动重新初始化 Sortable（在 `v-if` 场景下很有用）。

```ts
import { useSortable } from '@vueuse/integrations/useSortable'

useSortable(el, list, {
  watchElement: true, // 当元素变化时自动重新初始化
})
```

### 自定义更新处理器

如果你想自己处理 `onUpdate`，可以传入 `onUpdate` 参数，我们也提供了一个用于移动项目位置的函数。

```ts
import { moveArrayElement, useSortable } from '@vueuse/integrations/useSortable'

useSortable(el, list, {
  onUpdate: (e) => {
    // 做一些事情
    moveArrayElement(list, e.oldIndex, e.newIndex, e)
    // 这里需要 nextTick，因为 moveArrayElement 会在微任务中执行
    // 所以我们需要等待到下一个 tick，直到它执行完成。
    nextTick(() => {
      /* 做一些事情 */
    })
  }
})
```

### 辅助函数

此外还导出了以下辅助函数：

| 函数                                   | 描述                                           |
| ------------------------------------------ | ----------------------------------------------------- |
| `moveArrayElement(list, from, to, event?)` | 将数组中的元素从一个索引移动到另一个索引 |
| `insertNodeAt(parent, element, index)`     | 在特定索引处插入一个 DOM 节点                 |
| `removeNode(node)`                         | 从其父节点中移除一个 DOM 节点                     |

## 类型声明

```ts
export interface UseSortableReturn {
  /**
   * 启动 sortable 实例
   */
  start: () => void
  /**
   * 销毁 sortable 实例
   */
  stop: () => void
  /**
   * Options getter/setter
   * @param name a Sortable.Options property.
   * @param value a value.
   */
  option: (<K extends keyof Sortable.Options>(
    name: K,
    value: Sortable.Options[K],
  ) => void) &
    (<K extends keyof Sortable.Options>(name: K) => Sortable.Options[K])
}
export interface UseSortableOptions extends Options, ConfigurableDocument {
  /**
   * 监听元素引用的变化，并在元素变化时自动重新初始化 Sortable。
   *
   * 当为 `false`（默认）时，Sortable 只会在挂载时初始化一次。
   * 如果元素引用发生变化，你必须手动调用 `start()`。
   *
   * 当为 `true` 时，会自动监听元素引用，并在其变化时重新初始化
   * Sortable（例如，使用 v-if 的条件渲染）。
   *
   * @default false
   */
  watchElement?: boolean
}
export declare function useSortable<T>(
  selector: string,
  list: MaybeRef<T[]>,
  options?: UseSortableOptions,
): UseSortableReturn
export declare function useSortable<T>(
  el: MaybeRefOrGetter<MaybeElement>,
  list: MaybeRef<T[]>,
  options?: UseSortableOptions,
): UseSortableReturn
/**
 * 将一个元素插入到 DOM 中的给定索引处。
 * @param parentElement
 * @param element
 * @param {number} index
 * @see https://github.com/Alfred-Skyblue/vue-draggable-plus/blob/a3829222095e1949bf2c9a20979d7b5930e66f14/src/utils/index.ts#L81C1-L94C2
 */
export declare function insertNodeAt(
  parentElement: Element,
  element: Element,
  index: number,
): void
/**
 * 从 DOM 中移除一个节点。
 * @param {Node} node
 * @see https://github.com/Alfred-Skyblue/vue-draggable-plus/blob/a3829222095e1949bf2c9a20979d7b5930e66f14/src/utils/index.ts#L96C1-L102C2
 */
export declare function removeNode(node: Node): void
export declare function moveArrayElement<T>(
  list: MaybeRef<T[]>,
  from: number,
  to: number,
  e?: Sortable.SortableEvent | null,
): void
```
