---
category: Utilities
---

# useToggle

一个带有实用功能的布尔切换器。

## 用法

```ts
import { useToggle } from '@vueuse/core'

const [value, toggle] = useToggle()
```

当你传入一个 ref 时，`useToggle` 将返回一个简单的切换函数：

```ts
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
```

### 切换函数

切换函数可以有两种调用方式：

```ts
const [value, toggle] = useToggle()

toggle() // 在 true 和 false 之间切换
toggle(true) // 设置为特定值

// 切换函数返回新的值
const newValue = toggle() // 返回切换后的新值
```

### 自定义数值

你可以使用自定义的真值和假值来代替 `true` 和 `false`：

```ts
import { useToggle } from '@vueuse/core'

const [value, toggle] = useToggle('on', {
  truthyValue: 'on',
  falsyValue: 'off',
})

toggle() // 'off'
toggle() // 'on'
```

自定义数值也可以是响应式的：

```ts
import { useToggle } from '@vueuse/core'
import { ref } from 'vue'

const truthy = ref('yes')
const falsy = ref('no')

const [value, toggle] = useToggle('yes', {
  truthyValue: truthy,
  falsyValue: falsy,
})
```

## 注意事项

请注意，切换函数接受第一个参数作为覆盖值。你可能希望避免直接将函数传递给模板中的事件，因为事件对象将被传入。

```html
<!-- 注意：$event 将被传入 -->
<button @click="toggleDark" />
<!-- 推荐这样做 -->
<button @click="toggleDark()" />
```
