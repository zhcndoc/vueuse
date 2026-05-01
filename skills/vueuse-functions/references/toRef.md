---
category: 响应式
---

# toRef

将值/ref/获取器规范化为 `ref` 或 `computed`。

## 用法

```ts
import { toRef } from '@vueuse/core'

const foo = ref('hi')

const a = toRef(0) // Ref<number>
const b = toRef(foo) // Ref<string>
const c = toRef(() => 'hi') // ComputedRef<string>
```

## 与 Vue 的 `toRef` 的区别

VueUse 的 `toRef` 与 `vue` 包中的 Vue `toRef` 并不相同。

### VueUse `toRef`

- 接受 **值**、**ref** 或 **获取器**
- 返回：
  - 基本类型值对应的 **ref**
  - 已存在 ref 对应的 **ref**
  - 获取器函数对应的 **computed**
- **不**接受 `object + key`
- 获取器始终生成只读的 computed 值

### Vue `toRef`

- 只接受：
  - **响应式对象 + 属性键**，或
  - 已存在的 **ref**
- 生成一个与底层响应式对象绑定的**可写 ref**
- **不**接受基本类型值
- **不**接受获取器函数

### 总结

| 行为                     | VueUse `toRef`            | Vue `toRef`             |
| ------------------------ | ------------------------- | ----------------------- |
| 接受基本类型值           | ✔️                        | ❌                      |
| 接受获取器               | ✔️（computed）            | ❌                      |
| 接受已存在 ref           | ✔️                        | ✔️                      |
| 接受 object + key         | ❌                        | ✔️                      |
| 可写                     | ✔️（获取器除外）          | ✔️                      |
| 目的                     | 规范化为 ref/computed     | 绑定到响应式对象         |

## 类型声明

```ts
/**
 * 将值/ref/获取器规范化为 `ref` 或 `computed`。
 */
export declare function toRef<T>(r: () => T): Readonly<Ref<T>>
export declare function toRef<T>(r: ComputedRef<T>): ComputedRef<T>
export declare function toRef<T>(r: MaybeRefOrGetter<T>): Ref<T>
export declare function toRef<T>(r: T): Ref<T>
export declare function toRef<T extends object, K extends keyof T>(
  object: T,
  key: K,
): ToRef<T[K]>
export declare function toRef<T extends object, K extends keyof T>(
  object: T,
  key: K,
  defaultValue: T[K],
): ToRef<Exclude<T[K], undefined>>
```
