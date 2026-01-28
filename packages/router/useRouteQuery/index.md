---
category: '@Router'
---

# useRouteQuery

响应式 `route.query` 的简写。当 ref 变化时会更新 URL 查询参数。

## 用法

```ts
import { useRouteQuery } from '@vueuse/router'

const search = useRouteQuery('search')

const search = useRouteQuery('search', 'foo') // 或者带有默认值

const page = useRouteQuery('page', '1', { transform: Number }) // 或者进行值转换

console.log(search.value) // route.query.search
search.value = 'foobar' // router.replace({ query: { search: 'foobar' } })
```

### Navigation Mode

默认情况下，变更会使用 `router.replace()`。设置 `mode: 'push'` 可以改用 `router.push()`。

```ts
import { useRouteQuery } from '@vueuse/router'

const search = useRouteQuery('search', '', { mode: 'push' })
```

### Bidirectional Transform

你可以提供分别用于读取和写入值的 `get` 和 `set` 转换函数。

```ts
import { useRouteQuery } from '@vueuse/router'

const filters = useRouteQuery('filters', [], {
  transform: {
    get: v => v ? v.split(',') : [],
    set: v => v.join(','),
  },
})

// 读取时: 'a,b,c' -> ['a', 'b', 'c']
// 写入时: ['a', 'b', 'c'] -> 'a,b,c'
```

### Default Value Behavior

当值等于默认值时，查询参数会从 URL 中移除。

```ts
import { useRouteQuery } from '@vueuse/router'

const page = useRouteQuery('page', '1')

page.value = '2' // URL: ?page=2
page.value = '1' // URL: (无 page 参数，因为等于默认值)
```
