---
category: '@Integrations'
---

# useSortable

[`sortable`](https://github.com/SortableJS/Sortable) 的封装。

要了解可以传递的选项的更多信息，请参阅 `Sortable` 文档中的 [`Sortable.options`](https://github.com/SortableJS/Sortable#options)。

::: warning
目前，`useSortable` 仅实现了单个列表的拖放排序。
:::

## 安装

```bash
npm i sortablejs@^1
```

## 使用方法

### 使用模板引用

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

### 使用指定的选择器操作

```vue
<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable'
import { shallowRef, useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const list = shallowRef([{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }])

const animation = 200

const { option } = useSortable(el, list, {
  handle: '.handle',
  // 或者设置 option
  // animation
})

// 你可以使用 option 方法设置和获取 Sortable 的选项
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

### 返回值

| 属性     | 说明                                   |
| -------- | -------------------------------------- |
| `start`  | 初始化 Sortable 实例（挂载时自动调用） |
| `stop`   | 销毁 Sortable 实例                     |
| `option` | 运行时获取或设置 Sortable 选项         |

```ts
const { start, stop, option } = useSortable(el, list)

// 停止排序
stop()

// 重新启动排序
start()

// 获取/设置选项
option('animation', 200) // 设置
const animation = option('animation') // 获取
```

### 监听元素变化

使用 `watchElement` 选项，在元素变化时自动重新初始化 Sortable（适用于带 `v-if` 的场景）。

```ts
import { useSortable } from '@vueuse/integrations/useSortable'

useSortable(el, list, {
  watchElement: true, // 元素变化时自动重新初始化
})
```

### 自定义更新处理函数

如果你想要自己处理 `onUpdate`，可以传递 `onUpdate` 参数，我们还提供了一个移动项目位置的函数。

```ts
import { moveArrayElement, useSortable } from '@vueuse/integrations/useSortable'

useSortable(el, list, {
  onUpdate: (e) => {
    // 做一些事情
    moveArrayElement(list, e.oldIndex, e.newIndex, e)
    // 由于 moveArrayElement 在微任务中执行，需要等待下一次 tick 才能保证完成
    nextTick(() => {
      /* 做一些事情 */
    })
  }
})
```

### 辅助函数

以下辅助函数也被导出：

| 函数                                       | 说明                                     |
| ------------------------------------------ | ---------------------------------------- |
| `moveArrayElement(list, from, to, event?)` | 在数组中将元素从一个索引移动到另一个索引 |
| `insertNodeAt(parent, element, index)`     | 在指定索引处插入 DOM 节点                |
| `removeNode(node)`                         | 从父节点中删除 DOM 节点                  |
