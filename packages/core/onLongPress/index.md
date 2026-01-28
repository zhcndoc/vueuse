---
category: 传感器
---

# onLongPress

监听元素上的长按事件。返回一个停止函数。

## 用法

```vue
<script setup lang="ts">
import { onLongPress } from '@vueuse/core'
import { shallowRef, useTemplateRef } from 'vue'

const htmlRefHook = useTemplateRef('htmlRefHook')
const longPressedHook = shallowRef(false)

function onLongPressCallbackHook(e: PointerEvent) {
  longPressedHook.value = true
}
function resetHook() {
  longPressedHook.value = false
}

onLongPress(
  htmlRefHook,
  onLongPressCallbackHook,
  {
    modifiers: {
      prevent: true
    }
  }
)
</script>

<template>
  <p>长按状态：{{ longPressedHook }}</p>

  <button ref="htmlRefHook" class="ml-2 button small">
    长按
  </button>

  <button class="ml-2 button small" @click="resetHook">
    重置
  </button>
</template>
```

### 自定义延迟

默认情况下，处理函数在 500 毫秒后触发。你可以通过 `delay` 选项自定义延迟时间。`delay` 可以是一个数字，也可以是接收 `PointerEvent` 的函数。

```ts
import { onLongPress } from '@vueuse/core'

// 固定延迟
onLongPress(target, handler, { delay: 1000 })

// 根据事件动态延迟
onLongPress(target, handler, {
  delay: ev => ev.pointerType === 'touch' ? 800 : 500,
})
```

### 移动距离阈值

如果指针移动超过阈值（默认是 10 像素），长按将被取消。设置为 `false` 可禁用移动检测。

```ts
import { onLongPress } from '@vueuse/core'

// 自定义阈值
onLongPress(target, handler, { distanceThreshold: 20 })

// 禁用移动检测
onLongPress(target, handler, { distanceThreshold: false })
```

### 鼠标弹起回调

你可以提供一个 `onMouseUp` 回调，在指针释放时接收通知。

```ts
import { onLongPress } from '@vueuse/core'

onLongPress(target, handler, {
  onMouseUp(duration, distance, isLongPress) {
    console.log(`按住了 ${duration} 毫秒，移动了 ${distance} 像素，是否长按：${isLongPress}`)
  },
})
```

### 修饰符

以下是可用的修饰符：

| 修饰符    | 说明                             |
| --------- | -------------------------------- |
| `stop`    | 调用 `event.stopPropagation()`   |
| `once`    | 事件触发后移除监听器             |
| `prevent` | 调用 `event.preventDefault()`    |
| `capture` | 使用事件捕获模式监听事件         |
| `self`    | 仅当事件目标是绑定元素本身时触发 |

```ts
onLongPress(target, handler, {
  modifiers: {
    prevent: true,
    stop: true,
  },
})
```

## 组件用法

```vue
<script setup lang="ts">
import { OnLongPress } from '@vueuse/components'
import { shallowRef } from 'vue'

const longPressedComponent = shallowRef(false)

function onLongPressCallbackComponent(e: PointerEvent) {
  longPressedComponent.value = true
}
function resetComponent() {
  longPressedComponent.value = false
}
</script>

<template>
  <p>长按状态：{{ longPressedComponent }}</p>

  <OnLongPress
    as="button"
    class="ml-2 button small"
    @trigger="onLongPressCallbackComponent"
  >
    长按
  </OnLongPress>

  <button class="ml-2 button small" @click="resetComponent">
    重置
  </button>
</template>
```

## 指令用法

```vue
<script setup lang="ts">
import { vOnLongPress } from '@vueuse/components'
import { shallowRef } from 'vue'

const longPressedDirective = shallowRef(false)

function onLongPressCallbackDirective(e: PointerEvent) {
  longPressedDirective.value = true
}
function resetDirective() {
  longPressedDirective.value = false
}
</script>

<template>
  <p>长按状态：{{ longPressedDirective }}</p>

  <button
    v-on-long-press.prevent="onLongPressCallbackDirective"
    class="ml-2 button small"
  >
    长按
  </button>

  <button
    v-on-long-press="[onLongPressCallbackDirective, { delay: 1000, modifiers: { stop: true } }]"
    class="ml-2 button small"
  >
    长按（带选项）
  </button>

  <button class="ml-2 button small" @click="resetDirective">
    重置
  </button>
</template>
```
