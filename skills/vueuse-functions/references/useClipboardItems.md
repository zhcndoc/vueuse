---
category: Browser
related:
  - useClipboard
---

# useClipboardItems

响应式 [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)。提供响应剪贴板命令（剪切、复制和粘贴）以及异步读取和写入系统剪贴板的能力。对剪贴板内容的访问受到 [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) 的限制。没有用户许可，不允许读取或修改剪贴板内容。

## 与 `useClipboard` 的区别

`useClipboard` 是一个“仅文本”的函数，而 `useClipboardItems` 是一个基于 [ClipboardItem](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem) 的函数。你可以使用 `useClipboardItems` 复制任何 [ClipboardItem](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem) 支持的内容。

## 用法

```vue
<script setup lang="ts">
import { useClipboardItems } from '@vueuse/core'

const mime = 'text/plain'
const source = ref([
  new ClipboardItem({
    [mime]: new Blob(['plain text'], { type: mime }),
  })
])

const { content, copy, copied, isSupported } = useClipboardItems({ source })
</script>

<template>
  <div v-if="isSupported">
    <button @click="copy(source)">
      <!-- 默认情况下，`copied` 将在 1.5 秒后重置 -->
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </button>
    <p>
      当前复制内容：<code>{{ content || 'none' }}</code>
    </p>
  </div>
  <p v-else>
    你的浏览器不支持 Clipboard API
  </p>
</template>
```

## 类型声明

```ts
export interface UseClipboardItemsOptions<
  Source,
> extends ConfigurableNavigator {
  /**
   * 启用剪贴板读取
   *
   * @default false
   */
  read?: boolean
  /**
   * 复制源
   */
  source?: Source
  /**
   * 重置 `copied` ref 状态的毫秒数
   *
   * @default 1500
   */
  copiedDuring?: number
}
export interface UseClipboardItemsReturn<Optional> extends Supportable {
  content: Readonly<Ref<ClipboardItems>>
  copied: Readonly<ShallowRef<boolean>>
  copy: Optional extends true
    ? (content?: ClipboardItems) => Promise<void>
    : (text: ClipboardItems) => Promise<void>
  read: () => void
}
/**
 * 响应式 Clipboard API.
 *
 * @see https://vueuse.org/useClipboardItems
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useClipboardItems(
  options?: UseClipboardItemsOptions<undefined>,
): UseClipboardItemsReturn<false>
export declare function useClipboardItems(
  options: UseClipboardItemsOptions<MaybeRefOrGetter<ClipboardItems>>,
): UseClipboardItemsReturn<true>
```
