---
category: State
---

# useLastChanged

记录上次更改的时间戳

## 用法

```ts
import { useLastChanged } from '@vueuse/core'
import { nextTick } from 'vue'

const a = ref(0)
const lastChanged = useLastChanged(a)

a.value = 1

await nextTick()

console.log(lastChanged.value) // 1704709379457
```

默认情况下，更改会在下一个 tick 上记录（使用 `flush: 'post'` 的 `watch()`）。如果希望立即记录更改，请将 `flush: 'sync'` 作为第二个参数传入。

```ts
import { useLastChanged } from '@vueuse/core'

const a = ref(0)
const lastChanged = useLastChanged(a, { flush: 'sync' })

a.value = 1

console.log(lastChanged.value) // 1704709379457
```

## 类型声明

```ts
export interface UseLastChangedOptions<
  Immediate extends boolean,
  InitialValue extends number | null | undefined = undefined,
> extends WatchOptions<Immediate> {
  initialValue?: InitialValue
}
export type UseLastChangedReturn =
  Readonly<ShallowRef<number | null>> | Readonly<ShallowRef<number>>
/**
 * 记录最后一次更改的时间戳
 *
 * @see https://vueuse.org/useLastChanged
 */
export declare function useLastChanged(
  source: WatchSource,
  options?: UseLastChangedOptions<false>,
): Readonly<ShallowRef<number | null>>
export declare function useLastChanged(
  source: WatchSource,
  options: UseLastChangedOptions<true> | UseLastChangedOptions<boolean, number>,
): Readonly<ShallowRef<number>>
```
