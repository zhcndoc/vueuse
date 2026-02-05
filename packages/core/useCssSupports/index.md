---
category: 浏览器
---

# useCssSupports

兼容 SSR 的响应式 [`CSS.supports`](https://developer.mozilla.org/docs/Web/API/CSS/supports_static)。

## 用法

```ts
import { useCssSupports } from '@vueuse/core'

const { isSupported } = useCssSupports('container-type', 'scroll-state')
```
