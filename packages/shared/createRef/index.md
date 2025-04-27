---
category: Reactivity
---

# createRef

根据 `deep` 参数返回 `deepRef` 或 `shallowRef`。

## 使用方法

```ts
import { createRef } from '@vueuse/core'
import { isShallow, ref } from 'vue'

const initialData = 1

const shallowData = createRef(initialData)
const deepData = createRef(initialData, true)

isShallow(shallowData) // true
isShallow(deepData) // false
```
