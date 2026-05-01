---
category: 监听
---

# whenever

用于监听值变为 truthy 的简写。

## 用法

```js
import { useAsyncState, whenever } from '@vueuse/core'

const { state, isReady } = useAsyncState(
  fetch('https://jsonplaceholder.typicode.com/todos/1').then(t => t.json()),
  {},
)

whenever(isReady, () => console.log(state))
```

```ts
import { whenever } from '@vueuse/core'
// ---cut---
// 这里
whenever(ready, () => console.log(state))

// 等价于：
watch(ready, (isReady) => {
  if (isReady)
    console.log(state)
})
```

### 回调函数

与 `watch` 相同，回调将以 `cb(value, oldValue, onInvalidate)` 的形式被调用。

```ts
import { whenever } from '@vueuse/core'
// ---cut---
whenever(height, (current, lastHeight) => {
  if (current > lastHeight)
    console.log(`高度增加了 ${current - lastHeight}`)
})
```

### 计算值

与 `watch` 相同，你可以传入一个 getter 函数来在每次变化时进行计算。

```ts
import { whenever } from '@vueuse/core'
// ---cut---
// 这里
whenever(
  () => counter.value === 7,
  () => console.log('counter 现在是 7！'),
)
```

### 选项

选项及默认值与 `watch` 相同。

```ts
import { whenever } from '@vueuse/core'
// ---cut---
// 这里
whenever(
  () => counter.value === 7,
  () => console.log('counter 现在是 7！'),
  { flush: 'sync' },
)
```

## 类型声明

```ts
type Truthy<T> = T extends false | null | undefined ? never : T
export interface WheneverOptions<
  Immediate = boolean,
> extends WatchOptions<Immediate> {
  /**
   * 仅在条件满足时触发一次
   *
   * 覆盖 `WatchOptions` 中的 `once` 选项
   *
   * @default false
   */
  once?: boolean
}
/**
 * 监听值变为 truthy 的简写
 *
 * @see https://vueuse.org/whenever
 */
export declare function whenever<T>(
  source: WatchSource<T>,
  cb: WatchCallback<Truthy<T>, T | undefined>,
  options?: WheneverOptions<true>,
): WatchHandle
export declare function whenever<T>(
  source: WatchSource<T>,
  cb: WatchCallback<Truthy<T>, T>,
  options?: WheneverOptions<false>,
): WatchHandle
```
