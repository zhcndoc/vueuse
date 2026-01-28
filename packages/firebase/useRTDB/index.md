---
category: '@Firebase'
---

# useRTDB

响应式的 [Firebase 实时数据库](https://firebase.google.com/docs/database) 绑定。使得**始终将本地数据与远程数据库同步**变得简单直观。

## 用法

```ts
import { useRTDB } from '@vueuse/firebase/useRTDB'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const app = initializeApp({ /* 配置 */ })
const db = getDatabase(app)

// 在 setup() 中
const todos = useRTDB(db.ref('todos'))
```

## 选项

| 选项           | 类型                   | 默认值          | 说明                       |
| -------------- | ---------------------- | --------------- | -------------------------- |
| `autoDispose`  | `boolean`              | `true`          | 组件卸载时是否自动取消订阅 |
| `errorHandler` | `(err: Error) => void` | `console.error` | 数据库错误的自定义处理函数 |

## 返回值

返回一个 `Ref<T | undefined>`，该引用会在数据库值更改时自动更新。

## 复用数据库引用

你可以通过传递 `autoDispose: false` 来复用数据库引用。

```ts
const todos = useRTDB(db.ref('todos'), { autoDispose: false })
```

或者使用核心包中的 `createGlobalState`

```ts twoslash include store
// @filename: store.ts
// ---cut---
// store.ts
import { createGlobalState } from '@vueuse/core'
import { useRTDB } from '@vueuse/firebase/useRTDB'

export const useTodos = createGlobalState(
  () => useRTDB(db.ref('todos')),
)
```

```vue
<!-- app.vue -->
<script setup lang="ts">
// @include: store
// ---cut---
import { useTodos } from './store'

const todos = useTodos()
</script>
```
