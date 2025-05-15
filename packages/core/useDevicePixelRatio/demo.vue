<script setup lang="ts">
import { reactify, useDevicePixelRatio } from '@vueuse/core'
import { reactive } from 'vue'
import YAML from 'yaml'

const stringify = reactify(
  (input: any) => YAML.stringify(input, (k, v) => {
    if (typeof v === 'function') {
      return undefined
    }
    return v
  }, {
    singleQuote: true,
    flowCollectionPadding: false,
  }),
)

const pixelRatio = reactive(useDevicePixelRatio())
const code = stringify(pixelRatio)
</script>

<template>
  <div>设备像素比：</div>
  <pre>{{ code }}</pre>
  <span class="opacity-50">放大和缩小（或将窗口移动到具有不同缩放因子的屏幕）以查看值的变化</span>
</template>
