---
category: Animation
---

# useAnimate

响应式 [Web 动画 API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)。

## 用法

### 基本用法

`useAnimate` 函数返回动画实例和控制函数。

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

可以是关键帧对象数组、单个关键帧对象，或者 `ref`。更多详情请参见 [关键帧格式](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)。

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

第三个参数接受一个持续时间数字，或一个选项对象，在 [KeyframeAnimationOptions](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate#parameters) 的基础上增加以下属性：

```ts
import { useAnimate } from '@vueuse/core'

useAnimate(el, keyframes, {
  duration: 1000,
  // 立即开始播放（默认值：true）
  immediate: true,
  // 将动画结束时的样式状态提交到元素（默认值：false）
  commitStyles: false,
  // 保留动画（默认值：false）
  persist: false,
  // 动画初始化完成时的回调
  onReady(animate) {
    console.log('动画已准备就绪', animate)
  },
  // 发生错误时的回调
  onError(e) {
    console.error('动画错误', e)
  },
})
```

### 延迟开始

设置 `immediate: false` 可阻止动画自动开始。

```ts
import { useAnimate } from '@vueuse/core'

const { play } = useAnimate(el, keyframes, {
  duration: 1000,
  immediate: false,
})

// 手动开始动画
play()
```

## 类型声明

```ts
export interface UseAnimateOptions
  extends KeyframeAnimationOptions, ConfigurableWindow {
  /**
   * 使用 `useAnimate` 时会自动运行 play
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 是否将动画结束时的样式状态提交到正在被动画化的元素
   * 通常情况下，你应该配合 `fill` 选项一起使用。
   *
   * @default false
   */
  commitStyles?: boolean
  /**
   * 是否保留动画
   *
   * @default false
   */
  persist?: boolean
  /**
   * 动画初始化后执行
   */
  onReady?: (animate: Animation) => void
  /**
   * 捕获错误时的回调。
   */
  onError?: (e: unknown) => void
}
export type UseAnimateKeyframes = MaybeRef<
  Keyframe[] | PropertyIndexedKeyframes | null
>
export interface UseAnimateReturn extends Supportable {
  animate: ShallowRef<Animation | undefined>
  play: () => void
  pause: () => void
  reverse: () => void
  finish: () => void
  cancel: () => void
  pending: ComputedRef<boolean>
  playState: ComputedRef<AnimationPlayState>
  replaceState: ComputedRef<AnimationReplaceState>
  startTime: WritableComputedRef<CSSNumberish | number | null>
  currentTime: WritableComputedRef<CSSNumberish | null>
  timeline: WritableComputedRef<AnimationTimeline | null>
  playbackRate: WritableComputedRef<number>
}
/**
 * 响应式 Web 动画 API
 *
 * @see https://vueuse.org/useAnimate
 * @param target
 * @param keyframes
 * @param options
 */
export declare function useAnimate(
  target: MaybeComputedElementRef,
  keyframes: UseAnimateKeyframes,
  options?: number | UseAnimateOptions,
): UseAnimateReturn
```
