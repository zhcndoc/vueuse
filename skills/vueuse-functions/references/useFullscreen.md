---
category: Browser
---

# useFullscreen

响应式 [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)。它添加了方法，用于将特定元素（及其后代）以全屏模式展示，并在不再需要时退出全屏模式。这使得可以使用用户的整个屏幕来展示所需内容——例如在线游戏——在关闭全屏模式之前，会移除屏幕上的所有浏览器界面元素和其他应用程序。

## 用法

```ts
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle } = useFullscreen()
```

全屏显示指定元素。某些平台（如 iOS 的 Safari）只允许在视频元素上使用全屏。

```vue
<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const { isFullscreen, enter, exit, toggle } = useFullscreen(el)
</script>

<template>
  <video ref="el" />
</template>
```

## 组件用法

```vue
<template>
  <UseFullscreen v-slot="{ toggle }">
    <video />
    <button @click="toggle">
      进入全屏
    </button>
  </UseFullscreen>
</template>
```

## 类型声明

```ts
export interface UseFullscreenOptions extends ConfigurableDocument {
  /**
   * 当组件卸载时自动退出全屏
   *
   * @default false
   */
  autoExit?: boolean
}
export interface UseFullscreenReturn extends Supportable {
  isFullscreen: ShallowRef<boolean>
  enter: () => Promise<void>
  exit: () => Promise<void>
  toggle: () => Promise<void>
}
/**
 * 响应式 Fullscreen API。
 *
 * @see https://vueuse.org/useFullscreen
 * @param target
 * @param options
 */
export declare function useFullscreen(
  target?: MaybeElementRef,
  options?: UseFullscreenOptions,
): UseFullscreenReturn
```
