---
category: Sensors
---

# useDevicePixelRatio

自动跟踪 [`window.devicePixelRatio`](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio)

> 注意：没有针对 `window.devicePixelRatio` 变化的事件监听器。因此，此函数使用 [`以编程方式测试媒体查询（window.matchMedia）`](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries) 应用与 [此示例](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes) 中描述的相同机制。

## 用法

```ts
import { useDevicePixelRatio } from '@vueuse/core'

const { pixelRatio } = useDevicePixelRatio()
```

## 组件用法

```vue
<template>
  <UseDevicePixelRatio v-slot="{ pixelRatio }">
    Pixel Ratio: {{ pixelRatio }}
  </UseDevicePixelRatio>
</template>
```
