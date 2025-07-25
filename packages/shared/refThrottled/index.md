---
category: Reactivity
alias: useThrottle, throttledRef
---

# refThrottled

限制 ref 值的变化频率。

## 用法

```js {5}
import { refThrottled } from '@vueuse/core'
import { shallowRef } from 'vue'

const input = shallowRef('')
const throttled = refThrottled(input, 1000)
```

一个带有对象引用的示例。

```js
import { refThrottled } from '@vueuse/core'
import { shallowRef } from 'vue'

const data = shallowRef({
  count: 0,
  name: 'foo',
})
const throttled = refThrottled(data, 1000)

data.value = { count: 1, name: 'foo' }
console.log(throttled.value) // { count: 1, name: 'foo' } (immediate)

data.value = { count: 2, name: 'bar' }
data.value = { count: 3, name: 'baz' }
data.value = { count: 4, name: 'qux' }
console.log(throttled.value) // { count: 1, name: 'foo' } (still first value)

// After 1000ms, next change will be applied
await sleep(1100)
data.value = { count: 5, name: 'final' }
await nextTick()
console.log(throttled.value) // { count: 5, name: 'final' } (updated)
```

### 尾部触发

如果你不想监听尾部的变化，可以设置第三个参数为 `false` (默认为 `true`)：

```js
import { refThrottled } from '@vueuse/core'
import { shallowRef } from 'vue'

const input = shallowRef('')
const throttled = refThrottled(input, 1000, false)
```

### 头部触发

允许回调函数立即被调用 (在 `ms` 超时的头部)。如果你不想这种行为，可以将第四个参数设置为 `false` (默认为 `true`)：

```js
import { refThrottled } from '@vueuse/core'
import { shallowRef } from 'vue'

const input = shallowRef('')
const throttled = refThrottled(input, 1000, undefined, false)
```

## 推荐阅读

- [防抖和节流：图解指南](https://kettanaito.com/blog/debounce-vs-throttle)
- [通过示例解释防抖和节流](https://css-tricks.com/debouncing-throttling-explained-examples/)
