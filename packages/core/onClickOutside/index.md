---
category: 传感器
---

# onClickOutside

监听元素外的点击事件。适用于模态框或下拉菜单。

## 用法

```vue
<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const target = useTemplateRef('target')

onClickOutside(target, event => console.log(event))
</script>

<template>
  <div ref="target">
    Hello world
  </div>
  <div>外部元素</div>
</template>
```

### 返回值

默认情况下，`onClickOutside` 返回一个 `stop` 函数，用于移除事件监听。

```ts
const stop = onClickOutside(target, handler)

// 之后，停止监听
stop()
```

### 控制选项

如果您需要更好地控制处理程序的触发，可以使用 `controls` 选项。它返回一个包含 `stop`、`cancel` 和 `trigger` 函数的对象。

```ts
const { stop, cancel, trigger } = onClickOutside(
  modalRef,
  (event) => {
    modal.value = false
  },
  { controls: true },
)

// cancel 用于阻止下一次点击触发处理器
cancel()

// trigger 用于手动触发处理器
trigger(event)

// stop 用于移除所有事件监听
stop()
```

### 忽略元素

使用 `ignore` 选项来防止某些元素触发处理器。将元素以 Refs 或 CSS 选择器数组的形式提供。

```ts
const ignoreElRef = useTemplateRef('ignoreEl')

onClickOutside(
  target,
  event => console.log(event),
  { ignore: [ignoreElRef, '.ignore-class', '#ignore-id'] },
)
```

### 捕获阶段

默认情况下，事件监听使用捕获阶段（`capture: true`）。设置 `capture: false` 可改用冒泡阶段。

```ts
onClickOutside(target, handler, { capture: false })
```

### 侦测 iframe 点击

默认情况下，iframe 内的点击不会被检测。启用 `detectIframe` 可在焦点切换到 iframe 时触发处理器。

```ts
onClickOutside(target, handler, { detectIframe: true })
```

## 组件用法

```vue
<template>
  <OnClickOutside :options="{ ignore: [/* ... */] }" @trigger="count++">
    <div>
      点击我外面
    </div>
  </OnClickOutside>
</template>
```

## 指令用法

```vue
<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import { shallowRef } from 'vue'

const modal = shallowRef(false)
function closeModal() {
  modal.value = false
}
</script>

<template>
  <button @click="modal = true">
    打开模态框
  </button>
  <div v-if="modal" v-on-click-outside="closeModal">
    Hello World
  </div>
</template>
```

你还可以将处理程序设置为数组，以设置指令的配置项。

```vue
<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import { shallowRef, useTemplateRef } from 'vue'

const modal = shallowRef(false)

const ignoreElRef = useTemplateRef('ignoreEl')

const onClickOutsideHandler = [
  (ev) => {
    console.log(ev)
    modal.value = false
  },
  { ignore: [ignoreElRef] },
]
</script>

<template>
  <button @click="modal = true">
    打开模态框
  </button>

  <div ref="ignoreElRef">
    点击外部忽略元素
  </div>

  <div v-if="modal" v-on-click-outside="onClickOutsideHandler">
    Hello World
  </div>
</template>
```
