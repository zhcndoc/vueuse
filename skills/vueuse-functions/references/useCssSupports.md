---
category: Browser
---

# useCssSupports

兼容 SSR 且具备响应式的 [`CSS.supports`](https://developer.mozilla.org/docs/Web/API/CSS/supports_static)。

## 用法

```ts
import { useCssSupports } from '@vueuse/core'

const { isSupported } = useCssSupports('container-type', 'scroll-state')
```

## 类型声明

```ts
export interface UseCssSupportsOptions extends ConfigurableWindow {
  ssrValue?: boolean
}
export interface UseCssSupportsReturn extends Supportable {}
export declare function useCssSupports(
  property: MaybeRefOrGetter<string>,
  value: MaybeRefOrGetter<string>,
  options?: UseCssSupportsOptions,
): UseCssSupportsReturn
export declare function useCssSupports(
  conditionText: MaybeRefOrGetter<string>,
  options?: UseCssSupportsOptions,
): UseCssSupportsReturn
```
