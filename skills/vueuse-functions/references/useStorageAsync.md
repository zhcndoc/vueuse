---
category: State
---

# useStorageAsync

支持异步的响应式存储。

## 用法

基础用法请参考 `useStorage`。

## 等待首次加载

当用户进入你的应用时，`useStorageAsync()` 会开始从异步存储中加载值，
有时在一开始你可能会拿到默认初始值，而不是存储中实际保存的值。

```ts
import { useStorageAsync } from '@vueuse/core'

const accessToken = useStorageAsync('access.token', '', SomeAsyncStorage)

// accessToken.value 可能在异步存储就绪之前为空
console.log(accessToken.value) // ""

setTimeout(() => {
  // 一段时间后，异步存储已就绪
  console.log(accessToken.value) // "存储中实际保存的值"
}, 500)
```

在这种情况下，你可以等待存储准备完成，返回值也是一个 `Promise`，
因此你可以在模板或脚本中等待它解析。

```ts
// 如果你的环境支持，请使用顶层 await
const accessToken = await useStorageAsync('access.token', '', SomeAsyncStorage)

console.log(accessToken.value) // "存储中实际保存的值"
```

如果你必须等待多个存储，请把它们放进 `Promise.allSettled()`

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

在选项中有一个名为 `onReady` 的回调：

```ts
import { useStorageAsync } from '@vueuse/core'

// 使用 ES2024 的 Promise.withResolvers，你也可以使用任何 Deferred 对象或 EventBus 来做同样的事。
const { promise, resolve } = Promise.withResolvers()

const accessToken = useStorageAsync('access.token', '', SomeAsyncStorage, {
  onReady(value) {
    resolve(value)
  }
})

// 在 main.ts 中
router.onReady(async () => {
  // 让我们等待 accessToken 加载完成
  await promise

  // 现在 accessToken 已加载完成，我们可以安全地挂载应用

  app.mount('app')
})
```

也可以直接将 `resolve` 作为回调：

```ts
const accessToken = useStorageAsync('access.token', '', SomeAsyncStorage, {
  onReady: resolve
})
```

## 类型声明

```ts
export interface UseStorageAsyncOptions<T> extends Omit<
  UseStorageOptions<T>,
  "serializer"
> {
  /**
   * 自定义数据序列化
   */
  serializer?: SerializerAsync<T>
  /**
   * 首次值加载完成时的钩子。
   */
  onReady?: (value: T) => void
}
export declare function useStorageAsync(
  key: string,
  initialValue: MaybeRefOrGetter<string>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<string>,
): RemovableRef<string> & Promise<RemovableRef<string>>
export declare function useStorageAsync(
  key: string,
  initialValue: MaybeRefOrGetter<boolean>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<boolean>,
): RemovableRef<boolean> & Promise<RemovableRef<boolean>>
export declare function useStorageAsync(
  key: string,
  initialValue: MaybeRefOrGetter<number>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<number>,
): RemovableRef<number> & Promise<RemovableRef<number>>
export declare function useStorageAsync<T>(
  key: string,
  initialValue: MaybeRefOrGetter<T>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<T>,
): RemovableRef<T> & Promise<RemovableRef<T>>
export declare function useStorageAsync<T = unknown>(
  key: string,
  initialValue: MaybeRefOrGetter<null>,
  storage?: StorageLikeAsync,
  options?: UseStorageAsyncOptions<T>,
): RemovableRef<T> & Promise<RemovableRef<T>>
```
