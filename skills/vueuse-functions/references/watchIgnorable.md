---
category: Watch
alias: ignorableWatch
---

# watchIgnorable

可忽略的 watch

## 用法

扩展的 `watch`，额外返回 `ignoreUpdates(updater)` 和 `ignorePrevAsyncUpdates()`，用于忽略来源的特定更新。

```ts
import { watchIgnorable } from '@vueuse/core'
import { nextTick, shallowRef } from 'vue'

const source = shallowRef('foo')

const { stop, ignoreUpdates } = watchIgnorable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // 记录：已更改为 bar！

ignoreUpdates(() => {
  source.value = 'foobar'
})
await nextTick() //（什么也没有发生）

source.value = 'hello'
await nextTick() // 记录：已更改为 hello！

ignoreUpdates(() => {
  source.value = 'ignored'
})
source.value = 'logged'

await nextTick() // 记录：已更改为 logged！
```

## WatchOptionFlush 时机

`watchIgnorable` 接受与 `watch` 相同的选项，并使用相同的默认值。
因此，默认情况下该组合式函数使用 `flush: 'pre'`。

## `ignorePrevAsyncUpdates`

此功能仅适用于异步的 `flush`：`'pre'` 和 `'post'`。如果使用 `flush: 'sync'`，`ignorePrevAsyncUpdates()` 将不执行任何操作，因为 watch 会在每次源更新后立即触发。即使在 sync flush 下也仍然提供它，以便代码可以更通用。

```ts
import { watchIgnorable } from '@vueuse/core'
import { nextTick, shallowRef } from 'vue'

const source = shallowRef('foo')

const { ignorePrevAsyncUpdates } = watchIgnorable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // 记录：已更改为 bar！

source.value = 'good'
source.value = 'by'
ignorePrevAsyncUpdates()

await nextTick() //（什么也没有发生）

source.value = 'prev'
ignorePrevAsyncUpdates()
source.value = 'after'

await nextTick() // 记录：已更改为 after！
```

## 推荐阅读

- [Ignorable Watch](https://patak.dev/vue/ignorable-watch.html) - 作者 [@patak-dev](https://github.com/patak-dev)

## 类型声明

```ts
export type IgnoredUpdater = (updater: () => void) => void
export type IgnoredPrevAsyncUpdates = () => void
export interface WatchIgnorableReturn {
  ignoreUpdates: IgnoredUpdater
  ignorePrevAsyncUpdates: IgnoredPrevAsyncUpdates
  stop: WatchStopHandle
}
export declare function watchIgnorable<
  T,
  Immediate extends Readonly<boolean> = false,
>(
  source: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchWithFilterOptions<Immediate>,
): WatchIgnorableReturn
export declare function watchIgnorable<
  T extends Readonly<MultiWatchSources>,
  Immediate extends Readonly<boolean> = false,
>(
  sources: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options?: WatchWithFilterOptions<Immediate>,
): WatchIgnorableReturn
export declare function watchIgnorable<
  T extends object,
  Immediate extends Readonly<boolean> = false,
>(
  source: T,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchWithFilterOptions<Immediate>,
): WatchIgnorableReturn
/** @deprecated 使用 `watchIgnorable` 代替 */
export declare const ignorableWatch: typeof watchIgnorable
