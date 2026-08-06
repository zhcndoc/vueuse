---
category: 实用工具
---

# createDisposableDirective

用于编写可释放指令的工具。在 `mounted` 指令钩子中创建的响应式副作用将被跟踪，并在指令卸载时自动释放。

## 用法

创建一个使用 `createDisposableDirective` 的指令

```ts
import { useMouse } from '@vueuse/core'
import { createDisposableDirective } from '@vueuse/shared'

export const VDirective = createDisposableDirective({
  mounted(el, binding) {
    const value = binding.value
    if (typeof value === 'function') {
      // `useMouse` 的事件监听器会在指令卸载时自动移除
      const { x, y } = useMouse()
      watch(x, val => value(val))
    }
  }
})
```

## 类型声明

```ts
type originDirective<H, V, A> =
  FunctionDirective<H, V, string, A> | ObjectDirective<H, V, string, A>
/**
 * 用于编写可释放的指令。在指令的 `mounted` 钩子中创建的响应式副作用将被跟踪，并在指令卸载时自动释放。
 *
 * @see https://vueuse.org/createDisposableDirective
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function createDisposableDirective<
  H extends HTMLElement,
  V,
  A = any,
>(origin?: originDirective<H, V, A>): originDirective<H, V, A>
```
