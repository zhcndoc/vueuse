<script setup lang="ts">
import { useCssVar } from '@vueuse/core'
import { shallowRef, useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const color = useCssVar('--color', el)

function switchColor() {
  if (color.value === '#df8543')
    color.value = '#7fa998'
  else
    color.value = '#df8543'
}

const elv = useTemplateRef('elv')
const key = shallowRef('--color')
const colorVal = useCssVar(key, elv)
function changeVar() {
  if (key.value === '--color')
    key.value = '--color-one'
  else
    key.value = '--color'
}
</script>

<template>
  <div ref="el" style="--color: #7fa998; color: var(--color)">
    示例文字，{{ color }}
  </div>
  <button @click="switchColor">
    更改颜色
  </button>
  <div ref="elv" style="--color: #7fa998; --color-one: #df8543;" :style="{ color: colorVal }">
    示例文字，{{ key }}：{{ colorVal }}
  </div>
  <button style="margin-left: 0;" @click="changeVar">
    更改颜色变量
  </button>
</template>
