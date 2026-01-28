---
category: Reactivity
alias: asyncComputed
---

# computedAsync

用于异步函数的计算属性

## 用法

```ts
import { computedAsync } from '@vueuse/core'
import { shallowRef } from 'vue'

const name = shallowRef('jack')

const userInfo = computedAsync(
  async () => {
    return await mockLookUp(name.value)
  },
  null, /* 初始状态 */
)
```

### Evaluation 参数

你需要传递一个 ref 来跟踪异步函数的状态。

```ts
import { computedAsync } from '@vueuse/core'
import { shallowRef } from 'vue'

const evaluating = shallowRef(false)

const userInfo = computedAsync(
  async () => { /* 你的逻辑 */ },
  null,
  evaluating, // can also be passed via options: { evaluating }
)
```

### onCancel

当计算源在前一个异步函数解决之前发生变化时，你可能希望取消前一个函数。以下是如何与 fetch API 结合使用的示例。

```ts
import { computedAsync } from '@vueuse/core'
import { shallowRef } from 'vue'

const packageName = shallowRef('@vueuse/core')

const downloads = computedAsync(async (onCancel) => {
  const abortController = new AbortController()

  onCancel(() => abortController.abort())

  return await fetch(
    `https://api.npmjs.org/downloads/point/last-week/${packageName.value}`,
    { signal: abortController.signal },
  )
    .then(response => response.ok ? response.json() : { downloads: '—' })
    .then(result => result.downloads)
}, 0)
```

### 懒加载

默认情况下，`computedAsync` 在创建时立即开始解析，指定 `lazy: true` 可以使其在第一次访问时开始解析。

```ts
import { computedAsync } from '@vueuse/core'
import { shallowRef } from 'vue'

const evaluating = shallowRef(false)

const userInfo = computedAsync(
  async () => { /* 你的逻辑 */ },
  null,
  { lazy: true, evaluating },
)
```

### 错误处理

使用 `onError` 回调处理异步函数中的错误。

```ts
import { computedAsync } from '@vueuse/core'
import { shallowRef } from 'vue'

const name = shallowRef('jack')

const userInfo = computedAsync(
  async () => {
    return await mockLookUp(name.value)
  },
  null,
  {
    onError(e) {
      console.error('获取用户信息失败', e)
    },
  },
)
```

### 浅层 Ref

默认情况下，`computedAsync` 内部使用 `shallowRef`。设置 `shallow: false` 可改用深层响应式。

```ts
import { computedAsync } from '@vueuse/core'
import { shallowRef } from 'vue'

const name = shallowRef('jack')

const userInfo = computedAsync(
  async () => {
    return await fetchNestedData(name.value)
  },
  null,
  { shallow: false }, // 启用深层响应式
)
```

## 注意事项

- 与 Vue 内置的 `computed` 函数相似，`computedAsync` 会进行依赖跟踪，并在依赖更改时自动重新计算。注意，只有在第一次调用堆栈中引用的依赖才会被考虑。换句话说：**异步访问的依赖不会触发异步计算值的重新评估。**

- 与 Vue 内置的 `computed` 函数相反，无论其结果当前是否被跟踪，异步计算值的重新评估都会在依赖项发生更改时触发。
