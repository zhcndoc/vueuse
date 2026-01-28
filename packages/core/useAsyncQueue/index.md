---
category: Utilities
---

# useAsyncQueue

依次执行每个异步任务，并将当前任务的结果传递给下一个任务。

## 用法

```ts
import { useAsyncQueue } from '@vueuse/core'

function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000)
    }, 10)
  })
}

function p2(result: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000 + result)
    }, 20)
  })
}

const { activeIndex, result } = useAsyncQueue([p1, p2])

console.log(activeIndex.value) // 当前待处理任务的索引

console.log(result) // 任务结果
```

### 结果状态

结果数组中的每个任务都有一个 `state` 和一个 `data` 属性：

```ts
interface UseAsyncQueueResult<T> {
  state: 'aborted' | 'fulfilled' | 'pending' | 'rejected'
  data: T | null
}
```

### 失败时中断

默认情况下，如果一个任务失败，后续任务将不会执行。设置 `interrupt: false` 可使即使失败后仍继续执行。

```ts
const { result } = useAsyncQueue([p1, p2], {
  interrupt: false, // 即使 p1 失败也继续执行
})
```

### 回调函数

```ts
const { result } = useAsyncQueue([p1, p2], {
  onError() {
    console.log('某个任务失败了')
  },
  onFinished() {
    console.log('所有任务完成（或被中断）')
  },
})
```

### 中止信号

你可以传入一个 `AbortSignal` 来取消队列的执行。

```ts
const controller = new AbortController()

const { result } = useAsyncQueue([p1, p2], {
  signal: controller.signal,
})

// 之后，取消队列
controller.abort()
```
