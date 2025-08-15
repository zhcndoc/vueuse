---
category: Reactivity
---

# extendRef

向 Ref 添加额外属性。

## 用法

> 请注意，额外属性将无法在 Vue 的模板中访问。

```ts
import { extendRef } from '@vueuse/core'
import { shallowRef } from 'vue'

const myRef = shallowRef('content')

const extended = extendRef(myRef, { foo: 'extra data' })

extended.value === 'content'
extended.foo === '额外数据'
```

Refs 将被解封装并具有响应性

```ts
import { extendRef } from '@vueuse/core'
// ---cut---
const myRef = shallowRef('content')
const extraRef = shallowRef('extra')

const extended = extendRef(myRef, { extra: extraRef })

extended.value === 'content'
extended.extra === 'extra'

extended.extra = 'new data' // 将触发更新
extraRef.value === 'new data'
```
