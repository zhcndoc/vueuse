---
category: Watch
---

# watchTriggerable

可手动触发的 Watch

## 用法

一个 `watch` 包装器，支持手动触发 `WatchCallback`，并额外返回一个 `trigger`，用于立即执行 `WatchCallback`。

```ts
import { watchTriggerable } from '@vueuse/core'
import { nextTick, shallowRef } from 'vue'

const source = shallowRef(0)

const { trigger, ignoreUpdates } = watchTriggerable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // 记录：Changed to bar!

// 通过 `trigger` 执行 WatchCallback 不需要等待
trigger() // 记录：Changed to bar!
```

### `onCleanup`

当你想手动调用一个使用了 onCleanup 参数的 `watch` 时；仅仅把 `WatchCallback` 拿出来直接调用，并不容易实现 `onCleanup` 参数。

使用 `watchTriggerable` 可以解决这个问题。

```ts
import { watchTriggerable } from '@vueuse/core'
import { shallowRef } from 'vue'

const source = shallowRef(0)

const { trigger } = watchTriggerable(
  source,
  async (v, _, onCleanup) => {
    let canceled = false
    onCleanup(() => canceled = true)

    await new Promise(resolve => setTimeout(resolve, 500))
    if (canceled)
      return

    console.log(`The value is "${v}"\n`)
  },
)

source.value = 1 // 无日志
await trigger() // 记录（500 ms 后）：The value is "1"
```

## 类型声明

```ts
export interface WatchTriggerableReturn<
  FnReturnT = void,
> extends WatchIgnorableReturn {
  /** 立即执行 `WatchCallback` */
  trigger: () => FnReturnT
}
type OnCleanup = (cleanupFn: () => void) => void
export type WatchTriggerableCallback<V = any, OV = any, R = void> = (
  value: V,
  oldValue: OV,
  onCleanup: OnCleanup,
) => R
export declare function watchTriggerable<T, FnReturnT>(
  source: WatchSource<T>,
  cb: WatchTriggerableCallback<T, T | undefined, FnReturnT>,
  options?: WatchWithFilterOptions<boolean>,
): WatchTriggerableReturn<FnReturnT>
export declare function watchTriggerable<
  T extends Readonly<MultiWatchSources>,
  FnReturnT,
>(
  sources: [...T],
  cb: WatchTriggerableCallback<
    MapSources<T>,
    MapOldSources<T, true>,
    FnReturnT
  >,
  options?: WatchWithFilterOptions<boolean>,
): WatchTriggerableReturn<FnReturnT>
export declare function watchTriggerable<T extends object, FnReturnT>(
  source: T,
  cb: WatchTriggerableCallback<T, T | undefined, FnReturnT>,
  options?: WatchWithFilterOptions<boolean>,
): WatchTriggerableReturn<FnReturnT>
```
