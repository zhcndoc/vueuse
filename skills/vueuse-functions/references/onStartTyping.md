---
category: 传感器
---

# 开始输入时

当用户开始在不可编辑元素上输入时触发。适用于当用户在页面任意位置开始输入时自动聚焦输入框。

## 用法

```vue
<script setup lang="ts">
import { onStartTyping } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const input = useTemplateRef('input')

onStartTyping(() => {
  if (!input.value.active)
    input.value.focus()
})
</script>

<template>
  <input ref="input" type="text" placeholder="Start typing to focus">
</template>
```

## 自定义有效键

```ts
import { onStartTyping } from '@vueuse/core'

onStartTyping(handleKey, {
  // only allow numbers
  isTypedCharValid: e => /^\d$/.test(e.key)
})
```

## 自定义可编辑元素

```ts
import { isFocusedElementEditable as defaultEditable, onStartTyping } from '@vueuse/core'

onStartTyping(handleKey, {
  isFocusedElementEditable: () => {
    const { activeElement } = document

    // Exclude elements with id 'targetInput'
    if (activeElement?.id === 'targetInput')
      return true

    return defaultEditable()
  }
})
```

## 工作原理

回调仅在以下情况触发：

- 没有可编辑元素（`<input>`、`<textarea>` 或 `contenteditable`）处于焦点状态
- 按下的键是字母数字键（A-Z、0-9）
- 未按住任何修饰键（Ctrl、Alt、Meta）

这样，用户就可以在页面任意位置开始输入，而不会在使用键盘快捷键或与表单字段交互时意外触发回调。

`isFocusedElementEditable` 和 `isTypedCharValid` 也都作为工具函数导出，因此在编写自定义选项时可以复用它们。

## 类型声明

```ts
export declare function isFocusedElementEditable(): boolean
export declare function isTypedCharValid({
  keyCode,
  metaKey,
  ctrlKey,
  altKey,
}: KeyboardEvent): boolean
export interface OnStartTypingOptions extends ConfigurableDocument {
  isTypedCharValid?: (event: KeyboardEvent) => boolean
  isFocusedElementEditable?: () => boolean
}
/**
 * Fires when users start typing on non-editable elements.
 *
 * @see https://vueuse.org/onStartTyping
 * @param callback
 * @param options
 */
export declare function onStartTyping(
  callback: (event: KeyboardEvent) => void,
  options?: OnStartTypingOptions,
): void
```
