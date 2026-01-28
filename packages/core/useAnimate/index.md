---
category: Animation
---

# useAnimate

响应式的 [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)。

## 用法

### 基本用法

`useAnimate` 函数将返回动画实例及其控制函数。

```vue
<script setup lang="ts">
import { useAnimate } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const {
  isSupported,
  animate,

  // 动作
  play,
  pause,
  reverse,
  finish,
  cancel,

  // 状态
  pending,
  playState,
  replaceState,
  startTime,
  currentTime,
  timeline,
  playbackRate,
} = useAnimate(el, { transform: 'rotate(360deg)' }, 1000)
</script>

<template>
  <span ref="el" style="display:inline-block">useAnimate</span>
</template>
```

### 自定义关键帧

关键帧可以是关键帧对象数组、单个关键帧对象，或者是一个 `ref`。更多详情请参考[关键帧格式](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)。

```ts
import { useAnimate } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')
// ---cut---
const keyframes = { transform: 'rotate(360deg)' }
// 或者
const keyframes = [
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' },
]
// 或者
const keyframes = ref([
  { clipPath: 'circle(20% at 0% 30%)' },
  { clipPath: 'circle(20% at 50% 80%)' },
  { clipPath: 'circle(20% at 100% 30%)' },
])

useAnimate(el, keyframes, 1000)
```

### 选项

第三个参数可以是持续时间数字，也可以是包含以下额外属性的选项对象，基于 [KeyframeAnimationOptions](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate#parameters)：

```ts
import { useAnimate } from '@vueuse/core'

useAnimate(el, keyframes, {
  duration: 1000,
  // 是否立即开始播放（默认: true）
  immediate: true,
  // 是否将结束时的样式状态提交到元素上（默认: false）
  commitStyles: false,
  // 是否保持动画（默认: false）
  persist: false,
  // 动画初始化时的回调
  onReady(animate) {
    console.log('动画已准备好', animate)
  },
  // 发生错误时的回调
  onError(e) {
    console.error('动画错误', e)
  },
})
```

### 延迟开始

设置 `immediate: false` 以防止动画自动启动。

```ts
import { useAnimate } from '@vueuse/core'

const { play } = useAnimate(el, keyframes, {
  duration: 1000,
  immediate: false,
})

// 手动开始动画
play()
```
