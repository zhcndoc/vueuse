---
category: 浏览器
---

# useScreenOrientation

响应式 [屏幕方向 API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API)。它为 Web 开发者提供有关用户当前屏幕方向的信息。

## 用法

```ts
import { useScreenOrientation } from '@vueuse/core'

const {
  isSupported,
  orientation,
  angle,
  lockOrientation,
  unlockOrientation,
} = useScreenOrientation()
```

要锁定方向，你可以向 lockOrientation 函数传递一个 [OrientationLockType](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/type)：

```ts
import { useScreenOrientation } from '@vueuse/core'

const {
  isSupported,
  orientation,
  angle,
  lockOrientation,
  unlockOrientation,
} = useScreenOrientation()

lockOrientation('portrait-primary')
```

然后再解锁，如下所示：

```ts
import { useScreenOrientation } from '@vueuse/core'

const { unlockOrientation } = useScreenOrientation()
// ---cut---
unlockOrientation()
```

可接受的方向类型包括 `"landscape-primary"`、`"landscape-secondary"`、`"portrait-primary"`、`"portrait-secondary"`、`"any"`、`"landscape"`、`"natural"` 和 `"portrait"`。

[屏幕方向 API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API)

## 类型声明

```ts
export type OrientationType =
  | "portrait-primary"
  | "portrait-secondary"
  | "landscape-primary"
  | "landscape-secondary"
export type OrientationLockType =
  | "any"
  | "natural"
  | "landscape"
  | "portrait"
  | "portrait-primary"
  | "portrait-secondary"
  | "landscape-primary"
  | "landscape-secondary"
export interface ScreenOrientation extends EventTarget {
  lock: (orientation: OrientationLockType) => Promise<void>
  unlock: () => void
  readonly type: OrientationType
  readonly angle: number
  addEventListener: (
    type: "change",
    listener: (this: this, ev: Event) => any,
    useCapture?: boolean,
  ) => void
}
export interface UseScreenOrientationOptions extends ConfigurableWindow {}
export interface UseScreenOrientationReturn extends Supportable {
  orientation: ShallowRef<OrientationType | undefined>
  angle: ShallowRef<number>
  lockOrientation: (type: OrientationLockType) => Promise<void>
  unlockOrientation: () => void
}
/**
 * 响应式屏幕方向
 *
 * @see https://vueuse.org/useScreenOrientation
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useScreenOrientation(
  options?: UseScreenOrientationOptions,
): UseScreenOrientationReturn
```
