---
category: '@Integrations'
---

# useAxios

[`axios`](https://github.com/axios/axios) 的封装。

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

| 属性               | 类型                         | 描述                                  |
| ------------------ | ---------------------------- | ------------------------------------- |
| `data`             | `Ref<T>`                     | 响应数据                              |
| `response`         | `Ref<AxiosResponse>`         | 完整的 axios 响应                     |
| `error`            | `Ref<unknown>`               | 请求失败时的错误                      |
| `isFinished`       | `Ref<boolean>`               | 请求已完成（成功或错误）              |
| `isLoading`        | `Ref<boolean>`               | 请求正在进行中                        |
| `isAborted`        | `Ref<boolean>`               | 请求已中止                            |
| `abort` / `cancel` | `() => void`                 | 中止当前请求                          |
| `execute`          | `(url?, config?) => Promise` | 执行/重新执行请求                     |

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

当你不传入 `url` 时，请求不会立即发出：

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios()
execute(url)
```

`execute` 函数的 `url` 是可选的——`url2` 会替换 `url1`：

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios(url1, {}, { immediate: false })
execute(url2)
```

`execute` 函数可以只接收配置：

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios(url1, { method: 'GET' }, { immediate: false })
execute({ params: { key: 1 } })
execute({ params: { key: 2 } })
```

### 等待结果

返回值支持 thenable，因此你可以使用 `await`：

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { data, isFinished, error } = await useAxios('/api/posts')
// data 现在已填充
```

或者等待 execute 函数：

```ts
import { useAxios } from '@vueuse/integrations/useAxios'

const { execute } = useAxios()
const result = await execute(url)
```

### 选项

```ts
const { data } = useAxios('/api/posts', config, instance, {
  // 立即执行（默认：提供 url 时为 true）
  immediate: true,
  // 对 data 使用 shallowRef（默认：true）
  shallow: true,
  // 新执行时中止之前的请求（默认：true）
  abortPrevious: true,
  // 执行前重置 data（默认：false）
  resetOnExecute: false,
  // 初始数据值
  initialData: [],
  // 回调
  onSuccess: data => console.log('成功：', data),
  onError: error => console.error('错误：', error),
  onFinish: () => console.log('已完成'),
})
```

## 类型声明

```ts
export interface UseAxiosReturn<
  T,
  R = AxiosResponse<T>,
  _D = any,
  O extends UseAxiosOptions = UseAxiosOptions<T>,
> {
  /**
   * Axios 响应
   */
  response: ShallowRef<R | undefined>
  /**
   * Axios 响应数据
   */
  data: O extends UseAxiosOptionsWithInitialData<T>
    ? Ref<T>
    : Ref<T | undefined>
  /**
   * 指示请求是否已完成
   */
  isFinished: Ref<boolean>
  /**
   * 指示请求当前是否正在加载
   */
  isLoading: Ref<boolean>
  /**
   * 指示请求是否已取消
   */
  isAborted: Ref<boolean>
  /**
   * 可能发生的任何错误
   */
  error: ShallowRef<unknown | undefined>
  /**
   * 中止当前请求
   */
  abort: (message?: string | undefined) => void
  /**
   * `abort` 的别名
   */
  cancel: (message?: string | undefined) => void
  /**
   * `isAborted` 的别名
   */
  isCanceled: Ref<boolean>
}
export interface StrictUseAxiosReturn<
  T,
  R,
  D,
  O extends UseAxiosOptions = UseAxiosOptions<T>,
> extends UseAxiosReturn<T, R, D, O> {
  /**
   * 手动调用 axios 请求
   */
  execute: (
    url?: string | AxiosRequestConfig<D>,
    config?: AxiosRequestConfig<D>,
  ) => Promise<StrictUseAxiosReturn<T, R, D, O>>
}
export interface EasyUseAxiosReturn<T, R, D> extends UseAxiosReturn<T, R, D> {
  /**
   * 手动调用 axios 请求
   */
  execute: (
    url: string,
    config?: AxiosRequestConfig<D>,
  ) => Promise<EasyUseAxiosReturn<T, R, D>>
}
export interface UseAxiosOptionsBase<T = any> {
  /**
   * 使用 `useAxios` 时自动执行 axios 请求
   *
   */
  immediate?: boolean
  /**
   * 使用 shallowRef。
   *
   * @default true
   */
  shallow?: boolean
  /**
   * 发起新请求时中止之前的请求。
   *
   * @default true
   */
  abortPrevious?: boolean
  /**
   * 捕获错误时的回调。
   */
  onError?: (e: unknown) => void
  /**
   * 捕获成功时的回调。
   */
  onSuccess?: (data: T) => void
  /**
   * 执行 promise 前将状态设置为 initialState。
   */
  resetOnExecute?: boolean
  /**
   * 请求完成时的回调。
   */
  onFinish?: () => void
}
export interface UseAxiosOptionsWithInitialData<
  T,
> extends UseAxiosOptionsBase<T> {
  /**
   * 初始数据
   */
  initialData: T
}
export type UseAxiosOptions<T = any> =
  UseAxiosOptionsBase<T> | UseAxiosOptionsWithInitialData<T>
export declare function useAxios<
  T = any,
  R = AxiosResponse<T>,
  D = any,
  O extends UseAxiosOptionsWithInitialData<T> =
    UseAxiosOptionsWithInitialData<T>,
>(
  url: string,
  config?: AxiosRequestConfig<D>,
  options?: O,
): StrictUseAxiosReturn<T, R, D, O> & Promise<StrictUseAxiosReturn<T, R, D, O>>
export declare function useAxios<
  T = any,
  R = AxiosResponse<T>,
  D = any,
  O extends UseAxiosOptionsWithInitialData<T> =
    UseAxiosOptionsWithInitialData<T>,
>(
  url: string,
  instance?: AxiosInstance,
  options?: O,
): StrictUseAxiosReturn<T, R, D, O> & Promise<StrictUseAxiosReturn<T, R, D, O>>
export declare function useAxios<
  T = any,
  R = AxiosResponse<T>,
  D = any,
  O extends UseAxiosOptionsWithInitialData<T> =
    UseAxiosOptionsWithInitialData<T>,
>(
  url: string,
  config: AxiosRequestConfig<D>,
  instance: AxiosInstance,
  options?: O,
): StrictUseAxiosReturn<T, R, D, O> & Promise<StrictUseAxiosReturn<T, R, D, O>>
export declare function useAxios<
  T = any,
  R = AxiosResponse<T>,
  D = any,
  O extends UseAxiosOptionsBase<T> = UseAxiosOptionsBase<T>,
>(
  url: string,
  config?: AxiosRequestConfig<D>,
  options?: O,
): StrictUseAxiosReturn<T, R, D, O> & Promise<StrictUseAxiosReturn<T, R, D, O>>
export declare function useAxios<
  T = any,
  R = AxiosResponse<T>,
  D = any,
  O extends UseAxiosOptionsBase<T> = UseAxiosOptionsBase<T>,
>(
  url: string,
  instance?: AxiosInstance,
  options?: O,
): StrictUseAxiosReturn<T, R, D, O> & Promise<StrictUseAxiosReturn<T, R, D, O>>
export declare function useAxios<
  T = any,
  R = AxiosResponse<T>,
  D = any,
  O extends UseAxiosOptionsBase<T> = UseAxiosOptionsBase<T>,
>(
  url: string,
  config: AxiosRequestConfig<D>,
  instance: AxiosInstance,
  options?: O,
): StrictUseAxiosReturn<T, R, D, O> & Promise<StrictUseAxiosReturn<T, R, D, O>>
export declare function useAxios<T = any, R = AxiosResponse<T>, D = any>(
  config?: AxiosRequestConfig<D>,
): EasyUseAxiosReturn<T, R, D> & Promise<EasyUseAxiosReturn<T, R, D>>
export declare function useAxios<T = any, R = AxiosResponse<T>, D = any>(
  instance?: AxiosInstance,
): EasyUseAxiosReturn<T, R, D> & Promise<EasyUseAxiosReturn<T, R, D>>
export declare function useAxios<T = any, R = AxiosResponse<T>, D = any>(
  config?: AxiosRequestConfig<D>,
  instance?: AxiosInstance,
): EasyUseAxiosReturn<T, R, D> & Promise<EasyUseAxiosReturn<T, R, D>>
```
