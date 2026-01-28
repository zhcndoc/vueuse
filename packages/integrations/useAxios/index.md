---
category: '@Integrations'
---

# useAxios

对 [`axios`](https://github.com/axios/axios) 的封装。

## 安装

```bash
npm i axios@^1
```

## 用法

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { data, isFinished } = useAxios('/api/posts')
```

### 返回值

| 属性               | 类型                         | 说明                       |
| ------------------ | ---------------------------- | -------------------------- |
| `data`             | `Ref<T>`                     | 响应数据                   |
| `response`         | `Ref<AxiosResponse>`         | 完整的 axios 响应          |
| `error`            | `Ref<unknown>`               | 请求失败时的错误           |
| `isFinished`       | `Ref<boolean>`               | 请求是否完成（成功或错误） |
| `isLoading`        | `Ref<boolean>`               | 请求是否进行中             |
| `isAborted`        | `Ref<boolean>`               | 请求是否已被中止           |
| `abort` / `cancel` | `() => void`                 | 中止当前请求               |
| `execute`          | `(url?, config?) => Promise` | 执行/重新执行请求          |

### 使用 Axios 实例

```ts
import { useAxios } from '@vueuse/integrations/useAxios'
import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
})

const { data, isFinished } = useAxios('/posts', instance)
```

### 使用配置选项

```ts
import { useAxios } from '@vueuse/integrations/useAxios'
import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
})

const { data, isFinished } = useAxios('/posts', { method: 'POST' }, instance)
```

### 手动执行

当你不传递 `url` 时，默认不会立即发送请求：

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios()
execute(url)
```

`execute` 函数的 `url` 参数是可选的 —— 新的 `url2` 会替代原来的 `url1`：

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios(url1, {}, { immediate: false })
execute(url2)
```

`execute` 函数也可以只接受配置对象：

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios(url1, { method: 'GET' }, { immediate: false })
execute({ params: { key: 1 } })
execute({ params: { key: 2 } })
```

### 等待结果

返回值是一个可等待（thenable）的对象，因此你可以使用 `await`：

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { data, isFinished, error } = await useAxios('/api/posts')
// 此时 data 已被填充
```

或者等待 `execute` 函数的结果：

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios()
const result = await execute(url)
```

### 选项

```ts
const { data } = useAxios('/api/posts', config, instance, {
  // 是否立即执行（默认：如果提供了 url 则为 true）
  immediate: true,
  // 是否使用 shallowRef 来储存数据（默认：true）
  shallow: true,
  // 新的 execute 执行时是否中止上一个请求（默认：true）
  abortPrevious: true,
  // 执行前是否重置数据（默认：false）
  resetOnExecute: false,
  // 初始数据值
  initialData: [],
  // 回调函数
  onSuccess: data => console.log('成功:', data),
  onError: error => console.error('错误:', error),
  onFinish: () => console.log('已完成'),
})
```
