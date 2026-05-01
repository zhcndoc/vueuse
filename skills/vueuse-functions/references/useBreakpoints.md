---
category: 浏览器
---

# useBreakpoints

响应式视口断点。

## 用法

```ts
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndLarger = breakpoints.greaterOrEqual('sm') // sm 及更大
const largerThanSm = breakpoints.greater('sm') // 仅大于 sm
const lgAndSmaller = breakpoints.smallerOrEqual('lg') // lg 及更小
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

// 可以是 'mobile'、'tablet'、'laptop' 或 'desktop'
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

### 简写方法

你可以直接通过返回对象上的属性访问断点。这些会返回响应式 refs。

```ts
const breakpoints = useBreakpoints({
  tablet: 640,
  laptop: 1024,
})

// 使用 min-width 策略时，相当于 breakpoints.greaterOrEqual('tablet')
const isTablet = breakpoints.tablet
```

### 策略

`strategy` 选项控制简写属性的行为：

- `min-width`（默认，移动优先）：当视口 `>= lg` 时，`breakpoints.lg` 为 `true`
- `max-width`（桌面优先）：当视口 `< xl` 时，`breakpoints.lg` 为 `true`

```ts
const breakpoints = useBreakpoints(breakpointsTailwind, {
  strategy: 'max-width', // 桌面优先
})
```

### 可用方法

| 方法                  | 描述                                                   |
| --------------------- | ------------------------------------------------------ |
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

如果你在启用 SSR 的情况下使用 `useBreakpoints`，那么你需要指定希望在服务端以及 hydration 之前渲染的屏幕尺寸，以避免 hydration 不匹配。

```ts
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind, {
  ssrWidth: 768 // 将启用 SSR 模式，并按屏幕宽度为 768px 来进行渲染
})
```

或者，你也可以使用 [`provideSSRWidth`](../useSSRWidth/index.md) 为你的应用全局设置此项。

## 预设

- Tailwind: `breakpointsTailwind`
- Bootstrap v5: `breakpointsBootstrapV5`
- Vuetify v2: `breakpointsVuetifyV2`（已弃用：`breakpointsVuetify`）
- Vuetify v3: `breakpointsVuetifyV3`
- Ant Design: `breakpointsAntDesign`
- Quasar v2: `breakpointsQuasar`
- Sematic: `breakpointsSematic`
- Master CSS: `breakpointsMasterCss`
- Prime Flex: `breakpointsPrimeFlex`
- ElementUI / ElementPlus: `breakpointsElement`

_断点预设不会被自动导入，因为它们并不以 `use` 开头以保持 VueUse 的作用域。它们必须显式导入：_

```js
import { breakpointsTailwind } from '@vueuse/core'
// 等等
```

## 类型声明

```ts
export * from "./breakpoints"
export type Breakpoints<K extends string = string> = Record<
  K,
  MaybeRefOrGetter<number | string>
>
export interface UseBreakpointsOptions extends ConfigurableWindow {
  /**
   * 用于生成类似 `.lg` 的快捷方法的查询策略
   *
   * 'min-width' - 当视口大于或等于 lg 断点时，.lg 为 true（移动优先）
   * 'max-width' - 当视口小于 xl 断点时，.lg 为 true（桌面优先）
   *
   * @default "min-width"
   */
  strategy?: "min-width" | "max-width"
  ssrWidth?: number
}
export type UseBreakpointReturn<K extends string = string> = Record<
  K,
  ComputedRef<boolean>
> & {
  greaterOrEqual: (k: MaybeRefOrGetter<K>) => ComputedRef<boolean>
  smallerOrEqual: (k: MaybeRefOrGetter<K>) => ComputedRef<boolean>
  greater: (k: MaybeRefOrGetter<K>) => ComputedRef<boolean>
  smaller: (k: MaybeRefOrGetter<K>) => ComputedRef<boolean>
  between: (
    a: MaybeRefOrGetter<K>,
    b: MaybeRefOrGetter<K>,
  ) => ComputedRef<boolean>
  isGreater: (k: MaybeRefOrGetter<K>) => boolean
  isGreaterOrEqual: (k: MaybeRefOrGetter<K>) => boolean
  isSmaller: (k: MaybeRefOrGetter<K>) => boolean
  isSmallerOrEqual: (k: MaybeRefOrGetter<K>) => boolean
  isInBetween: (a: MaybeRefOrGetter<K>, b: MaybeRefOrGetter<K>) => boolean
  current: () => ComputedRef<K[]>
  active: () => ComputedRef<K | "">
}
/**
 * 响应式视口断点
 *
 * @see https://vueuse.org/useBreakpoints
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useBreakpoints<K extends string>(
  breakpoints: Breakpoints<K>,
  options?: UseBreakpointsOptions,
): UseBreakpointReturn<K>
```
