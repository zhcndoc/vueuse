<script setup lang="ts">
import { useObjectUrl } from '@vueuse/core'
import { shallowRef } from 'vue'

const file = shallowRef()
const url = useObjectUrl(file)

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  const files = target.files
  file.value = (files && files.length > 0) ? files[0] : undefined
}
</script>

<template>
  <div>
    <note class="mb-1">
      选择文件:
    </note>
    <input type="file" @change="onFileChange">

    <note class="mt-4 mb-1">
      Object URL:
    </note>
    <code>
      <a v-if="url" :href="url" target="_blank">{{ url }}</a>
      <span v-else>none</span>
    </code>
  </div>
</template>
