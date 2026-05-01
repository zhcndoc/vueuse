---
category: Sensors
related: useDevicesList, usePermission
---

# useUserMedia

响应式 [`mediaDevices.getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) 流媒体。

## 使用

```vue
<script setup lang="ts">
import { useUserMedia } from '@vueuse/core'
import { useTemplateRef, watchEffect } from 'vue'

const { stream, start } = useUserMedia()
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

### 设备

```ts
import { useDevicesList, useUserMedia } from '@vueuse/core'
import { computed, reactive } from 'vue'

const {
  videoInputs: cameras,
  audioInputs: microphones,
} = useDevicesList({
  requestPermissions: true,
})
const currentCamera = computed(() => cameras.value[0]?.deviceId)
const currentMicrophone = computed(() => microphones.value[0]?.deviceId)

const { stream } = useUserMedia({
  constraints: reactive({
    video: { deviceId: currentCamera },
    audio: { deviceId: currentMicrophone, }
  })
})
```

## 类型声明

```ts
export interface UseUserMediaOptions extends ConfigurableNavigator {
  /**
   * 如果流已启用
   * @default false
   */
  enabled?: MaybeRef<boolean>
  /**
   * 当 deviceIds 或 constraints 变更时重新创建流
   *
   * @default true
   */
  autoSwitch?: MaybeRef<boolean>
  /**
   * 要应用到请求的 MediaStream 的 MediaStreamConstraints
   * 如果提供，此约束将覆盖 videoDeviceId 和 audioDeviceId
   *
   * @default {}
   */
  constraints?: MaybeRef<MediaStreamConstraints>
}
export interface UseUserMediaReturn extends Supportable {
  stream: Ref<MediaStream | undefined>
  start: () => Promise<MediaStream | undefined>
  stop: () => void
  restart: () => Promise<MediaStream | undefined>
  constraints: Ref<MediaStreamConstraints | undefined>
  enabled: ShallowRef<boolean>
  autoSwitch: ShallowRef<boolean>
}
/**
 * 响应式 `mediaDevices.getUserMedia` 流媒体
 *
 * @see https://vueuse.org/useUserMedia
 * @param options
 */
export declare function useUserMedia(
  options?: UseUserMediaOptions,
): UseUserMediaReturn
```
