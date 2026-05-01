---
category: Sensors
---

# useDeviceOrientation

响应式 [DeviceOrientationEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent)。为网页开发者提供运行网页的设备物理方向信息。

## 用法

```ts
import { useDeviceOrientation } from '@vueuse/core'

const {
  isAbsolute,
  alpha,
  beta,
  gamma,
} = useDeviceOrientation()
```

| 状态       | 类型      | 描述                                                                                                               |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------------------ |
| isAbsolute | `boolean` | 一个布尔值，用于指示设备是否提供绝对方向数据。                                                                       |
| alpha      | `number`  | 一个表示设备绕 z 轴运动的数字，以度为单位，取值范围为 0 到 360。                                                     |
| beta       | `number`  | 一个表示设备绕 x 轴运动的数字，以度为单位，取值范围为 -180 到 180。                                                  |
| gamma      | `number`  | 一个表示设备绕 y 轴运动的数字，以度为单位，取值范围为 -90 到 90。                                                    |

你可以在 [MDN 上找到关于该状态的更多信息](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent#instance_properties)。

## 组件用法

```vue
<template>
  <UseDeviceOrientation v-slot="{ alpha, beta, gamma }">
    Alpha: {{ alpha }}
    Beta: {{ beta }}
    Gamma: {{ gamma }}
  </UseDeviceOrientation>
</template>
```

## 类型声明

```ts
export interface UseDeviceOrientationOptions extends ConfigurableWindow {}
export interface UseDeviceOrientationReturn extends Supportable {
  isAbsolute: ShallowRef<boolean, boolean>
  alpha: Ref<number | null, number | null>
  beta: Ref<number | null, number | null>
  gamma: Ref<number | null, number | null>
}
/**
 * 响应式 DeviceOrientationEvent。
 *
 * @see https://vueuse.org/useDeviceOrientation
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useDeviceOrientation(
  options?: UseDeviceOrientationOptions,
): UseDeviceOrientationReturn
```
