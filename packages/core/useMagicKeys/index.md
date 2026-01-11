---
category: 传感器
---

# useMagicKeys

响应式按键按下状态，支持神奇按键组合。

## 使用方法

```ts
import { useMagicKeys } from '@vueuse/core'

const { shift, space, a /* 要监听的按键 */ } = useMagicKeys()

watch(space, (v) => {
  if (v)
    console.log('空格键被按下')
})

watchEffect(() => {
  if (shift.value && a.value)
    console.log('Shift + A 已经被按下')
})
```

::: tip 注意
如果你在 `tsconfig.json` 中启用了 TypeScript 的 `noUncheckedIndexedAccess` 选项（或者使用默认启用该选项的 Nuxt），那么解构出来的按键的类型将是 `ComputedRef<boolean> | undefined`。

`noUncheckedIndexedAccess` 选项会为通过索引签名访问的未声明字段加上 `undefined` 类型。由于 `useMagicKeys()` 使用索引签名来动态访问任意按键，因此 TypeScript 会为安全性将解构属性视作可能为 undefined。

你需要使用可选链或者通过 getter 函数包裹：

```ts
const { shift, space, a } = useMagicKeys()

watch(
  () => space?.value,
  (v) => {
    if (v)
      console.log('space 被按下了')
  },
)

watchEffect(() => {
  if (shift?.value && a?.value)
    console.log('Shift + A 被按下了')
})
```

更多关于 `noUncheckedIndexedAccess` 的详情请参阅 [TypeScript 文档](https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess)。

:::

查看 [所有可能的按键码](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values)。

### 组合键

你可以通过使用 `+` 或 `_` 将按键连接起来，以使用组合键（快捷键/热键）。

```ts
import { useMagicKeys } from '@vueuse/core'

const keys = useMagicKeys()
const shiftCtrlA = keys['Shift+Ctrl+A']

watch(shiftCtrlA, (v) => {
  if (v)
    console.log('Shift + Ctrl + A 已经被按下')
})
```

```ts
import { useMagicKeys } from '@vueuse/core'

const { Ctrl_A_B, space, alt_s /* ... */ } = useMagicKeys()

watch(Ctrl_A_B, (v) => {
  if (v)
    console.log('Control+A+B 已经被按下')
})
```

你还可以使用 `whenever` 函数让代码更加简洁

```ts
import { useMagicKeys, whenever } from '@vueuse/core'

const keys = useMagicKeys()

whenever(keys.shift_space, () => {
  console.log('Shift+Space 已经被按下')
})
```

### 当前按下的键

提供了一个特殊的属性 `current`，用于表示当前按下的所有键。

```ts
import { useMagicKeys, whenever } from '@vueuse/core'

const { current } = useMagicKeys()

console.log(current) // Set { 'control', 'a' }

whenever(
  () => current.has('a') && !current.has('b'),
  () => console.log('A 键被按下，但 B 键没有被按下'),
)
```

### 按键别名

```ts
import { useMagicKeys, whenever } from '@vueuse/core'

const { shift_cool } = useMagicKeys({
  aliasMap: {
    cool: 'space',
  },
})

whenever(shift_cool, () => console.log('Shift + Space 已经被按下'))
```

默认情况下，我们提供了一些[用于常见做法的预配置别名](https://github.com/vueuse/vueuse/blob/main/packages/core/useMagicKeys/aliasMap.ts)。

### 有条件地禁用

你可能在应用中有一些 `<input />` 元素，当用户聚焦于这些输入框时，你不希望触发神奇按键处理。这里是一个使用 `useActiveElement` 和 `logicAnd` 的示例来实现这一点：

```ts
import { useActiveElement, useMagicKeys, whenever } from '@vueuse/core'
import { logicAnd } from '@vueuse/math'

const activeElement = useActiveElement()
const notUsingInput = computed(() =>
  activeElement.value?.tagName !== 'INPUT'
  && activeElement.value?.tagName !== 'TEXTAREA',
)

const { tab } = useMagicKeys()

whenever(logicAnd(tab, notUsingInput), () => {
  console.log('Tab 键被按下，且不在输入框中！')
})
```

### 自定义事件处理程序

```ts
import { useMagicKeys, whenever } from '@vueuse/core'

const { ctrl_s } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key === 's' && e.type === 'keydown')
      e.preventDefault()
  },
})

whenever(ctrl_s, () => console.log('Ctrl+S 已经被按下'))
```

> ⚠️ 不建议使用此用法，请谨慎操作。

### 响应式模式

默认情况下，`useMagicKeys()` 返回的是 `Ref<boolean>` 类型。如果你想在模板中直接使用对象，可以启用响应式模式。

```ts
import { useMagicKeys } from '@vueuse/core'
// ---cut---
const keys = useMagicKeys({ reactive: true })
```

```vue
<template>
  <div v-if="keys.shift">
    你按住了 Shift 键！
  </div>
</template>
```
