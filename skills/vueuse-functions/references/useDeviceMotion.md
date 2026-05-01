---
category: 传感器
---

# useDeviceMotion

响应式 [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)。为 Web 开发者提供有关设备位置和方向变化速度的信息。

## 用法

```ts
import { useDeviceMotion } from '@vueuse/core'

const {
  acceleration,
  accelerationIncludingGravity,
  rotationRate,
  interval,
} = useDeviceMotion()
```

> 注意：对于 iOS，你需要使用 `trigger` 并将其与用户交互绑定。
> 在获得权限后，API 将自动运行

| 状态                         | 类型            | 描述                                                                                                          |
| ---------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------- |
| acceleration                 | `object`        | 一个对象，给出设备在 X、Y 和 Z 三个轴上的加速度。                                        |
| accelerationIncludingGravity | `object`        | 一个对象，给出设备在 X、Y 和 Z 三个轴上、包含重力影响的加速度。             |
| rotationRate                 | `object`        | 一个对象，给出设备在 alpha、beta 和 gamma 三个方向轴上的方向变化速率。 |
| interval                     | `Number`        | 一个数字，表示从设备获取数据的时间间隔，单位为毫秒..             |
| ensurePermissions            | `boolean`       | 指示平台是否需要权限才能使用该 API                                                    |
| permissionGranted            | `boolean`       | 指示用户是否已授予权限。默认始终为 false                                       |
| trigger                      | `Promise<void>` | 请求用户权限的异步函数。一旦授予权限，API 将自动运行                  |

你可以在 [MDN 上找到有关该状态的更多信息](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent#instance_properties)。

## 组件用法

```vue
<template>
  <UseDeviceMotion v-slot="{ acceleration }">
    加速度：{{ acceleration }}
  </UseDeviceMotion>
</template>
```

## 类型声明

```ts
export interface UseDeviceMotionOptions
  extends ConfigurableWindow, ConfigurableEventFilter {
  /**
   * 如果尚未获得权限，则立即请求权限，
   * 否则 label 和 deviceIds 可能为空
   *
   * @default false
   */
  requestPermissions?: boolean
}
/** @deprecated use {@link UseDeviceMotionOptions} instead */
export type DeviceMotionOptions = UseDeviceMotionOptions
export interface UseDeviceMotionReturn extends Supportable {
  acceleration: Ref<DeviceMotionEventAcceleration | null>
  accelerationIncludingGravity: Ref<DeviceMotionEventAcceleration | null>
  rotationRate: Ref<DeviceMotionEventRotationRate | null>
  interval: ShallowRef<number>
  requirePermissions: ComputedRef<boolean>
  ensurePermissions: () => Promise<void>
  permissionGranted: ShallowRef<boolean>
}
/**
 * 响应式 DeviceMotionEvent。
 *
 * @see https://vueuse.org/useDeviceMotion
 * @param options
 */
export declare function useDeviceMotion(
  options?: UseDeviceMotionOptions,
): UseDeviceMotionReturn
```
