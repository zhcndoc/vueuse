---
category: Sensors
---

# onClickOutside

监听元素外的点击事件。适用于模态框或下拉菜单等场景。

## 用法

```vue
<script setup>
import { onClickOutside } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const target = useTemplateRef<HTMLElement>('target')

onClickOutside(target, event => console.log(event))
</script>

<template>
  <div ref="target">
    Hello world
  </div>
  <div>外部元素</div>
</template>
```

如果您需要更好地控制触发处理程序，可以使用 `controls` 选项。

```ts
const { cancel, trigger } = onClickOutside(
  modalRef,
  (event) => {
    modal.value = false
  },
  { controls: true },
)

useEventListener('pointermove', (e) => {
  cancel()
  // or
  trigger(e)
})
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
<script setup>
import { vOnClickOutside } from '@vueuse/components'
import { shallowRef, useTemplateRef } from 'vue'

const modal = shallowRef(false)

const ignoreElRef = useTemplateRef<HTMLElement>('ignoreEl')

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
