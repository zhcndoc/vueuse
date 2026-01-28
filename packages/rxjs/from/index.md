---
category: '@RxJS'
---

# from / fromEvent

RxJS 的 [`from()`](https://rxjs.dev/api/index/function/from) 和 [`fromEvent()`](https://rxjs.dev/api/index/function/fromEvent) 的包装器，使它们能够接受 `ref`。

## 用法

<!-- TODO: import rxjs error if enable twoslash -->

```ts no-twoslash
import { from, fromEvent, toObserver, useSubscription } from '@vueuse/rxjs'
import { interval } from 'rxjs'
import { map, mapTo, takeUntil, withLatestFrom } from 'rxjs/operators'
import { shallowRef, useTemplateRef } from 'vue'

const count = shallowRef(0)
const button = useTemplateRef('buttonRef')

useSubscription(
  interval(1000)
    .pipe(
      mapTo(1),
      takeUntil(fromEvent(button, 'click')),
      withLatestFrom(from(count, {
        immediate: true,
        deep: false,
      })),
      map(([curr, total]) => curr + total),
    )
    .subscribe(toObserver(count)), // 与 ).subscribe(val => (count.value = val)) 相同
)
```

## from

The `from` function can accept either a standard RxJS `ObservableInput` or a Vue `ref`. When passed a ref, it creates an Observable that emits whenever the ref's value changes.

### Watch Options

When using `from` with a ref, you can pass Vue's `WatchOptions`:

| Option      | Type                        | Description                        |
| ----------- | --------------------------- | ---------------------------------- |
| `immediate` | `boolean`                   | Emit the current value immediately |
| `deep`      | `boolean`                   | Deeply watch nested objects        |
| `flush`     | `'pre' \| 'post' \| 'sync'` | Timing of the callback flush       |

## fromEvent

The `fromEvent` function extends RxJS's `fromEvent` to accept a ref to an element. When the ref's value changes (e.g., after the component mounts), it automatically subscribes to the new element.

```ts no-twoslash
import { fromEvent, useSubscription } from '@vueuse/rxjs'
import { useTemplateRef } from 'vue'

const button = useTemplateRef('buttonRef')

// Will automatically subscribe when the button element becomes available
useSubscription(
  fromEvent(button, 'click').subscribe(() => {
    console.log('clicked!')
  })
)
```
