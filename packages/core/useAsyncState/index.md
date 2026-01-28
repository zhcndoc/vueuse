---
category: State
---

# useAsyncState

响应式异步状态。不会阻塞你的设置函数，并且在 promise 准备就绪后会触发更改。状态默认为 `shallowRef`。

## 用法

```ts
import { useAsyncState } from '@vueuse/core'
import axios from 'axios'

const { state, isReady, isLoading, error } = useAsyncState(
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(t => t.data),
  { id: null },
)
```

### 返回值

| 属性               | 说明                                       |
| ------------------ | ------------------------------------------ |
| `state`            | 异步函数的结果                             |
| `isReady`          | 当 promise 至少已解析一次时为 `true`       |
| `isLoading`        | 当 promise 正在等待时为 `true`             |
| `error`            | 如果 promise 被拒绝则为错误信息            |
| `execute`          | 重新执行异步函数，可选延迟                 |
| `executeImmediate` | 立即重新执行（相当于 `execute(0)` 的简写） |

### 等待结果

返回值是可等待的，因此你可以在异步函数或 `<script setup>` 中使用 `await`：

```ts
const { state, isReady } = await useAsyncState(fetchData, null)
// `state` 现在已经有数据了，`isReady` 为 true
```

### 手动执行

将 `immediate: false` 设置为不在创建时自动执行。

```vue
<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'

const { state, execute, executeImmediate } = useAsyncState(action, '', { immediate: false })

async function action(event) {
  await new Promise(resolve => setTimeout(resolve, 500))
  return `${event.target.textContent} 被点击啦!`
}
</script>

<template>
  <p>状态: {{ state }}</p>

  <button class="button" @click="executeImmediate">
    立即执行
  </button>

  <button class="ml-2 button" @click="event => execute(500, event)">
    延迟执行
  </button>
</template>
```

### 选项

```ts
const { state } = useAsyncState(promise, initialState, {
  // 创建时是否立即执行（默认：true）
  immediate: true,
  // 首次执行的延迟时间，单位毫秒（默认：0）
  delay: 0,
  // 每次执行前是否重置状态为初始值（默认：true）
  resetOnExecute: true,
  // 是否使用 shallowRef 作为状态（默认：true）
  shallow: true,
  // 是否抛出错误而不是捕获（默认：false）
  throwError: false,
  // Promise 解析时调用
  onSuccess(data) {
    console.log('成功:', data)
  },
  // Promise 拒绝时调用
  onError(error) {
    console.error('错误:', error)
  },
})
```
