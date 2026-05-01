---
category: Watch
---

# watchImmediate

带有 `{immediate: true}` 的 watch 简写

## 使用

类似于 `watch`，但带有 `{ immediate: true }`

```ts
import { watchImmediate } from '@vueuse/core'

const obj = ref('vue-use')

// 将值从某个外部 store/composables 中更改
obj.value = 'VueUse'

watchImmediate(obj, (updated) => {
  console.log(updated) // Console.log 将会被输出两次
})
```

## 类型声明

```ts
export declare function watchImmediate<T>(
  source: WatchSource<T>,
  cb: WatchCallback<T, T | undefined>,
  options?: Omit<WatchOptions<true>, "immediate">,
): WatchHandle
export declare function watchImmediate<T extends Readonly<MultiWatchSources>>(
  source: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, true>>,
  options?: Omit<WatchOptions<true>, "immediate">,
): WatchHandle
export declare function watchImmediate<T extends object>(
  source: T,
  cb: WatchCallback<T, T | undefined>,
  options?: Omit<WatchOptions<true>, "immediate">,
): WatchHandle
```
