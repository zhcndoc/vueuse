---
category: Browser
---

# useTitle

响应式的文档标题。

::: warning
这个可组合组件不兼容 SSR。
:::

## 用法

```js
import { useTitle } from '@vueuse/core'

const title = useTitle()
console.log(title.value) // 打印当前标题
title.value = 'Hello' // 更改当前标题
```

立即设置初始标题：

```js
const title = useTitle('New Title')
```

传递一个 `ref`，当源 ref 发生变化时，标题将被更新：

```js
import { shallowRef } from 'vue'
import { useTitle } from '@vueuse/core'

const messages = shallowRef(0)

const title = computed(() => {
  return !messages.value ? 'No message' : `${messages.value} new messages`
})

useTitle(title) // 文档标题将与 ref "title" 匹配
```

传递一个可选的模板标记 [Vue Meta Title Template](https://vue-meta.nuxtjs.org/guide/metainfo.html) 来更新要注入到该模板中的标题：

```js
const title = useTitle('New Title', { titleTemplate: '%s | My Awesome Website' })
```

::: warning
`observe` 与 `titleTemplate` 不兼容。
:::
