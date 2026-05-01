---
category: 传感器
related: useUserMedia
---

# useDisplayMedia

响应式 [`mediaDevices.getDisplayMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia) 流。

## 用法

```vue
<script setup lang="ts">
import { useDisplayMedia } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const { stream, start } = useDisplayMedia()

// 开始流式传输
start()

const videoRef = useTemplateRef('video')
watchEffect(() => {
  // 在视频元素上预览
  videoRef.value.srcObject = stream.value
})
</script>

<template>
  <video ref="video" />
</template>
```

## 类型声明

```ts
export interface UseDisplayMediaOptions extends ConfigurableNavigator {
  /**
   * 如果流已启用
   * @default false
   */
  enabled?: MaybeRef<boolean>
  /**
   * 如果流的视频媒体约束
   */
  video?: boolean | MediaTrackConstraints | undefined
  /**
   * 如果流的音频媒体约束
   */
  audio?: boolean | MediaTrackConstraints | undefined
}
export interface UseDisplayMediaReturn extends Supportable {
  stream: ShallowRef<MediaStream | undefined>
  start: () => Promise<MediaStream | undefined>
  stop: () => void
  enabled: ShallowRef<boolean>
}
/**
 * 响应式 `mediaDevices.getDisplayMedia` 流
 *
 * @see https://vueuse.org/useDisplayMedia
 * @param options
 */
export declare function useDisplayMedia(
  options?: UseDisplayMediaOptions,
): UseDisplayMediaReturn
```
