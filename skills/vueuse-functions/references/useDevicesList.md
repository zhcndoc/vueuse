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

## 组件

```vue
<template>
  <UseDevicesList v-slot="{ videoInputs, audioInputs, audioOutputs }">
    Cameras: {{ videoInputs }}
    Microphones: {{ audioInputs }}
    Speakers: {{ audioOutputs }}
  </UseDevicesList>
</template>
```

## 类型声明

```ts
export interface UseDevicesListOptions extends ConfigurableNavigator {
  onUpdated?: (devices: MediaDeviceInfo[]) => void
  /**
   * 如果未授予权限，则立即请求权限，
   * 否则 label 和 deviceIds 可能为空
   *
   * @default false
   */
  requestPermissions?: boolean
  /**
   * 请求的媒体权限类型
   *
   * @default { audio: true, video: true }
   */
  constraints?: MediaStreamConstraints
}
export interface UseDevicesListReturn extends Supportable {
  /**
   * 所有设备
   */
  devices: ShallowRef<MediaDeviceInfo[]>
  videoInputs: ComputedRef<MediaDeviceInfo[]>
  audioInputs: ComputedRef<MediaDeviceInfo[]>
  audioOutputs: ComputedRef<MediaDeviceInfo[]>
  permissionGranted: ShallowRef<boolean>
  ensurePermissions: () => Promise<boolean>
}
/**
 * 响应式 `enumerateDevices` 列出可用的输入/输出设备
 *
 * @see https://vueuse.org/useDevicesList
 * @param options
 */
export declare function useDevicesList(
  options?: UseDevicesListOptions,
): UseDevicesListReturn
```
