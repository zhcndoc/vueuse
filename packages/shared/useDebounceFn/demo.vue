<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import { shallowRef } from 'vue'

const updated = shallowRef(0)
const clicked = shallowRef(0)
const debouncedFn = useDebounceFn(() => {
  updated.value += 1
}, 1000, { maxWait: 5000 })

function clickedFn() {
  clicked.value += 1
  debouncedFn()
}
</script>

<template>
  <button @click="clickedFn">
    点我！
  </button>
  <note>此演示中延迟设置为 1000ms，最大等待时间设置为 5000ms。</note>

  <p>按钮点击次数：{{ clicked }}</p>
  <p>事件处理程序调用次数：{{ updated }}</p>
</template>
