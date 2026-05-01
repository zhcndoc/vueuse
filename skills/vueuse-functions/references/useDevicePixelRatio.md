---
category: Sensors
---

# useDevicePixelRatio

响应式跟踪 [`window.devicePixelRatio`](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio)

> 注意：`window.devicePixelRatio` 的变化没有对应的事件监听器。因此，此函数使用 [`通过程序测试媒体查询（window.matchMedia）`](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries)，并采用与 [此示例](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes) 中描述的相同机制。

## 使用方式

```ts
import { useDevicePixelRatio } from '@vueuse/core'

const { pixelRatio } = useDevicePixelRatio()
```

## 组件用法

```vue
<template>
  <UseDevicePixelRatio v-slot="{ pixelRatio }">
    像素比：{{ pixelRatio }}
  </UseDevicePixelRatio>
</template>
```

## 类型声明

```ts
export interface UseDevicePixelRatioOptions extends ConfigurableWindow {}
export interface UseDevicePixelRatioReturn {
  pixelRatio: Readonly<ShallowRef<number>>
  stop: WatchStopHandle
}
/**
 * 响应式跟踪 `window.devicePixelRatio`。
 *
 * @see https://vueuse.org/useDevicePixelRatio
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useDevicePixelRatio(
  options?: UseDevicePixelRatioOptions,
): UseDevicePixelRatioReturn
```
