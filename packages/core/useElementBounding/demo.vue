<script setup lang="ts">
import { useElementBounding } from '@vueuse/core'
import { stringify } from '@vueuse/docs-utils'
import { reactive, ref } from 'vue'

const el = ref(null)
const rect = reactive(useElementBounding(el))
const text = stringify(rect)
</script>

<template>
  <div style="min-height: 300px">
    <note class="mb-2">
      调整框大小以查看更改
    </note>
    <textarea ref="el" readonly class="resizer" :value="text" />
  </div>
</template>
