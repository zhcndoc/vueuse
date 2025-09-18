---
category: State
related: createGlobalState
---

# createSharedComposable

创建一个可在多个 Vue 实例中使用的可组合函数。

> [!WARNING]
> 在 **SSR** 环境中使用时，`createSharedComposable` 将 **自动回退** 到非共享版本。
> 这意味着每个调用将在 SSR 中创建一个新的实例，以避免 [跨请求状态污染](https://vue.zhcndoc.com/guide/scaling-up/ssr.html#cross-request-state-pollution)。

## 用法

```ts
import { createSharedComposable, useMouse } from '@vueuse/core'

const useSharedMouse = createSharedComposable(useMouse)

// CompA.vue
const { x, y } = useSharedMouse()

// CompB.vue - 将重用先前的状态，不会注册新的事件监听器
const { x, y } = useSharedMouse()
```
