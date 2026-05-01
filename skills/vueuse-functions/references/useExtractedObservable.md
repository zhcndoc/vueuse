---
category: '@RxJS'
---

# useExtractedObservable

将一个或多个 composable 中提取出的 RxJS [`Observable`](https://rxjs.dev/guide/observable) 用作输入，返回一个 `ref`，并在组件卸载时自动取消订阅。

在 observable 变更时自动取消订阅，并在组件卸载时自动取消订阅。

支持与 [`watch`](https://vuejs.org/guide/essentials/watchers.html#basic-example) 的所有重载相匹配的签名。

## 用法

<!-- TODO: import rxjs error if enable twoslash -->

```ts no-twoslash
import { useExtractedObservable } from '@vueuse/rxjs'
import ObservableSocket from 'observable-socket'
import { computed } from 'vue'
import { makeSocket, useUser } from '../some/lib/func'

// setup()
const user = useUser()
const lastMessage = useExtractedObservable(user, u => ObservableSocket.create(makeSocket(u.id)).down)
```

如果你想为一个可能出错的 `Observable` 添加自定义错误处理，可以提供可选的 `onError` 配置。若不提供，RxJS 会将传入 `Observable` 中的任何错误视为“未处理错误”，并在新的调用栈中抛出，且报告给 `window.onerror`（如果你恰好在 Node 中，则为 `process.on('error')`）。

```ts no-twoslash
import { useExtractedObservable } from '@vueuse/rxjs'
import { interval } from 'rxjs'
import { mapTo, scan, startWith, tap } from 'rxjs/operators'
import { shallowRef } from 'vue'

// setup()
const start = shallowRef(0)

const count = useExtractedObservable(
  start,
  (start) => {
    return interval(1000).pipe(
      mapTo(1),
      startWith(start),
      scan((total, next) => next + total),
      tap((n) => {
        if (n === 10)
          throw new Error('oops')
      })
    )
  },
  {
    onError: (err) => {
      console.log(err.message) // "oops"
    },
  }
)
```

如果你需要在被监听的 observable 完成时附加特殊行为，也可以提供可选的 `onComplete` 配置。

```ts no-twoslash
import { useExtractedObservable } from '@vueuse/rxjs'
import { interval } from 'rxjs'
import { mapTo, scan, startWith, takeWhile } from 'rxjs/operators'
import { shallowRef } from 'vue'

// setup()
const start = shallowRef(0)

const count = useExtractedObservable(
  start,
  (start) => {
    return interval(1000).pipe(
      mapTo(1),
      startWith(start),
      scan((total, next) => next + total),
      takeWhile(num => num < 10)
    )
  },
  {
    onComplete: () => {
      console.log('完成！')
    },
  }
)
```

如果你愿意，也可以将 `watch` 选项作为最后一个参数传入：

```ts no-twoslash
import { useExtractedObservable } from '@vueuse/rxjs'
import { interval } from 'rxjs'
import { mapTo, scan, startWith, takeWhile } from 'rxjs/operators'
import { shallowRef } from 'vue'

// setup()
const start = shallowRef<number>()

const count = useExtractedObservable(
  start,
  (start) => {
    return interval(1000).pipe(
      mapTo(1),
      startWith(start),
      scan((total, next) => next + total),
      takeWhile(num => num < 10)
    )
  },
  {},
  {
    immediate: false
  }
)
```

## 选项

| 选项           | 类型                 | 描述                               |
| -------------- | -------------------- | ---------------------------------- |
| `initialValue` | `T`                  | 在 Observable 发出值之前使用的值   |
| `onError`      | `(err: any) => void` | Observable 错误的错误处理器        |
| `onComplete`   | `() => void`         | Observable 完成时调用             |

## 返回值

返回一个只读的 `ShallowRef`，其中包含从提取出的 Observable 发出的最新值。

## 类型声明

```ts
export interface UseExtractedObservableOptions<
  E,
> extends UseObservableOptions<E> {
  onComplete?: () => void
}
export declare function useExtractedObservable<
  T extends MultiWatchSources,
  E,
  Immediate extends Readonly<boolean> = false,
>(
  sources: [...T],
  extractor: WatchExtractedObservableCallback<
    MapSources<T>,
    MapOldSources<T, Immediate>,
    E
  >,
  options?: UseExtractedObservableOptions<E>,
  watchOptions?: WatchOptions<Immediate>,
): DeepReadonly<ShallowRef<E>>
export declare function useExtractedObservable<
  T extends Readonly<MultiWatchSources>,
  E,
  Immediate extends Readonly<boolean> = false,
>(
  sources: T,
  extractor: WatchExtractedObservableCallback<
    MapSources<T>,
    MapOldSources<T, Immediate>,
    E
  >,
  options?: UseExtractedObservableOptions<E>,
  watchOptions?: WatchOptions<Immediate>,
): DeepReadonly<ShallowRef<E>>
export declare function useExtractedObservable<
  T,
  E,
  Immediate extends Readonly<boolean> = false,
>(
  sources: WatchSource<T>,
  extractor: WatchExtractedObservableCallback<
    T,
    Immediate extends true ? T | undefined : T,
    E
  >,
  options?: UseExtractedObservableOptions<E>,
  watchOptions?: WatchOptions<Immediate>,
): DeepReadonly<ShallowRef<E>>
export declare function useExtractedObservable<
  T extends object,
  E,
  Immediate extends Readonly<boolean> = false,
>(
  sources: T,
  extractor: WatchExtractedObservableCallback<
    T,
    Immediate extends true ? T | undefined : T,
    E
  >,
  options?: UseExtractedObservableOptions<E>,
  watchOptions?: WatchOptions<Immediate>,
): DeepReadonly<ShallowRef<E>>
```
