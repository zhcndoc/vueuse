---
category: 工具
related: useThrottleFn
---

# useDebounceFn

延迟执行函数。

> 延迟是一个被过载的服务员：如果你不停地问他问题，直到你停下来并给他一些时间来考虑你最新的问题，他将会忽略你的请求。

## 使用方法

```ts
import { useDebounceFn, useEventListener } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => {
  // 做一些事情
}, 1000)

useEventListener(window, 'resize', debouncedFn)
```

你还可以向它传递第三个参数，表示最大等待时间，类似于 [lodash debounce](https://lodash.com/docs/4.17.15#debounce)

```ts
import { useDebounceFn, useEventListener } from '@vueuse/core'

// 如果在重复输入后 5000ms 内没有调用，该函数将被调用。
const debouncedFn = useDebounceFn(() => {
  // 做一些事情
}, 1000, { maxWait: 5000 })

useEventListener(window, 'resize', debouncedFn)
```

此外，你可以使用 promise 操作来获取函数的返回值。

```ts
import { useDebounceFn } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => 'response', 1000)

debouncedFn().then((value) => {
  console.log(value) // 'response'
})

// 或者使用 async/await
async function doRequest() {
  const value = await debouncedFn()
  console.log(value) // 'response'
}
```

由于未处理的拒绝错误在开发者不需要返回值时相当烦人，promise 在**默认情况下**如果函数被取消，则**不会**被拒绝。你需要指定选项 `rejectOnCancel: true` 来捕获拒绝。

```ts
import { useDebounceFn } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => 'response', 1000, { rejectOnCancel: true })

debouncedFn()
  .then((value) => {
    // 做一些事情
  })
  .catch(() => {
    // 在被取消时做一些事情
  })

// calling it again will cancel the previous request and gets rejected
setTimeout(debouncedFn, 500)
```

## 取消

您可以通过调用 `cancel` 方法来取消任何待执行任务。

```ts
import { useDebounceFn } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000)

debouncedFn()

// Cancel the pending execution before it runs
debouncedFn.cancel()
```

当你需要防止防抖函数执行时，这很有用，例如在组件卸载时，或当用户输入切换上下文时。

## 待处理状态

你可以使用 `isPending` ref 检查是否存在待执行的操作。

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

这对于在等待防抖函数执行时显示加载指示器或禁用界面元素很有用。

## 刷新

你可以使用 `flush` 方法立即执行待处理的调用。

```ts
import { useDebounceFn } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000)

debouncedFn()

// Execute the pending invocation immediately instead of waiting
debouncedFn.flush()
```

当你需要确保防抖函数立即执行时，这很有用，例如在离开页面或提交表单之前。

## 推荐阅读

- [**防抖 vs 节流**：明确的视觉指南](https://kettanaito.com/blog/debounce-vs-throttle)
