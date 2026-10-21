---
category: Browser
---

# useMediaQuery

响应式的[媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries)。一旦你创建了一个 MediaQueryList 对象，你可以检查查询结果或在结果变化时接收通知。

## 使用方法

```ts
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')
```

#### Server Side Rendering and Nuxt

如果在启用 SSR 时使用 `useMediaQuery`，需要指定服务端及水合前要渲染的屏幕尺寸，以避免水合不匹配。

```ts
import { useMediaQuery } from '@vueuse/core'

const isLarge = useMediaQuery('(min-width: 1024px)', {
  ssrWidth: 768 // Will enable SSR mode and render like if the screen was 768px wide
})

console.log(isLarge.value) // always false because ssrWidth of 768px is smaller than 1024px
onMounted(() => {
  console.log(isLarge.value) // false if screen is smaller than 1024px, true if larger than 1024px
})
```

Alternatively you can set this up globally for your app using [`provideSSRWidth`](../useSSRWidth/index.md)
