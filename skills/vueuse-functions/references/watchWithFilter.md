---
category: Watch
---

# watchWithFilter

`watch` 附加 EventFilter 控制。

## 用法

类似于 `watch`，但提供了一个额外的选项 `eventFilter`，它将应用于回调函数。

```ts
import { debounceFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') }, // 回调将以 500ms 防抖方式调用
  {
    eventFilter: debounceFilter(500), // 节流过滤器、可暂停过滤器或自定义过滤器
  },
)
```

## 类型声明

```ts
export interface WatchWithFilterOptions<Immediate>
  extends WatchOptions<Immediate>, ConfigurableEventFilter {}
export declare function watchWithFilter<
  T,
  Immediate extends Readonly<boolean> = false,
>(
  source: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchWithFilterOptions<Immediate>,
): WatchHandle
export declare function watchWithFilter<
  T extends Readonly<MultiWatchSources>,
  Immediate extends Readonly<boolean> = false,
>(
  sources: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options?: WatchWithFilterOptions<Immediate>,
): WatchHandle
export declare function watchWithFilter<
  T extends object,
  Immediate extends Readonly<boolean> = false,
>(
  source: T,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchWithFilterOptions<Immediate>,
): WatchHandle
```
