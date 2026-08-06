---
category: Browser
---

# useMediaQuery

响应式[媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries)。创建 MediaQueryList 对象后，你可以检查查询结果，或在结果发生变化时接收通知。

## 用法

```ts
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')
```

#### 服务端渲染和 Nuxt

如果你在启用 SSR 的情况下使用 `useMediaQuery`，则需要指定希望在服务器端和水合之前渲染的屏幕尺寸，以避免水合不匹配

```ts
import { useMediaQuery } from '@vueuse/core'

const isLarge = useMediaQuery('(min-width: 1024px)', {
  ssrWidth: 768 // 将启用 SSR 模式，并按照屏幕宽度为 768px 的情况进行渲染
})

console.log(isLarge.value) // 始终为 false，因为 768px 的 ssrWidth 小于 1024px
onMounted(() => {
  console.log(isLarge.value) // 如果屏幕小于 1024px，则为 false；如果大于 1024px，则为 true
})
```

或者，你也可以使用 [`provideSSRWidth`](./useSSRWidth.md) 在应用中进行全局设置。

## 类型声明

```ts
/**
 * 响应式媒体查询。
 *
 * @see https://vueuse.org/useMediaQuery
 * @param query
 * @param options
 */
export declare function useMediaQuery(
  query: MaybeRefOrGetter<string>,
  options?: ConfigurableWindow & {
    ssrWidth?: number
  },
): ComputedRef<boolean>
```
