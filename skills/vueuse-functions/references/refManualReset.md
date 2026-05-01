---
category: Reactivity
---

# refManualReset

创建一个带有手动重置功能的 ref。

## 用法

```ts
import { refManualReset } from '@vueuse/core'

const message = refManualReset('默认消息')

message.value = '消息已设置'

message.reset()

console.log(message.value) // '默认消息'
```

> [!NOTE]
> `refManualReset` 是浅层的，这可能会导致你的 UI 在值变化时不更新。
> 将你的值用 `reactive` 包裹可以实现深层响应式，但这种变通方法可能并不适用于所有用例。

## 类型声明

```ts
/**
 * 定义一种支持手动重置功能的 ref 形状。
 *
 * 该接口扩展了 Vue 中标准的 `Ref` 类型，并添加了一个 `reset` 方法。
 * `reset` 方法允许将 ref 手动重置为其默认值。
 */
export interface ManualResetRefReturn<T> extends Ref<T> {
  reset: Fn
}
/**
 * 创建一个带有手动重置功能的 ref。
 *
 * @see https://vueuse.org/refManualReset
 * @param defaultValue 将要设置的值。
 */
export declare function refManualReset<T>(
  defaultValue: MaybeRefOrGetter<T>,
): ManualResetRefReturn<T>
```
