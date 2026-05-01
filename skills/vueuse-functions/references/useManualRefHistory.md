---
category: 状态
related: useRefHistory
---

# useManualRefHistory

在用户调用 `commit()` 时手动跟踪 ref 的变更历史，并提供撤销和重做功能

## 用法

```ts {5} twoslash include usage
import { useManualRefHistory } from '@vueuse/core'
import { shallowRef } from 'vue'

const counter = shallowRef(0)
const { history, commit, undo, redo } = useManualRefHistory(counter)

counter.value += 1
commit()

console.log(history.value)
/* [
  { snapshot: 1, timestamp: 1601912898062 },
  { snapshot: 0, timestamp: 1601912898061 }
] */
```

你可以使用 `undo` 将 ref 的值重置为上一个历史点。

```ts
// @include: usage
// ---cut---
console.log(counter.value) // 1
undo()
console.log(counter.value) // 0
```

#### 可变对象的历史记录

如果你打算修改源数据，你需要传入一个自定义的克隆函数，或者将 `clone` 设为 `true` 作为参数，它是一个最小克隆函数 `x => JSON.parse(JSON.stringify(x))` 的快捷方式，这个函数会同时用于 `dump` 和 `parse`。

```ts {5}
import { useManualRefHistory } from '@vueuse/core'
import { ref } from 'vue'

const counter = ref({ foo: 1, bar: 2 })
const { history, commit, undo, redo } = useManualRefHistory(counter, { clone: true })

counter.value.foo += 1
commit()
```

#### 自定义克隆函数

要使用功能完整或自定义的克隆函数，你可以通过 `clone` 选项进行设置。

例如，使用 [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)：

```ts
import { useManualRefHistory } from '@vueuse/core'

const refHistory = useManualRefHistory(target, { clone: structuredClone })
```

或者使用 [lodash 的 `cloneDeep`](https://lodash.com/docs/4.17.15#cloneDeep)：

```ts
import { useManualRefHistory } from '@vueuse/core'
import { cloneDeep } from 'lodash-es'

const refHistory = useManualRefHistory(target, { clone: cloneDeep })
```

或者使用更轻量的 [`klona`](https://github.com/lukeed/klona)：

```ts
import { useManualRefHistory } from '@vueuse/core'
import { klona } from 'klona'

const refHistory = useManualRefHistory(target, { clone: klona })
```

#### 自定义 Dump 和 Parse 函数

你也可以不使用 `clone` 选项，而是传入自定义函数来控制序列化和解析。如果你不需要历史值是对象，这样可以在撤销时节省一次额外的克隆。如果你希望快照在保存到本地存储之前就已经是字符串化的，这也很有用。

```ts
import { useManualRefHistory } from '@vueuse/core'

const refHistory = useManualRefHistory(target, {
  dump: JSON.stringify,
  parse: JSON.parse,
})
```

### 历史容量

默认情况下，我们会保留所有历史记录（无限制），直到你显式清除它们；你可以通过 `capacity` 选项设置要保留的最大历史数量。

```ts
import { useManualRefHistory } from '@vueuse/core'

const refHistory = useManualRefHistory(target, {
  capacity: 15, // 限制为 15 条历史记录
})

refHistory.clear() // 显式清除所有历史
```

## 类型声明

```ts
export interface UseRefHistoryRecord<T> {
  snapshot: T
  timestamp: number
}
export interface UseManualRefHistoryOptions<Raw, Serialized = Raw> {
  /**
   * 要保留的最大历史数量。默认为无限制。
   */
  capacity?: number
  /**
   * 在创建快照时进行克隆，`dump: JSON.parse(JSON.stringify(value))` 的快捷方式。
   * 默认为 false
   *
   * @default false
   */
  clone?: boolean | CloneFn<Raw>
  /**
   * 将数据序列化到历史记录中
   */
  dump?: (v: Raw) => Serialized
  /**
   * 从历史记录中反序列化数据
   */
  parse?: (v: Serialized) => Raw
  /**
   * 设置数据源
   */
  setSource?: (source: Ref<Raw>, v: Raw) => void
}
export interface UseManualRefHistoryReturn<Raw, Serialized> {
  /**
   * 从参数中绕过跟踪得到的 ref
   */
  source: Ref<Raw>
  /**
   * 用于撤销的历史记录数组，最新的排在最前面
   */
  history: ComputedRef<UseRefHistoryRecord<Serialized>[]>
  /**
   * 最后一个历史点；如果处于暂停状态，源可能会不同
   */
  last: Ref<UseRefHistoryRecord<Serialized>>
  /**
   * 与 {@link UseManualRefHistoryReturn.history | history} 相同
   */
  undoStack: Ref<UseRefHistoryRecord<Serialized>[]>
  /**
   * 用于重做的记录数组
   */
  redoStack: Ref<UseRefHistoryRecord<Serialized>[]>
  /**
   * 表示是否可以撤销的 ref（undoStack 非空）
   */
  canUndo: ComputedRef<boolean>
  /**
   * 表示是否可以重做的 ref（redoStack 非空）
   */
  canRedo: ComputedRef<boolean>
  /**
   * 撤销更改
   */
  undo: () => void
  /**
   * 重做更改
   */
  redo: () => void
  /**
   * 清除所有历史
   */
  clear: () => void
  /**
   * 创建一条新的历史记录
   */
  commit: () => void
  /**
   * 使用最新历史记录重置 ref 的值
   */
  reset: () => void
}
/**
 * 跟踪 ref 的变更历史，并提供撤销和重做功能。
 *
 * @see https://vueuse.org/useManualRefHistory
 * @param source
 * @param options
 */
export declare function useManualRefHistory<Raw, Serialized = Raw>(
  source: Ref<Raw>,
  options?: UseManualRefHistoryOptions<Raw, Serialized>,
): UseManualRefHistoryReturn<Raw, Serialized>
```
