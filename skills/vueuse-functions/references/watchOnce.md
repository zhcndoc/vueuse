---
category: Watch
---

# watchOnce

带有 `{ once: true }` 的监听值的简写。一旦回调触发一次，watcher 就会停止。
完整细节请参阅 [Vue's docs](https://vuejs.org/guide/essentials/watchers.html#once-watchers)。

## 用法

类似于 `watch`，但带有 `{ once: true }`

```ts
import { watchOnce } from '@vueuse/core'

watchOnce(source, () => {
  // 仅触发一次
  console.log('source changed!')
})
```

## 类型声明

```ts
export declare function watchOnce<T>(
  source: WatchSource<T>,
  cb: WatchCallback<T, T | undefined>,
  options?: Omit<WatchOptions<true>, "once">,
): WatchHandle
export declare function watchOnce<T extends Readonly<MultiWatchSources>>(
  source: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, true>>,
  options?: Omit<WatchOptions<true>, "once">,
): WatchHandle
export declare function watchOnce<T extends object>(
  source: T,
  cb: WatchCallback<T, T | undefined>,
  options?: Omit<WatchOptions<true>, "once">,
): WatchHandle
```
