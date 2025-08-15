---
category: Sensors
related: useDevicesList, usePermission
---

# useUserMedia

响应式 [`mediaDevices.getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) 流。

## 用法

```vue
<script setup lang="ts">
import { useUserMedia } from '@vueuse/core'
import { useTemplateRef, watchEffect } from 'vue'

const { stream, start } = useUserMedia()
start()

const videoRef = useTemplateRef('video')
watchEffect(() => {
  // 在 video 元素上预览
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
