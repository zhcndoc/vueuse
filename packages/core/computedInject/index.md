---
category: 组件
---

# computedInject

结合 `computed` 和 `inject` 使用。适用于基于注入的值创建计算属性。

## 用法

祖先组件

```ts twoslash include main
import type { InjectionKey, Ref } from 'vue'
import { provide, ref } from 'vue'

interface Item {
  key: number
  value: string
}

export const ArrayKey: InjectionKey<Ref<Item[]>> = Symbol('symbol-key')

const array = ref([{ key: 1, value: '1' }, { key: 2, value: '2' }, { key: 3, value: '3' }])

provide(ArrayKey, array)
```

后代组件

```ts
// @filename: provider.ts
// @include: main
// ---cut---
import { computedInject } from '@vueuse/core'

import { ArrayKey } from './provider'

const computedArray = computedInject(ArrayKey, (source) => {
  const arr = [...source.value]
  arr.unshift({ key: 0, value: 'all' })
  return arr
})
```

### 默认值

你可以提供一个默认值，当父组件没有提供注入时使用该默认值。

```ts
import { computedInject } from '@vueuse/core'

const computedArray = computedInject(
  ArrayKey,
  (source) => {
    return source.value.map(item => item.value)
  },
  ref([]), // 默认的 source 值
)
```

### 工厂默认值

传入 `true` 作为第四个参数，将默认值视为工厂函数。

```ts
import { computedInject } from '@vueuse/core'

const computedArray = computedInject(
  ArrayKey,
  (source) => {
    return source.value.map(item => item.value)
  },
  () => ref([]), // 默认值的工厂函数
  true, // 将默认值视为工厂函数
)
```

### 可写的 computed

你也可以通过传入带有 `get` 和 `set` 函数的对象，创建一个可写的计算属性。

```ts
import { computedInject } from '@vueuse/core'

const computedArray = computedInject(ArrayKey, {
  get(source) {
    return source.value.map(item => item.value)
  },
  set(value) {
    // 处理设置的值
    console.log('Setting value:', value)
  },
})
```
