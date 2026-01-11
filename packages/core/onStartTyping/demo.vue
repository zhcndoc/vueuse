<script setup lang="ts">
import { onStartTyping } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const input = useTemplateRef('input')

onStartTyping(() => {
  if (input.value !== document.activeElement)
    input.value!.focus()
})
</script>

<template>
  <note>输入任何内容</note>
  <input ref="input" type="text" placeholder="Start typing to focus">
  <input type="text" placeholder="Start typing has no effect here">
</template>
