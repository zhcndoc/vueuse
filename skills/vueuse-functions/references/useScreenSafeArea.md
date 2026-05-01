---
category: Browser
---

# useScreenSafeArea

响应式 `env(safe-area-inset-*)`

![image](https://webkit.org/wp-content/uploads/safe-areas-1.png)

## 用法

为了让页面能够在屏幕中完整渲染，必须先在 `viewport` meta 标签中设置额外的属性 `viewport-fit=cover`，viewport meta 标签可以像这样：

```html
<meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
```

然后我们就可以在组件中使用 `useScreenSafeArea`，如下所示：

```ts
import { useScreenSafeArea } from '@vueuse/core'

const {
  top,
  right,
  bottom,
  left,
} = useScreenSafeArea()
```

更多详情，你可以参考这份文档：[为 iPhone X 设计网站](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)

## 组件用法

```vue
<template>
  <UseScreenSafeArea top right bottom left>
    content
  </UseScreenSafeArea>
</template>
```

## 类型声明

```ts
export interface UseScreenSafeAreaReturn {
  top: ShallowRef<string>
  right: ShallowRef<string>
  bottom: ShallowRef<string>
  left: ShallowRef<string>
  update: () => void
}
/**
 * 响应式 `env(safe-area-inset-*)`
 *
 * @see https://vueuse.org/useScreenSafeArea
 */
export declare function useScreenSafeArea(): UseScreenSafeAreaReturn
```
