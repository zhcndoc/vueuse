---
category: Sensors
---

# onClickOutside

监听元素外部的点击。适用于模态框或下拉菜单。

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
    你好，世界
  </div>
  <div>外部元素</div>
</template>
```

### 返回值

默认情况下，`onClickOutside` 会返回一个 `stop` 函数，用于移除事件监听器。

```ts
const stop = onClickOutside(target, handler)

// 之后停止监听
stop()
```

### 控制

如果你需要对处理函数的触发进行更多控制，可以使用 `controls` 选项。这会返回一个包含 `stop`、`cancel` 和 `trigger` 函数的对象。

```ts
const { stop, cancel, trigger } = onClickOutside(
  modalRef,
  (event) => {
    modal.value = false
  },
  { controls: true },
)

// cancel 可阻止下一次点击触发处理函数
cancel()

// trigger 手动触发处理函数
trigger(event)

// stop 移除所有事件监听器
stop()
```

### 忽略元素

使用 `ignore` 选项可防止某些元素触发处理函数。将元素作为 Refs 数组或 CSS 选择器提供。

```ts
const ignoreElRef = useTemplateRef('ignoreEl')

onClickOutside(
  target,
  event => console.log(event),
  { ignore: [ignoreElRef, '.ignore-class', '#ignore-id'] },
)
```

### 捕获阶段

默认情况下，事件监听器使用捕获阶段（`capture: true`）。将 `capture: false` 可改为使用冒泡阶段。

```ts
onClickOutside(target, handler, { capture: false })
```

### 检测 iframe 点击

默认情况下，不会检测 iframe 内部的点击。启用 `detectIframe` 后，当焦点移动到 iframe 时也会触发处理函数。

```ts
onClickOutside(target, handler, { detectIframe: true })
```

## 组件用法

```vue
<template>
  <OnClickOutside :options="{ ignore: [/* ... */] }" @trigger="count++">
    <div>
      点击我外部
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
    你好，世界
  </div>
</template>
```

你也可以将处理函数设置为数组，以设置指令的配置项。

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
    你好，世界
  </div>
</template>
```

## 类型声明

```ts
export interface OnClickOutsideOptions<
  Controls extends boolean = false,
> extends ConfigurableWindow {
  /**
   * 不应触发事件的元素列表，
   * 以 Refs 或 CSS 选择器的形式提供。
   */
  ignore?: MaybeRefOrGetter<(MaybeElementRef | string)[]>
  /**
   * 内部事件监听器是否使用捕获阶段。
   * @default true
   */
  capture?: boolean
  /**
   * 当焦点移动到 iframe 时是否运行处理函数。
   * @default false
   */
  detectIframe?: boolean
  /**
   * 使用 controls 来取消/触发监听器。
   * @default false
   */
  controls?: Controls
}
export type OnClickOutsideHandler<
  T extends OnClickOutsideOptions<boolean> = OnClickOutsideOptions,
> = (
  event:
    | (T["detectIframe"] extends true ? FocusEvent : never)
    | (T["controls"] extends true ? Event : never)
    | PointerEvent,
) => void
export type OnClickOutsideReturn<Controls extends boolean = false> =
  Controls extends false
    ? Fn
    : {
        stop: Fn
        cancel: Fn
        trigger: (event: Event) => void
      }
/**
 * 监听元素外部的点击。
 *
 * @see https://vueuse.org/onClickOutside
 * @param target
 * @param handler
 * @param options
 */
export declare function onClickOutside<T extends OnClickOutsideOptions>(
  target: MaybeComputedElementRef,
  handler: OnClickOutsideHandler<T>,
  options?: T,
): Fn
export declare function onClickOutside<T extends OnClickOutsideOptions<true>>(
  target: MaybeComputedElementRef,
  handler: OnClickOutsideHandler<T>,
  options: T,
): {
  stop: Fn
  cancel: Fn
  trigger: (event: Event) => void
}
```
