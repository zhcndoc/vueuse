---
category: Reactivity
alias: controlledRef
related: computedWithControl
---

# 带控制的 ref

对 ref 及其响应性进行细粒度控制。

## 用法

`refWithControl` 使用 `extendRef` 提供两个额外函数 `get` 和 `set`，以便更好地控制何时应跟踪/触发响应性。

```ts
import { refWithControl } from '@vueuse/core'

const num = refWithControl(0)
const doubled = computed(() => num.value * 2)

// just like normal ref
num.value = 42
console.log(num.value) // 42
console.log(doubled.value) // 84

// set value without triggering the reactivity
num.set(30, false)
console.log(num.value) // 30
console.log(doubled.value) // 84 (doesn't update)

// get value without tracking the reactivity
watchEffect(() => {
  console.log(num.peek())
}) // 30

num.value = 50 // watch effect wouldn't be triggered since it collected nothing.
console.log(doubled.value) // 100 (updated again since it's a reactive set)
```

### `peek`, `lay`, `untrackedGet`, `silentSet`

我们还提供了一些简写方式，可以在不跟踪/触发响应式系统的情况下进行 get/set。下面这些写法是等价的。

```ts
import { refWithControl } from '@vueuse/core'
// ---cut---
const foo = refWithControl('foo')
```

```ts
import { refWithControl } from '@vueuse/core'

const foo = refWithControl('foo')
// ---cut---
// getting
foo.get(false)
foo.untrackedGet()
foo.peek() // an alias for `untrackedGet`
```

```ts
import { refWithControl } from '@vueuse/core'

const foo = refWithControl('foo')
// ---cut---
// setting
foo.set('bar', false)
foo.silentSet('bar')
foo.lay('bar') // an alias for `silentSet`
```

## 配置

### `onBeforeChange()`

`onBeforeChange` 选项用于控制是否应接受新值。例如：

```ts
import { refWithControl } from '@vueuse/core'
// ---cut---
const num = refWithControl(0, {
  onBeforeChange(value, oldValue) {
    // disallow changes larger then ±5 in one operation
    if (Math.abs(value - oldValue) > 5)
      return false // returning `false` to dismiss the change
  },
})

num.value += 1
console.log(num.value) // 1

num.value += 6
console.log(num.value) // 1 (change been dismissed)
```

### `onChanged()`

`onChanged` 选项提供了与 Vue 的 `watch` 类似的功能，但与 `watch` 相比，同步开销更小。

```ts
import { refWithControl } from '@vueuse/core'
// ---cut---
const num = refWithControl(0, {
  onChanged(value, oldValue) {
    console.log(value)
  },
})
```

## 类型声明

```ts
export interface ControlledRefOptions<T> {
  /**
   * Callback function before the ref changing.
   *
   * Returning `false` to dismiss the change.
   */
  onBeforeChange?: (value: T, oldValue: T) => void | boolean
  /**
   * Callback function after the ref changed
   *
   * This happens synchronously, with less overhead compare to `watch`
   */
  onChanged?: (value: T, oldValue: T) => void
}
/**
 * Fine-grained controls over ref and its reactivity.
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function refWithControl<T>(
  initial: T,
  options?: ControlledRefOptions<T>,
): {
  get: (tracking?: boolean) => T
  set: (value: T, triggering?: boolean) => void
  untrackedGet: () => T
  silentSet: (v: T) => void
  peek: () => T
  lay: (v: T) => void
} & Ref<T, T>
/** @deprecated use `refWithControl` instead */
export declare const controlledRef: typeof refWithControl
```
