---
category: Browser
---

# useClipboard

响应式的 [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)。提供对剪贴板命令（剪切、复制和粘贴）的响应能力，以及异步读取和写入系统剪贴板的能力。访问剪贴板内容的权限受到 [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) 的限制。未经用户许可，不允许读取或更改剪贴板内容。

<CourseLink href="https://vueschool.io/lessons/reactive-browser-wrappers-in-vueuse-useclipboard?friend=vueuse">通过 Vue School 的这个免费视频课程学习如何使用 useClipboard 将文本响应式保存到剪贴板！</CourseLink>

## 使用方法

```vue
<script>
import { useClipboard } from '@vueuse/core'

const source = ref('Hello')
const { text, copy, copied, isSupported } = useClipboard({ source })
</script>

<template>
  <div v-if="isSupported">
    <button @click="copy(source)">
      <!-- 默认情况下，`copied` 将在 1.5 秒后重置 -->
      <span v-if="!copied">复制</span>
      <span v-else>已复制！</span>
    </button>
    <p>当前已复制的内容: <code>{{ text || 'none' }}</code></p>
  </div>
  <p v-else>
    你的浏览器不支持 Clipboard API
  </p>
</template>
```

### 选项（Options）

| 选项           | 类型                       | 默认值  | 说明                                                              |
| -------------- | -------------------------- | ------- | ----------------------------------------------------------------- |
| `source`       | `MaybeRefOrGetter<string>` | —       | 当调用 `copy()` 无参数时，默认复制的内容                          |
| `read`         | `boolean`                  | `false` | 是否在复制/剪切事件发生时读取剪贴板内容                           |
| `copiedDuring` | `number`                   | `1500`  | `copied` 状态重置为 `false` 之前的毫秒数                          |
| `legacy`       | `boolean`                  | `false` | 如果 Clipboard API 不可用，则回退使用 `document.execCommand` 复制 |

### 返回值（Return Values）

| 属性          | 类型                               | 说明                                     |
| ------------- | ---------------------------------- | ---------------------------------------- |
| `isSupported` | `ComputedRef<boolean>`             | 是否支持剪贴板（原生或回退方案）         |
| `text`        | `Ref<string>`                      | 当前剪贴板内容（当 `read: true` 时生效） |
| `copied`      | `Ref<boolean>`                     | 复制成功后为 `true`，自动重置            |
| `copy`        | `(text?: string) => Promise<void>` | 复制文本到剪贴板                         |

### 兼容模式（Legacy Mode）

如果 [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) 不可用，设置 `legacy: true` 来保留复制的能力。它将使用 [execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) 作为回退处理复制。

```ts
const { copy, isSupported } = useClipboard({ legacy: true })
```

## 组件使用

```vue
<template>
  <UseClipboard v-slot="{ copy, copied }" source="copy me">
    <button @click="copy()">
      {{ copied ? '已复制' : '复制' }}
    </button>
  </UseClipboard>
</template>
```
