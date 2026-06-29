---
category: Utilities
related: useThrottleFn
---

# useDebounceFn

对函数执行进行防抖。

> 防抖就像一个过载的接待员：如果你一直不断提问，你的请求会被忽略，直到你停下来，给它一些时间来思考你最新的询问。

## 用法

```ts
import { useDebounceFn, useEventListener } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000)

useEventListener(window, 'resize', debouncedFn)
```

你还可以向此处传入第三个参数，用于设置最大等待时间，类似于 [lodash 防抖](https://lodash.com/docs/4.17.15#debounce)

```ts
import { useDebounceFn, useEventListener } from '@vueuse/core'

// If no invokation after 5000ms due to repeated input,
// the function will be called anyway.
const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000, { maxWait: 5000 })

useEventListener(window, 'resize', debouncedFn)
```

可选地，您可以使用 Promise 操作获取该函数的返回值。

```ts
import { useDebounceFn } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => 'response', 1000)

debouncedFn().then((value) => {
  console.log(value) // 'response'
})

// or use async/await
async function doRequest() {
  const value = await debouncedFn()
  console.log(value) // 'response'
}
```

由于当开发者不需要返回值时，未处理的拒绝错误会相当烦人，因此默认情况下，如果函数被取消，Promise **不会**被拒绝。你需要指定选项 `rejectOnCancel: true` 来捕获该拒绝。

```ts
import { useDebounceFn } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => 'response', 1000, { rejectOnCancel: true })

debouncedFn()
  .then((value) => {
    // do something
  })
  .catch(() => {
    // do something when canceled
  })

// calling it again will cancel the previous request and gets rejected
setTimeout(debouncedFn, 500)
```

## 取消

你可以通过调用 `cancel` 方法来取消任何待执行的操作。

```ts
import { useDebounceFn } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000)

debouncedFn()

// Cancel the pending execution before it runs
debouncedFn.cancel()
```

当你需要阻止去抖函数执行时，这很有用，例如在组件卸载时，或者当用户输入改变上下文时。

## 挂起状态

你可以使用 `isPending` 引用来检查是否有一个待执行项。

```ts
import { useDebounceFn } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000)

debouncedFn()
console.log(debouncedFn.isPending.value) // true

// After debounce time elapses or cancel is called
console.log(debouncedFn.isPending.value) // false
```

这对于在等待防抖函数执行时显示加载指示器或禁用 UI 元素很有用。

## 刷新

您可以使用 `flush` 方法立即执行挂起的调用。

```ts
import { useDebounceFn } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000)

debouncedFn()

// Execute the pending invocation immediately instead of waiting
debouncedFn.flush()
```

当您需要确保防抖函数立即执行时，这很有用，例如在离开页面之前或提交表单之前。

## 推荐阅读

- [**防抖与节流**：权威可视化指南](https://kettanaito.com/blog/debounce-vs-throttle)

## 类型声明

```ts
export type UseDebounceFnReturn<T extends FunctionArgs> =
  CancelablePromisifyFn<T>
/**
 * Debounce execution of a function.
 *
 * @see https://vueuse.org/useDebounceFn
 * @param  fn          A function to be executed after delay milliseconds debounced.
 * @param  ms          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  options     Options
 *
 * @return A new, debounced, function with isPending, cancel, and flush properties.
 */
export declare function useDebounceFn<T extends FunctionArgs>(
  fn: T,
  ms?: MaybeRefOrGetter<number>,
  options?: DebounceFilterOptions,
): UseDebounceFnReturn<T>
```
