---
category: State
related: createSharedComposable
---

# createGlobalState

将状态保留在全局范围内，以便在 Vue 实例之间重复使用。

## 用法

### 无持久性 (存储在内存中)

```ts
// store.ts
import { createGlobalState } from '@vueuse/core'
import { shallowRef } from 'vue'

export const useGlobalState = createGlobalState(
  () => {
    const count = shallowRef(0)
    return { count }
  }
)
```

更大的示例：

```ts
// store.ts
import { createGlobalState } from '@vueuse/core'
import { computed, shallowRef } from 'vue'

export const useGlobalState = createGlobalState(
  () => {
    // 状态
    const count = shallowRef(0)

    // 计算属性
    const doubleCount = computed(() => count.value * 2)

    // 动作
    function increment() {
      count.value++
    }

    return { count, doubleCount, increment }
  }
)
```

### 使用持久性

使用 `useStorage` 将数据存储在 `localStorage` 中：

```ts twoslash include store
// store.ts
import { createGlobalState, useStorage } from '@vueuse/core'

export const useGlobalState = createGlobalState(
  () => useStorage('vueuse-local-storage', 'initialValue'),
)
```

```ts
// @filename: store.ts
// @include: store
// ---cut---
// component.ts
import { useGlobalState } from './store'

export default defineComponent({
  setup() {
    const state = useGlobalState()
    return { state }
  },
})
```
