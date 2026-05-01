---
category: Browser
related: useWebWorkerFn
---

# useWebWorker

简单的 [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) 注册和通信。

## 用法

```ts
import { useWebWorker } from '@vueuse/core'

const { data, post, terminate, worker } = useWebWorker('/path/to/worker.js')
```

| 状态  | 类型                              | 描述                                                                                          |
| ------ | --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| data   | `Ref<any>`                        | 对通过 worker 接收到的最新数据的引用，可用于监听以响应传入消息 |
| worker | `ShallowRef<Worker \| undefined>` | 对 WebWorker 实例的引用                                                           |

| 方法    | 签名                                                                                                                     | 描述                      |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| post      | `(message: any, transfer: Transferable[]): void`<br>`(message: any, options?: StructuredSerializeOptions \| undefined): void` | 向 worker 线程发送数据。 |
| terminate | `() => void`                                                                                                                  | 停止并终止 worker。 |

## 类型声明

```ts
type PostMessage = (typeof Worker.prototype)["postMessage"]
export interface UseWebWorkerReturn<Data = any> {
  data: ShallowRef<Data>
  post: PostMessage
  terminate: () => void
  worker: ShallowRef<Worker | undefined>
}
type WorkerFn = (...args: unknown[]) => Worker
/**
 * 简单的 Web Workers 注册和通信。
 *
 * @see https://vueuse.org/useWebWorker
 * @param url
 * @param workerOptions
 * @param options
 */
export declare function useWebWorker<T = any>(
  url: string,
  workerOptions?: WorkerOptions,
  options?: ConfigurableWindow,
): UseWebWorkerReturn<T>
/**
 * 简单的 Web Workers 注册和通信。
 *
 * @see https://vueuse.org/useWebWorker
 */
export declare function useWebWorker<T = any>(
  worker: Worker | WorkerFn,
): UseWebWorkerReturn<T>
```
