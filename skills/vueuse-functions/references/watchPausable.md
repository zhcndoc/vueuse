---
category: Watch
alias: pausableWatch
---

# watchPausable

可暂停的 watch

::: info
此函数将在未来版本中移除。
:::

::: tip

Vue 已从 [3.5](https://github.com/vuejs/core/pull/9651) 开始添加了 [Pausable Watcher](https://vuejs.org/api/reactivity-core.html#watch)，请改用 `const { stop, pause, resume } = watch(watchSource, callback)`。

:::

## 用法

像平常一样使用 `watch`，但会额外返回 `pause()` 和 `resume()` 函数用于控制。

```ts
import { watchPausable } from '@vueuse/core'
import { nextTick, shallowRef } from 'vue'

const source = shallowRef('foo')

const { stop, pause, resume } = watchPausable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // 已变更为 bar！

pause()

source.value = 'foobar'
await nextTick() // （没有发生任何事）

resume()

source.value = 'hello'
await nextTick() // 已变更为 hello！
```

## 类型声明

```ts
export interface WatchPausableReturn extends Pausable {
  stop: WatchStopHandle
}
export type WatchPausableOptions<Immediate> =
  WatchWithFilterOptions<Immediate> & PausableFilterOptions
/** @deprecated 使用 Vue 内置的 `watch` 代替。此函数将在未来版本中移除。 */
export declare function watchPausable<
  T,
  Immediate extends Readonly<boolean> = false,
>(
  source: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchPausableOptions<Immediate>,
): WatchPausableReturn
/** @deprecated 使用 Vue 内置的 `watch` 代替。此函数将在未来版本中移除。 */
export declare function watchPausable<
  T extends Readonly<MultiWatchSources>,
  Immediate extends Readonly<boolean> = false,
>(
  sources: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options?: WatchPausableOptions<Immediate>,
): WatchPausableReturn
/** @deprecated 使用 Vue 内置的 `watch` 代替。此函数将在未来版本中移除。 */
export declare function watchPausable<
  T extends object,
  Immediate extends Readonly<boolean> = false,
>(
  source: T,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchPausableOptions<Immediate>,
): WatchPausableReturn
/** @deprecated 使用 Vue 内置的 `watch` 代替。此函数将在未来版本中移除。 */
export declare const pausableWatch: typeof watchPausable
```
