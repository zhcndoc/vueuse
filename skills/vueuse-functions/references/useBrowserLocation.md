---
category: Browser
---

# useBrowserLocation

响应式浏览器位置

> 注意：如果你正在使用 Vue Router，请改用 Vue Router 提供的 [`useRoute`](https://router.vuejs.org/guide/advanced/composition-api.html)。

## 用法

```ts
import { useBrowserLocation } from '@vueuse/core'

const location = useBrowserLocation()
```

## 组件用法

```vue
<UseBrowserLocation v-slot="location">
  浏览器位置：{{ location }}
</UseBrowserLocation>
```

## 类型声明

```ts
export interface UseBrowserLocationOptions extends ConfigurableWindow {}
export interface BrowserLocationState {
  readonly trigger: string
  readonly state?: any
  readonly length?: number
  readonly origin?: string
  hash?: string
  host?: string
  hostname?: string
  href?: string
  pathname?: string
  port?: string
  protocol?: string
  search?: string
}
export type UseBrowserLocationReturn = Ref<BrowserLocationState>
/**
 * 响应式浏览器位置。
 *
 * @see https://vueuse.org/useBrowserLocation
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useBrowserLocation(
  options?: UseBrowserLocationOptions,
): UseBrowserLocationReturn
```
