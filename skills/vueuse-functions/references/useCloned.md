---
category: 工具
---

# useCloned

ref 的响应式克隆。默认情况下，它使用 `JSON.parse(JSON.stringify())` 来进行克隆。

## 用法

```ts
import { useCloned } from '@vueuse/core'

const original = ref({ key: 'value' })

const { cloned } = useCloned(original)

original.value.key = 'some new value'

console.log(cloned.value.key) // 'value'
```

对源的更改不会立即反映到克隆的 ref 中。
使用 `{ flush: 'sync' }` 可立即获取更新后的值。

```ts
const { cloned } = useCloned(original, { flush: 'sync' })

original.value.key = 'some new value'

console.log(cloned.value.key) // 'some new value'
```

## 手动克隆

```ts
import { useCloned } from '@vueuse/core'

const original = ref({ key: 'value' })

const { cloned, sync } = useCloned(original, { manual: true })

original.value.key = 'manual'

console.log(cloned.value.key) // 'value'

sync()

console.log(cloned.value.key)// 'manual'
```

## 自定义克隆函数

以 [`klona`](https://www.npmjs.com/package/klona) 为例：

```ts
import { useCloned } from '@vueuse/core'
import { klona } from 'klona'

const original = ref({ key: 'value' })

const { cloned, isModified, sync } = useCloned(original, { clone: klona })
```

## 类型声明

```ts
export interface UseClonedOptions<T = any> extends WatchOptions {
  /**
   * Custom clone function.
   *
   * By default, it use `JSON.parse(JSON.stringify(value))` to clone.
   */
  clone?: (source: T) => T
  /**
   * Manually sync the ref
   *
   * @default false
   */
  manual?: boolean
}
export interface UseClonedReturn<T> {
  /**
   * Cloned ref
   */
  cloned: Ref<T>
  /**
   * Ref indicates whether the cloned data is modified
   */
  isModified: Ref<boolean>
  /**
   * Sync cloned data with source manually
   */
  sync: () => void
}
export type CloneFn<F, T = F> = (x: F) => T
export declare function cloneFnJSON<T>(source: T): T
export declare function useCloned<T>(
  source: MaybeRefOrGetter<T>,
  options?: UseClonedOptions,
): UseClonedReturn<T>
```
