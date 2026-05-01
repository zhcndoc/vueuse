---
category: Sensors
---

# useGeolocation

响应式 [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)。它允许用户在愿意的情况下向 Web 应用程序提供自己的位置。出于隐私原因，系统会请求用户允许报告位置信息。

## 用法

```ts
import { useGeolocation } from '@vueuse/core'

const { coords, locatedAt, error, resume, pause } = useGeolocation()
```

| 状态      | 类型                                                                          | 描述                                                             |
| --------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| coords    | [`Coordinates`](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates) | 检索到的位置信息，例如纬度和经度                                   |
| locatedAt | `Date`                                                                        | 上一次地理定位调用的时间                                           |
| error     | `string`                                                                      | 当地理定位 API 失败时的错误消息。                                 |
| resume    | `function`                                                                    | 用于恢复更新地理位置的控制函数                                     |
| pause     | `function`                                                                    | 用于暂停更新地理位置的控制函数                                     |

## 配置

`useGeolocation` 函数接受 [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) 对象作为可选参数。

## 组件用法

```vue
<template>
  <UseGeolocation v-slot="{ coords: { latitude, longitude } }">
    纬度: {{ latitude }}
    经度: {{ longitude }}
  </UseGeolocation>
</template>
```

## 类型声明

```ts
export interface UseGeolocationOptions
  extends Partial<PositionOptions>, ConfigurableNavigator {
  immediate?: boolean
}
export interface UseGeolocationReturn extends Supportable {
  coords: ShallowRef<Omit<GeolocationPosition["coords"], "toJSON">>
  locatedAt: ShallowRef<number | null>
  error: ShallowRef<GeolocationPositionError | null>
  resume: () => void
  pause: () => void
}
/**
 * 响应式 Geolocation API。
 *
 * @see https://vueuse.org/useGeolocation
 * @param options
 */
export declare function useGeolocation(
  options?: UseGeolocationOptions,
): UseGeolocationReturn
```
