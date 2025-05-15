---
category: Watch
---

# watchOnce

用于观看值的缩写形式，带有 `{ once: true }`。回调函数触发一次后，观察者将停止。

有关完整细节，请参见 [Vue 的文档](https://vue.zhcndoc.com/guide/essentials/watchers.html#once-watchers)。

## 使用方法

类似于 `watch`，但带有 `{ once: true }`。

```typescript
import { watchOnce } from '@vueuse/core'

watchOnce(source, () => {
  // 仅触发一次
  console.log('源发生变化！')
})
```
