---
category: Browser
---

# useSSRWidth

用于设置一个全局视口宽度，该宽度将在渲染依赖于视口宽度的 SSR 组件时使用，例如 [`useMediaQuery`](../useMediaQuery/index.md) 或 [`useBreakpoints`](../useBreakpoints/index.md)

## 用法

```ts
import { provideSSRWidth } from '@vueuse/core'

const app = createApp(App)

provideSSRWidth(500, app)
```

或在根组件中

```vue
<script setup lang="ts">
import { provideSSRWidth } from '@vueuse/core'

provideSSRWidth(500)
</script>
```

如果您在子组件中需要它，可以检索提供的值。

```vue
<script setup lang="ts">
import { useSSRWidth } from '@vueuse/core'

const width = useSSRWidth()
</script>
```
