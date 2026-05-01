---
category: Sensors
---

# useNetwork

响应式 [网络状态](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)。Network Information API 以通用连接类型（例如：'wifi'、'cellular' 等）的形式提供有关系统连接的信息。这可用于根据用户的连接情况选择高清内容或低清内容。整个 API 由向 Navigator 接口添加 NetworkInformation 接口以及一个单独的属性组成：Navigator.connection。

## 用法

```ts
import { useNetwork } from '@vueuse/core'

const { isOnline, offlineAt, downlink, downlinkMax, effectiveType, saveData, type } = useNetwork()

console.log(isOnline.value)
```

若要作为对象使用，请用 `reactive()` 包裹它

```ts
import { useNetwork } from '@vueuse/core'
// ---cut---
import { reactive } from 'vue'

const network = reactive(useNetwork())

console.log(network.isOnline)
```

## 组件用法

```vue
<template>
  <UseNetwork v-slot="{ isOnline, type }">
    是否在线：{{ isOnline }}
    类型：{{ type }}
  </UseNetwork>
</template>
```

## 类型声明

```ts
export interface UseNetworkOptions extends ConfigurableWindow {}
export type NetworkType =
  | "bluetooth"
  | "cellular"
  | "ethernet"
  | "none"
  | "wifi"
  | "wimax"
  | "other"
  | "unknown"
export type NetworkEffectiveType = "slow-2g" | "2g" | "3g" | "4g" | undefined
export interface NetworkState extends Supportable {
  /**
   * 如果用户当前已连接。
   */
  isOnline: Readonly<ShallowRef<boolean>>
  /**
   * 自用户上次连接以来的时间。
   */
  offlineAt: Readonly<ShallowRef<number | undefined>>
  /**
   * 在此时间点，如果用户处于离线状态并重新连接
   */
  onlineAt: Readonly<ShallowRef<number | undefined>>
  /**
   * 下载速度，单位为 Mbps。
   */
  downlink: Readonly<ShallowRef<number | undefined>>
  /**
   * 可达到的最大下载速度，单位为 Mbps。
   */
  downlinkMax: Readonly<ShallowRef<number | undefined>>
  /**
   * 检测到的有效速度类型。
   */
  effectiveType: Readonly<ShallowRef<NetworkEffectiveType | undefined>>
  /**
   * 当前连接的估计有效往返时间。
   */
  rtt: Readonly<ShallowRef<number | undefined>>
  /**
   * 如果用户启用了流量节省模式。
   */
  saveData: Readonly<ShallowRef<boolean | undefined>>
  /**
   * 检测到的连接/网络类型。
   */
  type: Readonly<ShallowRef<NetworkType>>
}
export type UseNetworkReturn = Readonly<NetworkState>
/**
 * 响应式网络状态。
 *
 * @see https://vueuse.org/useNetwork
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useNetwork(
  options?: UseNetworkOptions,
): UseNetworkReturn
```
