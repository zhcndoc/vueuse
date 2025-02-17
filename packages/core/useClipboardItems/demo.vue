<script setup lang="ts">
import { useClipboardItems, usePermission } from '@vueuse/core'
import { effect, shallowRef } from 'vue'

const input = shallowRef('')

const { content, isSupported, copy } = useClipboardItems()
const computedText = shallowRef('')
const computedMimeType = shallowRef('')
effect(() => {
  Promise.all(content.value.map(item => item.getType('text/plain')))
    .then(async (blobs) => {
      computedMimeType.value = blobs.map(blob => blob.type).join(', ')
      computedText.value = (await Promise.all(blobs.map(blob => blob.text()))).join(', ')
    })
})
const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')

function createClipboardItems(text: string) {
  const mime = 'text/plain'
  const blob = new Blob([text], { type: mime })
  return new ClipboardItem({
    [mime]: blob,
  })
}
</script>

<template>
  <div v-if="isSupported">
    <note>
      剪贴板权限：读取 <b>{{ permissionRead }}</b> | 写入
      <b>{{ permissionWrite }}</b>
    </note>
    <p>
      当前已复制的内容：<code>{{ (computedText && `${computedText}（mime: ${computedMimeType}）`) || "无" }}</code>
    </p>
    <input v-model="input" type="text">
    <button
      @click="
        copy([createClipboardItems(input)])
      "
    >
      复制
    </button>
  </div>
  <p v-else>
    你的浏览器不支持剪贴板 API
  </p>
</template>
