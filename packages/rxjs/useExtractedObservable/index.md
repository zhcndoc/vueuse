---
category: '@RxJS'
---

# useExtractedObservable

从一个或多个组合式中提取并使用 RxJS [`Observable`](https://rxjs.dev/guide/observable)，返回一个 `ref`，并在组件卸载时自动取消订阅。

在可观察对象发生变化时自动取消订阅，并在组件卸载时自动取消订阅。

支持与 [`watch`](https://vue.zhcndoc.com/guide/essentials/watchers.html#basic-example) 的所有重载签名匹配的签名。

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

如果你想要为可能出错的 `Observable` 添加自定义错误处理，你可以提供一个可选的 `onError` 配置。如果没有提供，RxJS 将把提供的 `Observable` 中的任何错误视为 “未处理的错误”，并且它将在一个新的调用栈中抛出，并报告给 `window.onerror` (或者如果你恰好在 Node 中，则为 `process.on('error')`)。

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

如果需要，在观察的可观察对象完成时附加特殊行为，你还可以提供一个可选的 `onComplete` 配置。

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
      console.log('Done!')
    },
  }
)
```

如果需要，你还可以将 `watch` 选项作为最后一个参数传递：

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
