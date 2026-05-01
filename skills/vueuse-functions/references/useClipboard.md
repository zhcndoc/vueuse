---
category: Browser
---

# useClipboard

响应式 [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)。提供响应剪贴板命令（剪切、复制和粘贴）以及异步读取和写入系统剪贴板的能力。访问剪贴板内容受 [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) 保护。没有用户许可时，不允许读取或修改剪贴板内容。

<CourseLink href="https://vueschool.io/lessons/reactive-browser-wrappers-in-vueuse-useclipboard?friend=vueuse">了解如何通过 Vue School 的这节免费视频课程，以响应式方式将文本保存到剪贴板！</CourseLink>

## 用法

```vue
<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const source = ref('Hello')
const { text, copy, copied, isSupported } = useClipboard({ source })
</script>

<template>
  <div v-if="isSupported">
    <button @click="copy(source)">
      <!-- 默认情况下，`copied` 会在 1.5 秒后重置 -->
      <span v-if="!copied">复制</span>
      <span v-else>已复制！</span>
    </button>
    <p>当前复制内容：<code>{{ text || '无' }}</code></p>
  </div>
  <p v-else>
    你的浏览器不支持 Clipboard API
  </p>
</template>
```

### 选项

| 选项           | 类型                       | 默认值 | 描述                                                             |
| -------------- | -------------------------- | ------ | ---------------------------------------------------------------- |
| `source`       | `MaybeRefOrGetter<string>` | —      | 在不传参数调用 `copy()` 时要复制的默认内容                            |
| `read`         | `boolean`                  | `false` | 在复制/剪切事件时启用读取剪贴板内容                                  |
| `copiedDuring` | `number`                  | `1500` | `copied` 重置为 `false` 前的毫秒数                                 |
| `legacy`       | `boolean`                  | `false` | 如果 Clipboard API 不可用，则回退到 `document.execCommand`        |

### 返回值

| 属性          | 类型                               | 描述                                      |
| ------------- | ---------------------------------- | ----------------------------------------- |
| `isSupported` | `ComputedRef<boolean>`             | 剪贴板是否受支持（原生或兼容模式）             |
| `text`        | `Ref<string>`                      | 当前剪贴板内容（当 `read: true` 时）         |
| `copied`      | `Ref<boolean>`                     | 成功复制后为 `true`，会自动重置              |
| `copy`        | `(text?: string) => Promise<void>` | 将文本复制到剪贴板                         |

### 兼容模式

设置 `legacy: true` 可在 [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) 不可用时仍保留复制能力。它会使用 [execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) 作为回退方案处理复制。

```ts
const { copy, isSupported } = useClipboard({ legacy: true })
```

## 组件用法

```vue
<template>
  <UseClipboard v-slot="{ copy, copied }" source="copy me">
    <button @click="copy()">
      {{ copied ? '已复制' : '复制' }}
    </button>
  </UseClipboard>
</template>
```

## 类型声明

```ts
export interface UseClipboardOptions<Source> extends ConfigurableNavigator {
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
  /**
   * 当 clipboard 未定义时，是否回退到 document.execCommand('copy')。
   *
   * @default false
   */
  legacy?: boolean
}
export interface UseClipboardReturn<Optional> extends Supportable {
  text: Readonly<ShallowRef<string>>
  copied: Readonly<ShallowRef<boolean>>
  copy: Optional extends true
    ? (text?: string) => Promise<void>
    : (text: string) => Promise<void>
}
/**
 * 响应式 Clipboard API。
 *
 * @see https://vueuse.org/useClipboard
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useClipboard(
  options?: UseClipboardOptions<undefined>,
): UseClipboardReturn<false>
export declare function useClipboard(
  options: UseClipboardOptions<MaybeRefOrGetter<string>>,
): UseClipboardReturn<true>
```
