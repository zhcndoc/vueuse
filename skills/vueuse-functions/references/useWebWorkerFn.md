---
category: Browser
---

# useWebWorkerFn

使用简单的基于 Promise 的语法，在不阻塞 UI 的情况下运行耗费性能的函数。是 [alewin/useWorker](https://github.com/alewin/useWorker) 的 Vue 版本移植。

## 用法

### 基本示例

```ts
import { useWebWorkerFn } from '@vueuse/core'

const { workerFn } = useWebWorkerFn(() => {
  // 在 web worker 中执行一些繁重的工作
})
```

### 使用依赖项

```ts {7-9}
import { useWebWorkerFn } from '@vueuse/core'

const { workerFn, workerStatus, workerTerminate } = useWebWorkerFn(
  dates => dates.sort(dateFns.compareAsc),
  {
    timeout: 50000,
    dependencies: [
      'https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.js', // dateFns
    ],
  },
)
```

### 使用本地依赖项

```ts {9-9}
import { useWebWorkerFn } from '@vueuse/core'

const pow = (a: number) => a * a

const { workerFn, workerStatus, workerTerminate } = useWebWorkerFn(
  numbers => pow(numbers),
  {
    timeout: 50000,
    localDependencies: [pow]
  },
)
```

## Web Worker

在开始使用此函数之前，我们建议你阅读 [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) 文档。

## 贡献者

此函数是 Alessio Koci 编写的 https://github.com/alewin/useWorker 的 Vue 版本移植，在 [@Donskelle](https://github.com/Donskelle) 的帮助下完成迁移。

## 类型声明

```ts
export type WebWorkerStatus =
  | "PENDING"
  | "SUCCESS"
  | "RUNNING"
  | "ERROR"
  | "TIMEOUT_EXPIRED"
export interface UseWebWorkerOptions extends ConfigurableWindow {
  /**
   * 终止 worker 前的毫秒数
   *
   * @default undefined
   */
  timeout?: number
  /**
   * 包含运行 worker 所需外部依赖项的数组
   */
  dependencies?: string[]
  /**
   * 包含运行 worker 所需本地依赖项的数组
   */
  localDependencies?: Function[]
}
export interface UseWebWorkerFnReturn<T extends (...fnArgs: any[]) => any> {
  workerFn: (...fnArgs: Parameters<T>) => Promise<ReturnType<T>>
  workerStatus: ShallowRef<WebWorkerStatus>
  workerTerminate: (status?: WebWorkerStatus) => void
}
/**
 * 使用简单的基于 Promise 的语法，在不阻塞 UI 的情况下运行耗费性能的函数。
 *
 * @see https://vueuse.org/useWebWorkerFn
 * @param fn
 * @param options
 */
export declare function useWebWorkerFn<T extends (...fnArgs: any[]) => any>(
  fn: T,
  options?: UseWebWorkerOptions,
): UseWebWorkerFnReturn<T>
```
