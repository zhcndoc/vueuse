---
category: Sensors
---

# useDeviceMotion

响应式 [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)。提供有关设备位置和方向变化速度的信息给 Web 开发者。

## 用法

```js
import { useDeviceMotion } from '@vueuse/core'

const {
  acceleration,
  accelerationIncludingGravity,
  rotationRate,
  interval,
} = useDeviceMotion()
```

> 注意：对于 iOS，您需要使用 `trigger` 并将其与用户交互绑定。
> 在获得权限后，API 将自动运行

| 状态                         | 类型            | 描述                                                                   |
| ---------------------------- | --------------- | ---------------------------------------------------------------------- |
| acceleration                 | `object`        | 一个对象，提供设备在三个轴 X、Y 和 Z 上的加速度。                      |
| accelerationIncludingGravity | `object`        | 一个对象，提供设备在三个轴 X、Y 和 Z 上受到重力影响后的加速度。        |
| rotationRate                 | `object`        | 一个对象，提供设备在三个方向轴 alpha、beta 和 gamma 上方向变化的速率。 |
| interval                     | `Number`        | 一个表示以毫秒为单位从设备获取数据的时间间隔的数字。                   |
| ensurePermissions            | `boolean`       | 指示平台是否需要权限来使用 API                                         |
| permissionGranted            | `boolean`       | 指示用户是否已授予权限。默认情况下始终为 false                         |
| trigger                      | `Promise<void>` | 一个异步函数，用于请求用户权限。API 在获得权限后自动运行               |

你可以在 [MDN 上找到有关状态的更多信息](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent#instance_properties)。

## 组件用法

```vue
<template>
  <UseDeviceMotion v-slot="{ acceleration }">
    加速度：{{ acceleration }}
  </UseDeviceMotion>
</template>
```
