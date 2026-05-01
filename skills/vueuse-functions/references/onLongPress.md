---
category: Sensors
---

# 长按

监听元素上的长按。返回一个停止函数。

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
  <p>已长按：{{ longPressedHook }}</p>

  <button ref="htmlRefHook" class="ml-2 button small">
    长按
  </button>

  <button class="ml-2 button small" @click="resetHook">
    重置
  </button>
</template>
```

### 自定义延迟

默认情况下，处理函数会在 500ms 后触发。你可以使用 `delay` 选项来自定义它。它可以是一个数字，也可以是一个接收 `PointerEvent` 的函数。

```ts
import { onLongPress } from '@vueuse/core'

// 固定延迟
onLongPress(target, handler, { delay: 1000 })

// 根据事件动态设置延迟
onLongPress(target, handler, {
  delay: ev => ev.pointerType === 'touch' ? 800 : 500,
})
```

### 距离阈值

如果指针移动超过阈值，长按将被取消（默认：10 像素）。设为 `false` 可禁用移动检测。

```ts
import { onLongPress } from '@vueuse/core'

// 自定义阈值
onLongPress(target, handler, { distanceThreshold: 20 })

// 禁用移动检测
onLongPress(target, handler, { distanceThreshold: false })
```

### 鼠标抬起回调

你可以提供一个 `onMouseUp` 回调，以便在指针释放时收到通知。

```ts
import { onLongPress } from '@vueuse/core'

onLongPress(target, handler, {
  onMouseUp(duration, distance, isLongPress, pointerEvent) {
    console.log(`持续了 ${duration}ms，移动了 ${distance}px，长按：${isLongPress}，x：${pointerEvent.clientX}`)
  },
})
```

### 修饰符

可用的修饰符如下：

| 修饰符    | 描述                                   |
| --------- | -------------------------------------- |
| `stop`    | 调用 `event.stopPropagation()`          |
| `once`    | 在第一次触发后移除事件监听器            |
| `prevent` | 调用 `event.preventDefault()`           |
| `capture` | 为事件监听器使用捕获模式                |
| `self`    | 仅当目标元素本身触发时才生效            |

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
  <p>已长按：{{ longPressedComponent }}</p>

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
  <p>已长按：{{ longPressedDirective }}</p>

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

## 类型声明

```ts
export interface OnLongPressOptions {
  /**
   * 距离 `longpress` 被调用的时间，单位为 ms
   *
   * @default 500
   */
  delay?: number | ((ev: PointerEvent) => number)
  modifiers?: OnLongPressModifiers
  /**
   * 允许移动的距离，单位为像素，
   * 当距离 pointerdown 位置过远时，动作将被取消。
   * @default 10
   */
  distanceThreshold?: number | false
  /**
   * 当 ref 元素被释放时调用的函数。
   * @param duration 元素被按住的时长，单位为 ms
   * @param distance 距离 pointerdown 位置的距离
   * @param isLongPress 是否为长按
   * @param pointerEvent 浏览器触发的原生 {@link PointerEvent}
   */
  onMouseUp?: (
    duration: number,
    distance: number,
    isLongPress: boolean,
    pointerEvent: PointerEvent,
  ) => void
}
export interface OnLongPressModifiers {
  stop?: boolean
  once?: boolean
  prevent?: boolean
  capture?: boolean
  self?: boolean
}
export type OnLongPressReturn = () => void
/** @deprecated 请改用 {@link OnLongPressReturn} */
export type UseOnLongPressReturn = OnLongPressReturn
export declare function onLongPress(
  target: MaybeElementRef,
  handler: (evt: PointerEvent) => void,
  options?: OnLongPressOptions,
): OnLongPressReturn
```
