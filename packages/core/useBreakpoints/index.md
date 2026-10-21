---
category: Browser
---

# useBreakpoints

响应式的视口断点。

## 用法

```ts
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndLarger = breakpoints.greaterOrEqual('sm') // sm 及以上
const largerThanSm = breakpoints.greater('sm') // 仅大于 sm
const lgAndSmaller = breakpoints.smallerOrEqual('lg') // lg 及以下
const smallerThanLg = breakpoints.smaller('lg') // 仅小于 lg
```

```vue
<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
  mobile: 0, // 可选
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
})

// 可能是 'mobile'、'tablet'、'laptop' 或 'desktop'
const activeBreakpoint = breakpoints.active()

// true 或 false
const laptop = breakpoints.between('laptop', 'desktop')
</script>

<template>
  <div :class="activeBreakpoint">
    ...
  </div>
</template>
```

### 快捷方法

可以直接将断点作为返回对象的属性访问，这些属性会返回响应式引用。

```ts
const breakpoints = useBreakpoints({
  tablet: 640,
  laptop: 1024,
})

// Equivalent to breakpoints.greaterOrEqual('tablet') with min-width strategy
const isTablet = breakpoints.tablet
```

### 策略

`strategy` 选项控制快捷属性的行为：

- `min-width`（默认，移动优先）：当视口宽度 >= lg 时，`breakpoints.lg` 为 `true`
- `max-width`（桌面优先）：当视口宽度 < xl 时，`breakpoints.lg` 为 `true`

```ts
const breakpoints = useBreakpoints(breakpointsTailwind, {
  strategy: 'max-width', // desktop-first
})
```

### 可用方法

| 方法                  | 描述                                                   |
| --------------------- | -------------------------------------------------------- |
| `greaterOrEqual(k)`   | 响应式：视口宽度 >= 断点                                  |
| `greater(k)`          | 响应式：视口宽度 > 断点                                   |
| `smallerOrEqual(k)`   | 响应式：视口宽度 <= 断点                                  |
| `smaller(k)`          | 响应式：视口宽度 < 断点                                   |
| `between(a, b)`       | 响应式：视口宽度介于 a 和 b 之间                          |
| `isGreaterOrEqual(k)` | 非响应式：立即返回布尔值                                  |
| `isGreater(k)`        | 非响应式：立即返回布尔值                                  |
| `isSmallerOrEqual(k)` | 非响应式：立即返回布尔值                                  |
| `isSmaller(k)`        | 非响应式：立即返回布尔值                                  |
| `isInBetween(a, b)`   | 非响应式：立即返回布尔值                                  |
| `current()`           | 返回所有匹配断点组成的计算数组                            |
| `active()`            | 返回当前活动断点的计算字符串                              |

#### 服务端渲染与 Nuxt

如果在启用 SSR 时使用 `useBreakpoints`，需要指定服务端及水合前要渲染的屏幕尺寸，以避免水合不匹配。

```ts
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind, {
  ssrWidth: 768 // Will enable SSR mode and render like if the screen was 768px wide
})
```

或者，你也可以使用 [`provideSSRWidth`](../useSSRWidth/index.md) 在全局为应用配置。

## 预设

- Tailwind: `breakpointsTailwind`
- Bootstrap v5: `breakpointsBootstrapV5`
- Vuetify v2: `breakpointsVuetifyV2` (deprecated: `breakpointsVuetify`)
- Vuetify v3: `breakpointsVuetifyV3`
- Ant Design: `breakpointsAntDesign`
- Quasar v2: `breakpointsQuasar`
- Sematic: `breakpointsSematic`
- Master CSS: `breakpointsMasterCss`
- Prime Flex: `breakpointsPrimeFlex`
- ElementUI / ElementPlus: `breakpointsElement`

_断点预设不会自动导入，因为它们的名称不以 `use` 开头，不在 VueUse 的自动导入范围内。必须显式导入：_

```js
import { breakpointsTailwind } from '@vueuse/core'
// and so on
```
