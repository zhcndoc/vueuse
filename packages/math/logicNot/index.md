---
category: '@Math'
alias: not
---

# logicNot

`NOT` 条件的响应式封装。

## 用法

```ts
import { logicNot } from '@vueuse/math'
import { whenever } from '@vueuse/core'

const a = ref(true)

whenever(logicNot(a), () => {
  console.log('a 现在是 false！')
})
```
