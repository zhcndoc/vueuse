---
category: Watch
alias: pausableWatch
---

# watchPausable

可暂停的 watch

::: tip

[可暂停侦听器](https://vue.zhcndoc.com/api/reactivity-core.html#watch) 功能已 [自 3.5 版本](https://github.com/vuejs/core/pull/9651) 起加入 Vue，在支持的版本上请使用 `const { stop, pause, resume } = watch(watchSource, callback)` 语法替代。

:::

## 使用方法

像正常使用 `watch` 一样，但返回额外的 `pause()` 和 `resume()` 函数以进行控制。

```typescript
import { watchPausable } from '@vueuse/core'
import { nextTick, shallowRef } from 'vue'

const source = shallowRef('foo')

const { stop, pause, resume } = watchPausable(
  source,
  v => console.log(`Changed to ${v}!`),
)

source.value = 'bar'
await nextTick() // 改变为 bar！

pause()

source.value = 'foobar'
await nextTick() // （没有发生变化）

resume()

source.value = 'hello'
await nextTick() // 改变为 hello！
```
