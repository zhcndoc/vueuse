---
category: Sensors
---

# usePointerLock

响应式 [指针锁定](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API)。

## 基本用法

```ts
import { usePointerLock } from '@vueuse/core'

const {
  isSupported,
  lock,
  unlock,
  element,
  triggerElement
} = usePointerLock()
```

## 组件用法

```vue
<template>
  <UsePointerLock v-slot="{ lock }">
    <canvas />
    <button @click="lock">
      在 Canvas 上锁定指针
    </button>
  </UsePointerLock>
</template>
```

## 类型声明

```ts
export interface UsePointerLockOptions extends ConfigurableDocument {}
export interface UsePointerLockReturn extends Supportable {
  element: ShallowRef<MaybeElement>
  triggerElement: ShallowRef<MaybeElement>
  lock: (e: MaybeElementRef | Event) => Promise<MaybeElement>
  unlock: () => Promise<boolean>
}
/**
 * 响应式指针锁定。
 *
 * @see https://vueuse.org/usePointerLock
 * @param target
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function usePointerLock(
  target?: MaybeElementRef,
  options?: UsePointerLockOptions,
): UsePointerLockReturn
```
