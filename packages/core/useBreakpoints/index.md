---
category: Browser
---

# useBreakpoints

响应式的视口断点。

## 用法

```js
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

## Presets

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

_Breakpoint presets are deliberately not auto-imported, as they do not start with `use` to have the scope of VueUse. They have to be explicitly imported:_

```js
import { breakpointsTailwind } from '@vueuse/core'
// and so on
```
