---
category: Reactivity
alias: useDebounce, debouncedRef
---

# refDebounced

对 ref 的更新进行防抖。

## 用法

```ts {5}
import { refDebounced } from '@vueuse/core'
import { shallowRef } from 'vue'

const input = shallowRef('foo')
const debounced = refDebounced(input, 1000)

input.value = 'bar'
console.log(debounced.value) // 'foo'

await sleep(1100)

console.log(debounced.value) // 'bar'
// ---cut-after---
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
```

一个带有对象引用的示例。

```js
import { refDebounced } from '@vueuse/core'
import { shallowRef } from 'vue'

const data = shallowRef({
  name: 'foo',
  age: 18,
})
const debounced = refDebounced(data, 1000)

function update() {
  data.value = {
    ...data.value,
    name: 'bar',
  }
}

console.log(debounced.value) // { name: 'foo', age: 18 }
update()
await sleep(1100)

console.log(debounced.value) // { name: 'bar', age: 18 }
```

你也可以传递一个可选的第三个参数，包括 `maxWait` 选项。详情请参阅 `useDebounceFn`。

## 推荐阅读

- [**防抖与节流**：完整的可视化指南](https://kettanaito.com/blog/debounce-vs-throttle)
