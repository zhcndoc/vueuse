---
category: Network
---

# useFetch

响应式 [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 提供了中止请求、在请求发送前拦截请求、当 URL 变化时自动重新请求、以及创建带有预定义选项的 `useFetch` 功能的能力。

<CourseLink href="https://vueschool.io/lessons/vueuse-utilities-usefetch-and-reactify?friend=vueuse">通过 Vue School 的这个免费 视频课程学习 useFetch！</CourseLink>

::: tip
在使用 Nuxt 3 时，此功能将 **不会** 自动导入，而是使用 Nuxt 内置的 [`useFetch()`](https://v3.nuxtjs.org/api/composables/use-fetch)。如果您想使用 VueUse 中的函数，请使用显式导入。
:::

## 用法

### 基本用法

`useFetch` 函数可以通过简单提供一个 URL 来使用。URL 可以是一个字符串或一个 `ref`。`data` 对象将包含请求的结果，`error` 对象将包含任何错误，而 `isFetching` 对象将指示请求是否正在加载。

```ts
import { useFetch } from '@vueuse/core'

const { isFetching, error, data } = useFetch(url)
```

### 异步用法

`useFetch` 也可以像普通的 fetch 一样被 await。请注意，任何异步组件都必须将使用它的组件包裹在 `<Suspense>` 标签中。您可以在 [官方 Vue 3 文档](https://vuejs.org/guide/built-ins/suspense.html) 中了解更多关于 suspense API 的信息。

```ts
import { useFetch } from '@vueuse/core'

const { isFetching, error, data } = await useFetch(url)
```

### URL 变化时重新请求

使用 `ref` 作为 URL 参数将允许 `useFetch` 函数在 URL 更改时自动触发另一个请求。

```ts
const url = ref('https://my-api.com/user/1')

const { data } = useFetch(url, { refetch: true })

url.value = 'https://my-api.com/user/2' // 将触发另一个请求
```

### 防止请求立即发送

将 `immediate` 选项设置为 false 将防止请求在调用 `execute` 函数之前发送。

```ts
const { execute } = useFetch(url, { immediate: false })

execute()
```

### 中止请求

可以使用 `useFetch` 函数中的 `abort` 函数中止请求。`canAbort` 属性指示请求是否可以中止。

```ts
const { abort, canAbort } = useFetch(url)

setTimeout(() => {
  if (canAbort.value)
    abort()
}, 100)
```

也可以通过使用 `timeout` 属性自动中止请求。当达到给定的超时时间时，它将调用 `abort` 函数。

```ts
const { data } = useFetch(url, { timeout: 100 })
```

### 拦截请求

`beforeFetch` 选项可以在请求发送之前拦截请求并修改请求选项和 URL。

```ts
const { data } = useFetch(url, {
  async beforeFetch({ url, options, cancel }) {
    const myToken = await getMyToken()

    if (!myToken)
      cancel()

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${myToken}`,
    }

    return {
      options,
    }
  },
})
```

`afterFetch` 选项可以在响应数据更新之前拦截响应数据。

```ts
const { data } = useFetch(url, {
  afterFetch(ctx) {
    if (ctx.data.title === 'HxH')
      ctx.data.title = 'Hunter x Hunter' // 修改响应数据

    return ctx
  },
})
```

`onFetchError` 选项可以在将响应数据和错误更新之前拦截它们，前提是 `updateDataOnError` 设置为 `true`。

```ts
const { data } = useFetch(url, {
  updateDataOnError: true,
  onFetchError(ctx) {
    // ctx.data 在 5xx 响应时可能为 null
    if (ctx.data === null)
      ctx.data = { title: 'Hunter x Hunter' } // 修改响应数据

    ctx.error = new Error('自定义错误') // 修改错误
    return ctx
  },
})

console.log(data.value) // { title: 'Hunter x Hunter' }
```

### 设置请求方法和返回类型

通过在 `useFetch` 的末尾添加适当的方法可以设置请求方法和返回类型。

```ts
// 请求将使用 GET 方法发送，并且数据将解析为 JSON
const { data } = useFetch(url).get().json()

// 请求将使用 POST 方法发送，并且数据将解析为文本
const { data } = useFetch(url).post().text()

// 或使用选项设置方法

// 请求将使用 GET 方法发送，并且数据将解析为 blob
const { data } = useFetch(url, { method: 'GET' }, { refetch: true }).blob()
```

### 创建自定义实例

`createFetch` 函数将返回一个带有任何预配置选项的 useFetch 函数。这对于在使用相同基础 URL 或需要授权头的应用程序中与 API 进行交互非常有用。

```ts
const useMyFetch = createFetch({
  baseUrl: 'https://my-api.com',
  options: {
    async beforeFetch({ options }) {
      const myToken = await getMyToken()
      options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})

const { isFetching, error, data } = useMyFetch('users')
```

如果您想在预配置实例和新生成实例之间控制 `beforeFetch`、`afterFetch` 和 `onFetchError` 的行为，您可以提供一个 `combination` 选项以切换 `overwrite` 或 `chaining`。

```ts
const useMyFetch = createFetch({
  baseUrl: 'https://my-api.com',
  combination: 'overwrite',
  options: {
    // 仅当新生成实例未传递 beforeFetch 时，预配置实例中的 beforeFetch 将运行
    async beforeFetch({ options }) {
      const myToken = await getMyToken()
      options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
  },
})

// 使用 useMyFetch 的 beforeFetch
const { isFetching, error, data } = useMyFetch('users')

// 使用自定义 beforeFetch
const { isFetching, error, data } = useMyFetch('users', {
  async beforeFetch({ url, options, cancel }) {
    const myToken = await getMyToken()

    if (!myToken)
      cancel()

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${myToken}`,
    }

    return {
      options,
    }
  },
})
```

您可以通过在 `afterFetch` 或 `onFetchError` 中调用 `execute` 方法来重新执行请求。以下是刷新令牌的简单示例：

```ts
let isRefreshing = false
const refreshSubscribers: Array<() => void> = []

const useMyFetch = createFetch({
  baseUrl: 'https://my-api.com',
  options: {
    async beforeFetch({ options }) {
      const myToken = await getMyToken()
      options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
    afterFetch({ data, response, context, execute }) {
      if (needRefreshToken) {
        if (!isRefreshing) {
          isRefreshing = true
          refreshToken().then((newToken) => {
            if (newToken.value) {
              isRefreshing = false
              setMyToken(newToken.value)
              onRrefreshed()
            }
            else {
              refreshSubscribers.length = 0
              // 处理刷新令牌错误
            }
          })
        }

        return new Promise((resolve) => {
          addRefreshSubscriber(() => {
            execute().then((response) => {
              resolve({ data, response })
            })
          })
        })
      }

      return { data, response }
    },
    // 或使用 onFetchError 和 updateDataOnError
    updateDataOnError: true,
    onFetchError({ error, data, response, context, execute }) {
      // 同样与 afterFetch
      return { error, data }
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})

async function refreshToken() {
  const { data, execute } = useFetch<string>('refresh-token', {
    immediate: false,
  })

  await execute()
  return data
}

function onRrefreshed() {
  refreshSubscribers.forEach(callback => callback())
  refreshSubscribers.length = 0
}

function addRefreshSubscriber(callback: () => void) {
  refreshSubscribers.push(callback)
}

const { isFetching, error, data } = useMyFetch('users')
```

### 事件

`onFetchResponse` 和 `onFetchError` 将分别在 fetch 请求响应和错误时触发。

```ts
const { onFetchResponse, onFetchError } = useFetch(url)

onFetchResponse((response) => {
  console.log(response.status)
})

onFetchError((error) => {
  console.error(error.message)
})
```
