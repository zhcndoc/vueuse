---
category: 工具
---

# useCached

使用自定义比较器缓存一个 ref。

比较器签名是 `(newSourceValue, cachedValue) => boolean`。
当它返回 `true` 时，缓存将保持不变。当它返回 `false` 时，缓存会更新为新的源值。

## 用法

```ts
import { useCached } from '@vueuse/core'
import { shallowRef } from 'vue'

interface Data {
  value: number
  extra: number
}

const source = shallowRef<Data>({ value: 42, extra: 0 })
const cached = useCached(source, (newSourceValue, cachedValue) => newSourceValue.value === cachedValue.value)

source.value = {
  value: 42,
  extra: 1,
}

console.log(cached.value) // { value: 42, extra: 0 }

source.value = {
  value: 43,
  extra: 1,
}

console.log(cached.value) // { value: 43, extra: 1 }
```

## 类型声明

```ts
export interface UseCachedOptions<D extends boolean = true>
  extends ConfigurableDeepRefs<D>, WatchOptions {}
export declare function useCached<T, D extends boolean = true>(
  refValue: Ref<T>,
  comparator?: (newSourceValue: T, cachedValue: T) => boolean,
  options?: UseCachedOptions<D>,
): UseCachedReturn<T, D>
export type UseCachedReturn<
  T = any,
  D extends boolean = true,
> = ShallowOrDeepRef<T, D>
```
