---
category: Watch
alias: throttledWatch
---

# watchThrottled

节流监听。回调函数在指定时长内最多只会被调用一次。

## 用法

类似于 `watch`，但额外提供了 `throttle`、`trailing` 和 `leading` 选项，这些选项将应用于回调函数。

```ts
import { watchThrottled } from '@vueuse/core'

watchThrottled(
  source,
  () => { console.log('changed!') },
  { throttle: 500 },
)
```

### 选项

| Option     | Type                       | Default | Description                               |
| ---------- | -------------------------- | ------- | ----------------------------------------- |
| `throttle` | `MaybeRefOrGetter<number>` | `0`     | 节流间隔，单位为毫秒（可以是响应式的）     |
| `trailing` | `boolean`                  | `true`  | 在尾部触发                                |
| `leading`  | `boolean`                  | `true`  | 在头部触发                                |

所有标准的 `watch` 选项（`deep`、`immediate`、`flush` 等）也都支持。

### 头部和尾部

控制回调何时被调用：

```ts
import { watchThrottled } from '@vueuse/core'

// 仅在每个节流周期开始时调用
watchThrottled(source, callback, {
  throttle: 500,
  leading: true,
  trailing: false,
})

// 仅在每个节流周期结束时调用
watchThrottled(source, callback, {
  throttle: 500,
  leading: false,
  trailing: true,
})
```

## 工作原理

本质上等同于以下代码的简写：

```ts
import { throttleFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: throttleFilter(500),
  },
)
```

## 类型声明

```ts
export interface WatchThrottledOptions<
  Immediate,
> extends WatchOptions<Immediate> {
  throttle?: MaybeRefOrGetter<number>
  trailing?: boolean
  leading?: boolean
}
export declare function watchThrottled<
  T,
  Immediate extends Readonly<boolean> = false,
>(
  source: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchThrottledOptions<Immediate>,
): WatchHandle
export declare function watchThrottled<
  T extends Readonly<MultiWatchSources>,
  Immediate extends Readonly<boolean> = false,
>(
  sources: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options?: WatchThrottledOptions<Immediate>,
): WatchHandle
export declare function watchThrottled<
  T extends object,
  Immediate extends Readonly<boolean> = false,
>(
  source: T,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchThrottledOptions<Immediate>,
): WatchHandle
/** @deprecated use `watchThrottled` instead */
export declare const throttledWatch: typeof watchThrottled
```
