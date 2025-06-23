---
category: Browser
---

# useUrlSearchParams

响应式 [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

## 用法

```js
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('history')

console.log(params.foo) // 'bar'

params.foo = 'bar'
params.vueuse = 'awesome'
// URL 更新为 `?foo=bar&vueuse=awesome`
```

### 哈希模式

当在哈希模式路由中使用时，将 `mode` 设置为 `hash`

```js
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('hash')

params.foo = 'bar'
params.vueuse = 'awesome'
// URL 更新为 `#/your/route?foo=bar&vueuse=awesome`
```

### 哈希参数

当在历史模式路由中使用，但想要使用哈希作为参数时，将 `mode` 设置为 `hash-params`

```js
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('hash-params')

params.foo = 'bar'
params.vueuse = 'awesome'
// URL 更新为 `/your/route#foo=bar&vueuse=awesome`
```

### 自定义字符串化函数

您可以提供自定义函数来序列化 URL 参数，使用 `stringify` 选项。当您需要对查询字符串进行特殊格式化时，这非常有用。

```js
import { useUrlSearchParams } from '@vueuse/core'

// Custom stringify function that removes equal signs for empty values
const params = useUrlSearchParams('history', {
  stringify: (params) => {
    return params.toString().replace(/=(&|$)/g, '$1')
  }
})

params.foo = ''
params.bar = 'value'
// url updated to `?foo&bar=value` instead of `?foo=&bar=value`
```
