---
category: Utilities
---

# createDisposableDirective

用于编写可销毁指令的工具。在 `mounted` 指令钩子中创建的响应式副作用会被追踪，并在指令卸载时自动销毁。

## 用法

创建一个使用 `createDisposableDirective` 的指令

```ts
import { useMouse } from '@vueuse/core'
import { createDisposableDirective } from '@vueuse/shared'

export const VDirective = createDisposableDirective({
  mounted(el, binding) {
    const value = binding.value
    if (typeof value === 'function') {
      // `useMouse` 事件监听器会在指令卸载时自动移除
      const { x, y } = useMouse()
      watch(x, val => value(val))
    }
  }
})
```
