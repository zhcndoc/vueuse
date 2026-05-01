---
category: Watch
---

# watchAtMost

`watch`，带有触发次数限制。

## 用法

类似于 `watch`，额外提供了一个 `count` 选项，用于设置回调函数被触发的次数。达到次数后，watch 会自动停止。

```ts
import { watchAtMost } from '@vueuse/core'

watchAtMost(
  source,
  () => { console.log('触发！') }, // 最多触发 3 次
  {
    count: 3, // 触发次数
  },
)
```

## 类型声明

```ts
export interface WatchAtMostOptions<
  Immediate,
> extends WatchWithFilterOptions<Immediate> {
  count: MaybeRefOrGetter<number>
}
export interface WatchAtMostReturn {
  stop: WatchStopHandle
  pause: () => void
  resume: () => void
  count: ShallowRef<number>
}
export declare function watchAtMost<
  T,
  Immediate extends Readonly<boolean> = false,
>(
  sources: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options: WatchAtMostOptions<Immediate>,
): WatchAtMostReturn
export declare function watchAtMost<
  T extends Readonly<MultiWatchSources>,
  Immediate extends Readonly<boolean> = false,
>(
  sources: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options: WatchAtMostOptions<Immediate>,
): WatchAtMostReturn
export declare function watchAtMost<
  T extends object,
  Immediate extends Readonly<boolean> = false,
>(
  sources: T,
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options: WatchAtMostOptions<Immediate>,
): WatchAtMostReturn
```
