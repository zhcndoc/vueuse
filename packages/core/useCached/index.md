---
category: Utilities
---

# useCached

使用自定义比较器缓存一个 ref。

比较器签名为 `(newSourceValue, cachedValue) => boolean`。
当它返回 `true` 时，缓存保持不变。当它返回 `false` 时，缓存会更新为新的源值。

## 使用

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
