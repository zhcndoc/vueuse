---
category: '@Integrations'
---

# useFocusTrap

[`focus-trap`](https://github.com/focus-trap/focus-trap) 的响应式封装。

有关可传入选项的更多信息，请参阅 `focus-trap` 文档中的 [`createOptions`](https://github.com/focus-trap/focus-trap#createoptions)。

## 安装

```bash
npm i focus-trap@^7
```

## 用法

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
      <span>是否聚焦：{{ hasFocus }}</span>
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
      <span>是否聚焦：{{ hasFocus }}</span>
      <input type="text">
    </div>
    ...
    <div ref="targetTwo">
      <p>另一个目标</p>
      <input type="text">
      <button @click="deactivate()">
        停用
      </button>
    </div>
  </div>
</template>
```

**动态聚焦目标**

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

此函数无法使用 `v-if` 正确激活条件渲染元素的焦点。这是因为在激活焦点时，这些元素尚不存在于 DOM 中。要解决此问题，你需要在下一个 tick 中激活焦点。

```vue
<script setup lang="ts">
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { nextTick, useTemplateRef } from 'vue'

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

使用 `UseFocusTrap` 组件时，Focus Trap 会在该组件挂载时自动激活，并在卸载时停用。

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

## 类型声明

```ts
export interface UseFocusTrapOptions extends Options {
  /**
   * 立即激活焦点陷阱
   */
  immediate?: boolean
}
export interface UseFocusTrapReturn {
  /**
   * 指示焦点陷阱当前是否处于激活状态
   */
  hasFocus: ShallowRef<boolean>
  /**
   * 指示焦点陷阱当前是否已暂停
   */
  isPaused: ShallowRef<boolean>
  /**
   * 激活焦点陷阱
   *
   * @see https://github.com/focus-trap/focus-trap#trapactivateactivateoptions
   * @param opts 激活焦点陷阱的选项
   */
  activate: (opts?: ActivateOptions) => void
  /**
   * 停用焦点陷阱
   *
   * @see https://github.com/focus-trap/focus-trap#trapdeactivatedeactivateoptions
   * @param opts 停用焦点陷阱的选项
   */
  deactivate: (opts?: DeactivateOptions) => void
  /**
   * 暂停焦点陷阱
   *
   * @see https://github.com/focus-trap/focus-trap#trappause
   */
  pause: Fn
  /**
   * 恢复焦点陷阱
   *
   * @see https://github.com/focus-trap/focus-trap#trapunpause
   */
  unpause: Fn
}
/**
 * 响应式焦点陷阱
 *
 * @see https://vueuse.org/useFocusTrap
 */
export declare function useFocusTrap(
  target: MaybeRefOrGetter<
    Arrayable<MaybeRefOrGetter<string> | MaybeComputedElementRef>
  >,
  options?: UseFocusTrapOptions,
): UseFocusTrapReturn
```
