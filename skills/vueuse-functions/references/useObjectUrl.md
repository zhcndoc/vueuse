---
category: Browser
---

# useObjectUrl

表示对象的响应式 URL。

通过 [URL.createObjectURL()](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) 为提供的 `File`、`Blob` 或 `MediaSource` 创建一个 URL，并在源发生变化或组件卸载时通过 [URL.revokeObjectURL()](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL) 自动释放该 URL。

## 用法

```vue
<script setup lang="ts">
import { useObjectUrl } from '@vueuse/core'
import { shallowRef } from 'vue'

const file = shallowRef()
const url = useObjectUrl(file)

function onFileChange(event) {
  file.value = event.target.files[0]
}
</script>

<template>
  <input type="file" @change="onFileChange">

  <a :href="url">打开文件</a>
</template>
```

## 组件用法

```vue
<template>
  <UseObjectUrl v-slot="url" :object="file">
    <a :href="url">打开文件</a>
  </UseObjectUrl>
</template>
```

## 类型声明

```ts
/**
 * 表示对象的响应式 URL。
 *
 * @see https://vueuse.org/useObjectUrl
 * @param object
 */
export declare function useObjectUrl(
  object: MaybeRefOrGetter<Blob | MediaSource | null | undefined>,
): Readonly<ShallowRef<string | undefined, string | undefined>>
```
