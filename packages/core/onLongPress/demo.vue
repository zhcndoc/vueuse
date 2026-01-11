<script setup lang="ts">
import { onLongPress } from '@vueuse/core'
import { shallowRef, useTemplateRef } from 'vue'

const htmlRef = useTemplateRef('htmlRef')
const htmlRefOptions = useTemplateRef('htmlRefOptions')
const htmlRefOnMouseUp = useTemplateRef('htmlRefOnMouseUp')

const longPressed = shallowRef(false)
const clicked = shallowRef(false)

function onLongPressCallback(e: PointerEvent) {
  longPressed.value = true
}

function onMouseUpCallback(duration: number, distance: number, isLongPress: boolean) {
  if (!isLongPress)
    clicked.value = true

  console.log({ distance, duration, isLongPress })
}

function reset() {
  longPressed.value = false
  clicked.value = false
}

onLongPress(htmlRef, onLongPressCallback)
onLongPress(htmlRefOptions, onLongPressCallback, { delay: 1000 })
onLongPress(
  htmlRefOnMouseUp,
  onLongPressCallback,
  {
    distanceThreshold: 24,
    delay: 1000,
    onMouseUp: onMouseUpCallback,
  },
)
</script>

<template>
  <p>长按: <BooleanDisplay :value="longPressed" /></p>
  <p>点击: <BooleanDisplay :value="clicked" /></p>
  <button ref="htmlRef" class="ml-2 button small">
    长按（500毫秒）
  </button>
  <button ref="htmlRefOptions" class="ml-2 button small">
    长按（1000毫秒）
  </button>
  <button ref="htmlRefOnMouseUp" class="ml-2 button small">
    长按（1000毫秒）或点击
  </button>
  <button class="ml-2 button small" @click="reset">
    重置
  </button>
</template>
