---
category: 浏览器
---

# useSSRWidth

用于设置全局视口宽度，该宽度将在渲染依赖视口宽度的 SSR 组件时使用，例如 [`useMediaQuery`](./useMediaQuery.md) 或 [`useBreakpoints`](./useBreakpoints.md)

## 用法

```ts
import { provideSSRWidth } from '@vueuse/core'

const app = createApp(App)

provideSSRWidth(500, app)
```

或者在根组件中

```vue
<script setup lang="ts">
import { provideSSRWidth } from '@vueuse/core'

provideSSRWidth(500)
</script>
```

如果需要在子组件中获取所提供的值

```vue
<script setup lang="ts">
import { useSSRWidth } from '@vueuse/core'

const width = useSSRWidth()
</script>
```

## 类型声明

```ts
export declare function useSSRWidth(): number | undefined
export declare function provideSSRWidth(
  width: number | null,
  app?: App<unknown>,
): void
```
