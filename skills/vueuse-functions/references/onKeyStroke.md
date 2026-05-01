---
category: Sensors
variants: onKeyDown, onKeyUp, onKeyPressed
---

# onKeyStroke

监听键盘按键事件。默认监听 `window` 上的 `keydown` 事件。

## 用法

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke('ArrowDown', (e) => {
  e.preventDefault()
})
```

查看 [此表格](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) 以了解所有按键代码。

### 返回值

返回一个停止函数，用于移除事件监听器。

```ts
const stop = onKeyStroke('Escape', handler)

// 之后，停止监听
stop()
```

### 监听多个按键

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke(['s', 'S', 'ArrowDown'], (e) => {
  e.preventDefault()
})

// 通过传入 `true` 或省略 key 参数来监听所有按键
onKeyStroke(true, (e) => {
  e.preventDefault()
})
onKeyStroke((e) => {
  e.preventDefault()
})
```

### 自定义按键谓词

你可以传入一个自定义函数来确定哪些按键应触发处理函数。

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke(
  e => e.key === 'A' && e.shiftKey,
  (e) => {
    console.log('Shift+A pressed')
  },
)
```

### 自定义事件目标

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke('A', (e) => {
  console.log('Key A pressed on document')
}, { target: document })
```

### 忽略重复事件

当按下 `A` 并且**持续按住**时，回调只会触发一次。`dedupe` 选项也可以是一个响应式 ref。

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke('A', (e) => {
  console.log('Key A pressed')
}, { dedupe: true })
```

参考：[KeyboardEvent.repeat](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat)

### 被动模式

设置 `passive: true` 以使用被动事件监听器。

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke('A', handler, { passive: true })
```

## 指令用法

```vue
<script setup lang="ts">
import { vOnKeyStroke } from '@vueuse/components'

function onUpdate(e: KeyboardEvent) {
  // 实现...
}
</script>

<template>
  <input v-on-key-stroke:c,v="onUpdate" type="text">
  <!-- 配合选项 -->
  <input v-on-key-stroke:c,v="[onUpdate, { eventName: 'keyup' }]" type="text">
</template>
```

### 自定义键盘事件

```ts
import { onKeyStroke } from '@vueuse/core'
// ---cut---
onKeyStroke('Shift', (e) => {
  console.log('Shift key up')
}, { eventName: 'keyup' })
```

或者

```ts
import { onKeyUp } from '@vueuse/core'
// ---cut---
onKeyUp('Shift', () => console.log('Shift key up'))
```

## 简写

- `onKeyDown` - `onKeyStroke(key, handler, {eventName: 'keydown'})` 的别名
- `onKeyPressed` - `onKeyStroke(key, handler, {eventName: 'keypress'})` 的别名
- `onKeyUp` - `onKeyStroke(key, handler, {eventName: 'keyup'})` 的别名

## 类型声明

```ts
export type KeyPredicate = (event: KeyboardEvent) => boolean
export type KeyFilter = true | string | string[] | KeyPredicate
export type KeyStrokeEventName = "keydown" | "keypress" | "keyup"
export interface OnKeyStrokeOptions {
  eventName?: KeyStrokeEventName
  target?: MaybeRefOrGetter<EventTarget | null | undefined>
  passive?: boolean
  /**
   * 设置为 `true` 可在按键被持续按住时忽略重复事件。
   *
   * @default false
   */
  dedupe?: MaybeRefOrGetter<boolean>
}
/**
 * 监听键盘按键事件。
 *
 * @see https://vueuse.org/onKeyStroke
 */
export declare function onKeyStroke(
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options?: OnKeyStrokeOptions,
): () => void
export declare function onKeyStroke(
  handler: (event: KeyboardEvent) => void,
  options?: OnKeyStrokeOptions,
): () => void
/**
 * 监听给定按键的 keydown 事件。
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
export declare function onKeyDown(
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options?: Omit<OnKeyStrokeOptions, "eventName">,
): () => void
/**
 * 监听给定按键的 keypress 事件。
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
export declare function onKeyPressed(
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options?: Omit<OnKeyStrokeOptions, "eventName">,
): () => void
/**
 * 监听给定按键的 keyup 事件。
 *
 * @see https://vueuse.org/onKeyStroke
 * @param key
 * @param handler
 * @param options
 */
export declare function onKeyUp(
  key: KeyFilter,
  handler: (event: KeyboardEvent) => void,
  options?: Omit<OnKeyStrokeOptions, "eventName">,
): () => void
```
