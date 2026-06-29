---
category: Time
utils: formatTimeAgoIntl
---

# useTimeAgoIntl

支持国际化的响应式时间前表示。时间变化时会自动更新时间前字符串。由 `Intl.RelativeTimeFormat` 提供支持。

## 用法

```js
import { useTimeAgoIntl } from '@vueuse/core'

const timeAgoIntl = useTimeAgoIntl(new Date(2021, 0, 1))
```

## 非响应式用法

如果你不需要响应性，可以使用 `formatTimeAgo` 函数来获取格式化后的字符串，而不是 Ref。

```js
import { formatTimeAgoIntl } from '@vueuse/core'

const timeAgoIntl = formatTimeAgoIntl(new Date(2021, 0, 1)) // string
```
