---
category: Utilities
---

# useMemoize

缓存依赖于参数的函数结果，并保持其响应性。它还可以用于异步函数，并将重用现有的 promises 来避免同时获取相同的数据。

::: tip
结果不会自动清除。如果你不再需要结果，请调用 `clear()`，或使用自己的缓存机制来避免内存泄漏。
:::

## 使用方法

```ts
import { useMemoize } from '@vueuse/core'

const getUser = useMemoize(
  async (userId: number): Promise<UserData> =>
    axios.get(`users/${userId}`).then(({ data }) => data),
)

const user1 = await getUser(1) // 请求 users/1
const user2 = await getUser(2) // 请求 users/2
// ...
const user1 = await getUser(1) // 从缓存中获取

// ...
const user1 = await getUser.load(1) // 请求 users/1

// ...
getUser.delete(1) // 删除用户1的缓存
getUser.clear() // 清除完整缓存
```

结合 `computed` 或 `computedAsync` 可以实现响应性：

```ts
import { computedAsync, useMemoize } from '@vueuse/core'

const getUser = useMemoize(
  async (userId: number): Promise<UserData> =>
    axios.get(`users/${userId}`).then(({ data }) => data),
)
// ---cut---
const user1 = computedAsync(() => getUser(1))
// ...
await getUser.load(1) // 也会更新 user1
```

### 解析缓存键

缓存的键由传递给函数的参数确定，并且默认情况下将使用 `JSON.stringify` 进行序列化。
这将使相等的对象接收相同的缓存键。如果你想自定义键，可以通过 `getKey` 传递。

```ts
import { useMemoize } from '@vueuse/core'
// ---cut---
const getUser = useMemoize(
  async (userId: number, headers: AxiosRequestHeaders): Promise<UserData> =>
    axios.get(`users/${userId}`, { headers }).then(({ data }) => data),
  {
    // 仅使用 userId 获取/设置缓存，忽略 headers
    getKey: (userId, headers) => userId,
  },
)
```

### 自定义缓存机制

默认情况下，结果会缓存到一个 `Map` 中。您可以通过传递 `cache` 作为选项，使用以下结构来实现您自己的机制：

```ts
export interface MemoizeCache<Key, Value> {
  /**
   * 获取键的值
   */
  get: (key: Key) => Value | undefined
  /**
   * 为键设置值
   */
  set: (key: Key, value: Value) => void
  /**
   * 返回键是否存在的标志
   */
  has: (key: Key) => boolean
  /**
   * 删除键的值
   */
  delete: (key: Key) => void
  /**
   * 清除缓存
   */
  clear: () => void
}
```
