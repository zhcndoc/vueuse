---
category: Browser
---

# useImage

在浏览器中响应式加载图片，你可以等待结果显示它，或者显示一个回退内容。

## 用法

```vue
<script setup lang="ts">
import { useImage } from '@vueuse/core'

const avatarUrl = 'https://place.dog/300/200'
const { isLoading } = useImage({ src: avatarUrl })
</script>

<template>
  <span v-if="isLoading">加载中</span>
  <img v-else :src="avatarUrl">
</template>
```

## 组件用法

```vue
<template>
  <UseImage src="https://place.dog/300/200">
    <template #loading>
      加载中..
    </template>

    <template #error>
      失败
    </template>
  </UseImage>
</template>
```

## 类型声明

```ts
export interface UseImageOptions {
  /** 资源地址 */
  src: string
  /** 在不同情况下使用的图片，例如高分辨率显示器、小屏幕等 */
  srcset?: string
  /** 不同页面布局下的图片尺寸 */
  sizes?: string
  /** 图片替代信息 */
  alt?: string
  /** 图片类名 */
  class?: string
  /** 图片加载 */
  loading?: HTMLImageElement["loading"]
  /** 图片 CORS 设置 */
  crossorigin?: string
  /** 用于 fetch 的 referrer 策略 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy */
  referrerPolicy?: HTMLImageElement["referrerPolicy"]
  /** 图片宽度 */
  width?: HTMLImageElement["width"]
  /** 图片高度 */
  height?: HTMLImageElement["height"]
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#decoding */
  decoding?: HTMLImageElement["decoding"]
  /** 提供在获取图片时使用的相对优先级提示 */
  fetchPriority?: HTMLImageElement["fetchPriority"]
  /** 提供图片重要性的提示 */
  ismap?: HTMLImageElement["isMap"]
  /** 与该元素关联的图像映射的部分 URL（以 # 开头） */
  usemap?: HTMLImageElement["useMap"]
}
export type UseImageReturn = UseAsyncStateReturn<
  HTMLImageElement | undefined,
  any[],
  true
>
/**
 * 在浏览器中响应式加载图片，你可以等待结果显示它，或者显示一个回退内容。
 *
 * @see https://vueuse.org/useImage
 * @param options 图片属性，与 <img> 标签中使用的属性相同
 * @param asyncStateOptions
 */
export declare function useImage<Shallow extends true>(
  options: MaybeRefOrGetter<UseImageOptions>,
  asyncStateOptions?: UseAsyncStateOptions<Shallow>,
): UseImageReturn
```
