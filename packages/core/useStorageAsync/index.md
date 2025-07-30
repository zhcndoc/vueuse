---
category: State
---

# useStorageAsync

具有异步支持的响应式 Storage。

## 用法

基本用法请参考 `useStorage`。

## 等待首次加载

当用户进入你的应用时，`useStorageAsync()` 会开始从异步存储加载值，
有时你可能会先得到默认初始值，而非存储中真实的值。

```ts
import { useStorageAsync } from '@vueuse/core'

const accessToken = useStorageAsync('access.token', '', SomeAsyncStorage)

// 在异步存储准备好之前，accessToken.value 可能为空
console.log(accessToken.value) // ""

setTimeout(() => {
  // 一段时间后，异步存储准备好
  console.log(accessToken.value) // "存储中真实的值"
}, 500)
```

在这种情况下，你可以等待存储准备好，返回的值也是一个 `Promise`，
因此你可以在模板或脚本中等待它的解析。

```ts
// 如果环境支持，可使用顶层 await
const accessToken = await useStorageAsync('access.token', '', SomeAsyncStorage)

console.log(accessToken.value) // "存储中真实的值"
```

如果必须等待多个存储，放入 `Promise.allSettled()` 中：

```ts
router.onReady(async () => {
  await Promise.allSettled([
    accessToken,
    refreshToken,
    userData,
  ])

  app.mount('app')
})
```

选项中有一个名为 `onReady` 的回调：

```ts
import { useStorageAsync } from '@vueuse/core'

// 使用 ES2024 Promise.withResolvers，你也可以使用任何 Deferred 对象或事件总线来实现相同功能。
const { promise, resolve } = Promise.withResolvers()

const accessToken = useStorageAsync('access.token', '', SomeAsyncStorage, {
  onReady(value) {
    resolve(value)
  }
})

// 在 main.ts 中
router.onReady(async () => {
  // 等待 accessToken 加载完成
  await promise

  // 现在 accessToken 已经加载完成，可以安全挂载应用

  app.mount('app')
})
```

也可以直接将 `resolve` 作为回调使用：

```ts
const accessToken = useStorageAsync('access.token', '', SomeAsyncStorage, {
  onReady: resolve
})
```
