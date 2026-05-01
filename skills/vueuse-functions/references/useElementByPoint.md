---
category: Sensors
---

# useElementByPoint

按坐标获取响应式元素。

## 用法

```ts
import { useElementByPoint, useMouse } from '@vueuse/core'

const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
```

## 类型声明

```ts
export interface UseElementByPointOptions<Multiple extends boolean = false>
  extends ConfigurableDocument, ConfigurableScheduler {
  x: MaybeRefOrGetter<number>
  y: MaybeRefOrGetter<number>
  multiple?: MaybeRefOrGetter<Multiple>
  /** @deprecated 请改用 `scheduler` 选项 */
  immediate?: boolean
  /** @deprecated 请改用 `scheduler` 选项 */
  interval?: "requestAnimationFrame" | number
}
export interface UseElementByPointReturn<Multiple extends boolean = false>
  extends Supportable, Pausable {
  element: ShallowRef<
    Multiple extends true ? HTMLElement[] : HTMLElement | null
  >
}
/**
 * 按坐标获取响应式元素。
 *
 * @see https://vueuse.org/useElementByPoint
 * @param options - UseElementByPointOptions
 */
export declare function useElementByPoint<M extends boolean = false>(
  options: UseElementByPointOptions<M>,
): UseElementByPointReturn<M>
```
