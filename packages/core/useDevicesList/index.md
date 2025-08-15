---
category: Sensors
---

# useDevicesList

响应式 [enumerateDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices) 列出可用的输入/输出设备。

## 用法

```ts
import { useDevicesList } from '@vueuse/core'

const {
  devices,
  videoInputs: cameras,
  audioInputs: microphones,
  audioOutputs: speakers,
} = useDevicesList()
```

## 请求权限

要请求权限，请使用 `ensurePermissions` 方法。

```ts
import { useDevicesList } from '@vueuse/core'
// ---cut---
const {
  ensurePermissions,
  permissionGranted,
} = useDevicesList()

await ensurePermissions()
console.log(permissionsGranted.value)
```

# 组件

```vue
<template>
  <UseDevicesList v-slot="{ videoInputs, audioInputs, audioOutputs }">
    摄像头：{{ videoInputs }}
    麦克风：{{ audioInputs }}
    扬声器：{{ audioOutputs }}
  </UseDevicesList>
</template>
```
