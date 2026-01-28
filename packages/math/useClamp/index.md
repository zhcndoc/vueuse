---
category: '@Math'
---

# useClamp

在两个其他值之间响应式地夹取一个值。

## 用法

```ts
import { useClamp } from '@vueuse/math'

const min = shallowRef(0)
const max = shallowRef(10)
const value = useClamp(0, min, max)
```

### 可写的 Ref

当你传入一个可变的 `ref` 时，返回的值是一个**可写的计算属性**，在设置值时会进行夹取：

```ts
import { useClamp } from '@vueuse/math'

const number = shallowRef(0)
const clamped = useClamp(number, 0, 10)

clamped.value = 15 // clamped.value 将被夹取为 10
clamped.value = -5 // clamped.value 将被夹取为 0
```

### 只读模式

当你传入一个 getter 函数或只读的 ref 时，返回的值将是一个只读的计算属性：

```ts
import { useClamp } from '@vueuse/math'

const value = ref(5)
const clamped = useClamp(() => value.value * 2, 0, 10)

// clamped.value 是根据 getter 计算出来的
```

### 响应式边界

所有参数（value、min、max）都可以是响应式的：

```ts
import { useClamp } from '@vueuse/math'

const value = shallowRef(5)
const min = shallowRef(0)
const max = shallowRef(10)

const clamped = useClamp(value, min, max)

max.value = 3 // clamped.value 会自动变成 3
```
