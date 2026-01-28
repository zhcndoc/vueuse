---
category: Elements
---

# useDraggable

使元素可拖动。

## 用法

```vue
<script setup lang="ts">
import { useDraggable } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')

// `style` 将作为 `left: ?px; top: ?px;` 的辅助计算属性
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>

<template>
  <div ref="el" :style="style" style="position: fixed">
    拖动我！我在 {{ x }}，{{ y }} 的位置
  </div>
</template>
```

### 返回值

| 属性         | 类型                   | 说明                                      |
| ------------ | ---------------------- | ----------------------------------------- |
| `x`          | `Ref<number>`          | 当前 x 位置                               |
| `y`          | `Ref<number>`          | 当前 y 位置                               |
| `position`   | `Ref<{x, y}>`          | 当前位置信息对象                          |
| `isDragging` | `ComputedRef<boolean>` | 当前是否正在拖动                          |
| `style`      | `ComputedRef<string>`  | CSS 样式字符串，如 `left: ?px; top: ?px;` |

### 选项

```ts
useDraggable(el, {
  // 初始位置（默认值：{ x: 0, y: 0 }）
  initialValue: { x: 40, y: 40 },
  // 限制拖动的轴：'x'，'y' 或 'both'（默认）
  axis: 'both',
  // 仅当直接点击元素时触发（默认：false）
  exact: false,
  // 阻止默认浏览器行为（默认：false）
  preventDefault: true,
  // 停止事件传播（默认：false）
  stopPropagation: false,
  // 使用事件捕获阶段（默认：true）
  capture: true,
  // 禁用拖动（默认：false）
  disabled: false,
  // 触发拖动的鼠标按钮（默认：[0] - 左键）
  buttons: [0],
  // 监听的指针类型（默认：['mouse', 'touch', 'pen']）
  pointerTypes: ['mouse', 'touch', 'pen'],
  // 自定义拖动把手元素（默认：目标元素）
  handle: handleRef,
  // 用于限制拖动边界的容器元素（默认：无）
  containerElement: containerRef,
  // 绑定 pointermove/pointerup 事件的元素（默认：window）
  draggingElement: window,
  // 回调函数
  onStart: (position, event) => {
    // 返回 false 可以阻止拖动
  },
  onMove: (position, event) => {},
  onEnd: (position, event) => {},
})
```

### 阻止默认行为

设置 `preventDefault: true` 来覆盖浏览器中某些元素（例如图片）的默认拖放行为。

```ts
import { useDraggable } from '@vueuse/core'

const { x, y, style } = useDraggable(el, {
  preventDefault: true,
})
```

### 容器边界限制

使用 `containerElement` 选项将拖动限制在一个容器内。

```ts
import { useDraggable } from '@vueuse/core'

const { x, y } = useDraggable(el, {
  containerElement: containerRef,
})
```

## 组件用法

```vue
<template>
  <UseDraggable v-slot="{ x, y }" :initial-value="{ x: 10, y: 10 }">
    拖动我！我在 {{ x }}，{{ y }} 的位置
  </UseDraggable>
</template>
```

对于组件的用法，还可以传递附加属性 `storageKey` 和 `storageType` 来启用元素位置的持久化。

```vue
<template>
  <UseDraggable storage-key="vueuse-draggable" storage-type="session">
    刷新页面后，我仍然在相同的位置！
  </UseDraggable>
</template>
```
