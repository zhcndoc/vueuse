---
category: Sensors
---

# onKeyStroke

监听键盘按键事件。默认情况下，监听 `window` 上的 `keydown` 事件。

## 用法

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke('ArrowDown', (e) => {
  e.preventDefault()
})
```

请参阅[此表格](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)获取所有按键代码。

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

// 通过传入 `true` 或省略按键参数来监听所有按键
onKeyStroke(true, (e) => {
  e.preventDefault()
})
onKeyStroke((e) => {
  e.preventDefault()
})
```

### 自定义键盘谓词

你可以传入自定义函数来判断哪些按键会触发回调。

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke(
  e => e.key === 'A' && e.shiftKey,
  (e) => {
    console.log('Shift+A 被按下')
  },
)
```

### 自定义事件目标

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke('A', (e) => {
  console.log('按键 A 在文档上被按下')
}, { target: document })
```

### 忽略重复事件

当按下 `A` 键并保持按下时，回调函数只会触发一次。`dedupe` 选项也可以是响应式的 `ref`。

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke('A', (e) => {
  console.log('按键 A 被按下')
}, { dedupe: true })
```

参考：[KeyboardEvent.repeat](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat)

### 被动模式

设置 `passive: true` 可使用被动事件监听器。

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke('A', handler, { passive: true })
```

## 指令用法

```vue
<script setup lang="ts">
import { vOnKeyStroke } from '@vueuse/components'

function onUpdate(e) {
  // 实现...
}
</script>

<template>
  <input v-on-key-stroke:c,v="onUpdate" type="text">
  <!-- 带有选项 -->
  <input v-on-key-stroke:c,v="[onUpdate, { eventName: 'keyup' }]" type="text">
</template>
```

### 自定义键盘事件

```ts
import { onKeyStroke } from '@vueuse/core'

onKeyStroke('Shift', (e) => {
  console.log('按键 Shift 松开')
}, { eventName: 'keyup' })
```

或者

```ts
import { onKeyUp } from '@vueuse/core'

onKeyUp('Shift', () => console.log('按键 Shift 松开'))
```

## 快捷方式

- `onKeyDown` - `onKeyStroke(key, handler, {eventName: 'keydown'})` 的别名
- `onKeyPressed` - `onKeyStroke(key, handler, {eventName: 'keypress'})` 的别名
- `onKeyUp` - `onKeyStroke(key, handler, {eventName: 'keyup'})` 的别名
