---
category: '@Integrations'
---

# useFocusTrap

这是 [`focus-trap`](https://github.com/focus-trap/focus-trap) 的响应式封装。

有关可以传递的选项的更多信息，请参阅 `focus-trap` 文档中的 [`createOptions`](https://github.com/focus-trap/focus-trap#createoptions)。

## 安装

```bash
npm i focus-trap@^7
```

## 使用

**基本用法**

```vue
<script setup lang="ts">
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { useTemplateRef } from 'vue'

const target = useTemplateRef('target')
const { hasFocus, activate, deactivate } = useFocusTrap(target)
</script>

<template>
  <div>
    <button @click="activate()">
      激活
    </button>
    <div ref="target">
      <span>是否有焦点: {{ hasFocus }}</span>
      <input type="text">
      <button @click="deactivate()">
        停用
      </button>
    </div>
  </div>
</template>
```

**多个 Ref**

```vue
<script setup lang="ts">
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { useTemplateRef } from 'vue'

const targetOne = useTemplateRef('targetOne')
const targetTwo = useTemplateRef('targetTwo')
const { hasFocus, activate, deactivate } = useFocusTrap([targetOne, targetTwo])
</script>

<template>
  <div>
    <button @click="activate()">
      激活
    </button>
    <div ref="targetOne">
      <span>是否有焦点: {{ hasFocus }}</span>
      <input type="text">
    </div>
    ...
    <div ref="targetTwo">
      <p>另一个目标在这里</p>
      <input type="text">
      <button @click="deactivate()">
        停用
      </button>
    </div>
  </div>
</template>
```

**动态焦点目标**

```vue
<script setup lang="ts">
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { computed, shallowRef, useTemplateRef } from 'vue'

const left = useTemplateRef('left')
const right = useTemplateRef('right')
const currentRef = shallowRef<'left' | 'right'>('left')

const target = computed(() =>
  currentRef.value === 'left'
    ? left
    : currentRef.value === 'right'
      ? right
      : null,
)

const { activate } = useFocusTrap(target)
</script>

<template>
  <div>
    <div ref="left" class="left">
      ...
    </div>
    <div ref="right" class="right">
      ...
    </div>
  </div>
</template>
```

**自动聚焦**

```vue
<script setup lang="ts">
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { useTemplateRef } from 'vue'

const target = useTemplateRef('target')
const { hasFocus, activate, deactivate } = useFocusTrap(target, { immediate: true })
</script>

<template>
  <div>
    <div ref="target">
      ...
    </div>
  </div>
</template>
```

**条件渲染**

该函数无法正确激活使用 `v-if` 进行条件渲染的元素上的焦点。因为它们在激活焦点时尚不存在于 DOM 中。要解决此问题，你需要在下一个渲染周期激活。

```vue
<script setup lang="ts">
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { nextTick, ref, useTemplateRef } from 'vue'

const target = useTemplateRef('target')
const { activate, deactivate } = useFocusTrap(target, { immediate: true })

const show = ref(false)

async function reveal() {
  show.value = true

  await nextTick()
  activate()
}
</script>

<template>
  <div>
    <div v-if="show" ref="target">
      ...
    </div>

    <button @click="reveal">
      显示并聚焦
    </button>
  </div>
</template>
```

## 使用组件

通过 `UseFocusTrap` 组件，在挂载此组件时，焦点陷阱将自动激活，并在卸载时停用。

```vue
<script setup lang="ts">
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'
import { shallowRef } from 'vue'

const show = shallowRef(false)
</script>

<template>
  <UseFocusTrap v-if="show" :options="{ immediate: true }">
    <div class="modal">
      ...
    </div>
  </UseFocusTrap>
</template>
```
