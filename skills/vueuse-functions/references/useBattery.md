---
category: Sensors
---

# useBattery

响应式 [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)，更常被称为 Battery API，它提供系统电池电量的信息，并允许你在电池电量或充电状态发生变化时，通过触发事件来通知你。这可用于调整应用的资源使用，以在电量低时减少电池消耗，或者在电池耗尽前保存更改，从而防止数据丢失。

## 用法

```ts
import { useBattery } from '@vueuse/core'

const { isSupported, charging, chargingTime, dischargingTime, level } = useBattery()
```

| 状态            | 类型       | 描述                                                          |
| --------------- | ---------- | ------------------------------------------------------------- |
| isSupported     | `Boolean`  | 当前浏览器是否支持 Battery Status API。                       |
| charging        | `Boolean`  | 设备当前是否正在充电。                                         |
| chargingTime    | `Number`   | 设备完全充满电前剩余的秒数。                                   |
| dischargingTime | `Number`   | 设备完全耗尽电量前剩余的秒数。                                 |
| level           | `Number`   | 一个介于 0 和 1 之间的数，表示当前电量水平。                  |

::: warning 浏览器支持
Battery Status API 的浏览器支持有限。目前它仅在基于 Chromium 的浏览器中可用。在使用这些值之前，请始终检查 `isSupported`。
:::

## 使用场景

我们的应用通常不会对电量状况做出响应，我们可以对应用做一些调整，使其更适合低电量用户。

- 触发特殊的“深色模式”省电主题设置。
- 停止在新闻信息流中自动播放视频。
- 禁用一些不关键的后台工作线程。
- 限制网络请求并减少 CPU/内存消耗。

## 组件用法

```vue
<template>
  <UseBattery v-slot="{ isSupported, charging, level }">
    <div v-if="isSupported">
      <p>正在充电：{{ charging }}</p>
      <p>电池电量：{{ (level * 100).toFixed(0) }}%</p>
    </div>
    <div v-else>
      不支持 Battery API
    </div>
  </UseBattery>
</template>
```

## 类型声明

```ts
export interface UseBatteryOptions extends ConfigurableNavigator {}
export interface UseBatteryReturn extends Supportable {
  charging: ShallowRef<boolean>
  chargingTime: ShallowRef<number>
  dischargingTime: ShallowRef<number>
  level: ShallowRef<number>
}
export interface BatteryManager extends EventTarget {
  charging: boolean
  chargingTime: number
  dischargingTime: number
  level: number
}
/**
 * 响应式 Battery Status API。
 *
 * @see https://vueuse.org/useBattery
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useBattery(
  options?: UseBatteryOptions,
): UseBatteryReturn
```
