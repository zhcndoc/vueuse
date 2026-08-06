---
category: 状态
---

# useAsyncState

响应式异步状态。不会阻塞你的 setup 函数，并会在 Promise 准备就绪后触发变更。默认情况下，该状态是一个 `shallowRef`。

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

| 属性               | 描述                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `state`            | 异步函数的结果                                                                                                                 |
| `isReady`          | 最新一次执行成功解析时为 `true`。每次执行时重置为 `false`，如果执行被拒绝则保持为 `false`                                      |
| `isLoading`        | Promise 处于等待状态时为 `true`                                                                                                |
| `error`            | Promise 被拒绝时的错误                                                                                                         |
| `execute`          | 重新执行异步函数，可选择延迟时间                                                                                               |
| `executeImmediate` | 立即重新执行（`execute(0)` 的简写）                                                                                            |

### 等待结果

返回值支持 thenable，因此你可以在异步函数或 `<script setup>` 中使用 `await`：

```ts
const { state, isReady } = await useAsyncState(fetchData, null)
// `state` 现在已填充，`isReady` 为 true
```

### 手动执行

将 `immediate: false` 设置为禁止在创建时自动执行。

```vue
<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'

const { state, execute, executeImmediate } = useAsyncState(action, '', { immediate: false })

async function action(event) {
  await new Promise(resolve => setTimeout(resolve, 500))
  return `${event.target.textContent} clicked!`
}
</script>

<template>
  <p>状态：{{ state }}</p>

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
  // 创建时立即执行（默认值：true）
  immediate: true,
  // 首次执行前的延迟时间，单位为毫秒（默认值：0）
  delay: 0,
  // 每次执行前将状态重置为初始值（默认值：true）
  resetOnExecute: true,
  // 对状态使用 shallowRef（默认值：true）
  shallow: true,
  // 抛出错误而不是捕获错误（默认值：false）
  throwError: false,
  // Promise 解析时调用
  onSuccess(data) {
    console.log('Success:', data)
  },
  // Promise 被拒绝时调用
  onError(error) {
    console.error('Error:', error)
  },
})
```

## 类型声明

```ts
export interface UseAsyncStateReturnBase<
  Data,
  Params extends any[],
  Shallow extends boolean,
> {
  state: Shallow extends true ? Ref<Data> : Ref<UnwrapRef<Data>>
  isReady: Ref<boolean>
  isLoading: Ref<boolean>
  error: Ref<unknown>
  execute: (delay?: number, ...args: Params) => Promise<Data | undefined>
  executeImmediate: (...args: Params) => Promise<Data | undefined>
}
export type UseAsyncStateReturn<
  Data,
  Params extends any[],
  Shallow extends boolean,
> = UseAsyncStateReturnBase<Data, Params, Shallow> &
  PromiseLike<UseAsyncStateReturnBase<Data, Params, Shallow>>
export interface UseAsyncStateOptions<Shallow extends boolean, D = any> {
  /**
   * 当 "immediate" 为 true 时首次执行 promise 的延迟时间，单位为毫秒。
   *
   * @default 0
   */
  delay?: number
  /**
   * 函数调用后立即执行 promise。
   * 如果设置了延迟，则会应用该延迟。
   *
   * 当设置为 false 时，需要手动执行。
   *
   * @default true
   */
  immediate?: boolean
  /**
   * 捕获错误时的回调。
   */
  onError?: (e: unknown) => void
  /**
   * 捕获成功时的回调。
   * @param {D} data
   */
  onSuccess?: (data: D) => void
  /**
   * 执行 promise 前将状态设置为 initialState。
   *
   * 当多次调用 execute 函数时，这可能会很有用（例如刷新数据）。
   * 当设置为 false 时，当前状态会保持不变，直到 promise 解析完成。
   *
   * @default true
   */
  resetOnExecute?: boolean
  /**
   * 使用 shallowRef。
   *
   * @default true
   */
  shallow?: Shallow
  /**
   *
   * 执行 execute 函数时抛出错误。
   *
   * @default false
   */
  throwError?: boolean
}
/**
 * 响应式异步状态。不会阻塞 setup 函数，并会在 promise 就绪后触发更新。
 *
 * @see https://vueuse.org/useAsyncState
 * @param promise         待解析的 promise / 异步函数
 * @param initialState    初始状态，在首次求值完成前使用
 * @param options
 */
export declare function useAsyncState<
  Data,
  Params extends any[] = any[],
  Shallow extends boolean = true,
>(
  promise: Promise<Data> | ((...args: Params) => Promise<Data>),
  initialState: MaybeRef<Data>,
  options?: UseAsyncStateOptions<Shallow, Data>,
): UseAsyncStateReturn<Data, Params, Shallow>
```
