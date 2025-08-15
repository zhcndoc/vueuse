---
category: Utilities
---

# makeDestructurable

使对象和数组具有等价的解构性能。详见[这篇博文](https://antfu.me/posts/destructuring-with-object-or-array/)获取更多详情。

## 用法

TypeScript 示例：

```ts twoslash include main
import { makeDestructurable } from '@vueuse/core'

const foo = { name: 'foo' }
const bar = 1024

const obj = makeDestructurable(
  { foo, bar } as const,
  [foo, bar] as const,
)
```

用法：

```ts twoslash
// @include: main
// ---cut---
let { foo, bar } = obj
let [foo, bar] = obj
```
