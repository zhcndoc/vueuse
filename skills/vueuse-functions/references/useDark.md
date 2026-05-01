---
category: Browser
related:
  - useColorMode
  - usePreferredDark
  - useStorage
---

# useDark

带自动数据持久化的响应式深色模式。

<CourseLink href="https://vueschool.io/lessons/theming-with-vueuse-usedark-and-usecolormode?friend=vue">通过 Vue School 的这节免费视频课程学习 useDark！</CourseLink>

## 基本用法

```ts
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
```

## 行为

`useDark` 结合了 `usePreferredDark` 和 `useStorage`。启动时，它会从 localStorage/sessionStorage 中读取值（key 可配置），以查看是否存在用户配置的配色方案；如果没有，则使用用户的系统偏好。当你更改 `isDark` ref 时，它会更新对应元素的属性，然后将该偏好存储到 storage 中以实现持久化（默认 key：`vueuse-color-scheme`）。

> 请注意，`useDark` 只会帮你处理 DOM 属性的变化，以便你在 CSS 中应用合适的选择器。它**不会**为你处理实际的样式、主题或 CSS。

## 配置

默认情况下，它使用 [Tailwind CSS 偏好的深色模式](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)，即当将 class `dark` 应用于 `html` 标签时启用深色模式，例如：

```html
<!--浅色-->
<html>
  ...
</html>

<!--深色-->
<html class="dark">
  ...
</html>
```

不过，你也可以自定义它，使其适配大多数 CSS 框架。

例如：

```ts
import { useDark } from '@vueuse/core'
// ---cut---
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
```

将会如下工作：

```html
<!--浅色-->
<html>
  <body color-scheme="light">
    ...
  </body>
</html>

<!--深色-->
<html>
  <body color-scheme="dark">
    ...
  </body>
</html>
```

如果上面的配置仍然不符合你的需求，你可以使用 `onChanged` 选项来完全控制你如何处理更新。

```ts
import { useDark } from '@vueuse/core'
// ---cut---
const isDark = useDark({
  onChanged(dark) {
    // 更新 DOM，调用 API 或其他操作
  },
})
```

## 组件用法

```vue
<template>
  <UseDark v-slot="{ isDark, toggleDark }">
    <button @click="toggleDark()">
      是否深色：{{ isDark }}
    </button>
  </UseDark>
</template>
```

## 类型声明

```ts
export interface UseDarkOptions extends Omit<
  UseColorModeOptions<BasicColorSchema>,
  "modes" | "onChanged"
> {
  /**
   * 当 isDark=true 时应用到目标元素上的值
   *
   * @default 'dark'
   */
  valueDark?: string
  /**
   * 当 isDark=false 时应用到目标元素上的值
   *
   * @default ''
   */
  valueLight?: string
  /**
   * 用于处理更新的自定义处理器。
   * 指定后，将覆盖默认行为。
   *
   * @default undefined
   */
  onChanged?: (
    isDark: boolean,
    defaultHandler: (mode: BasicColorSchema) => void,
    mode: BasicColorSchema,
  ) => void
}
export type UseDarkReturn = WritableComputedRef<boolean>
/**
 * 带自动数据持久化的响应式深色模式。
 *
 * @see https://vueuse.org/useDark
 * @param options
 */
export declare function useDark(options?: UseDarkOptions): UseDarkReturn
```
