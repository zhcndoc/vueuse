<script setup lang="ts">
import type { MaybeElement } from '@vueuse/core'
import { reactify, useAnimate } from '@vueuse/core'
import { reactive, useTemplateRef } from 'vue'
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

const el = useTemplateRef<MaybeElement>('el')

const {
  play,
  pause,
  reverse,
  finish,
  cancel,
  startTime,
  currentTime,
  playbackRate,
  playState,
  replaceState,
  pending,
} = useAnimate(
  el,
  [
    { clipPath: 'circle(20% at 0% 30%)' },
    { clipPath: 'circle(20% at 50% 80%)' },
    { clipPath: 'circle(20% at 100% 30%)' },
  ],
  {
    duration: 3000,
    iterations: 5,
    direction: 'alternate',
    easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
  },
)

const text = stringify(reactive({
  startTime,
  currentTime,
  playbackRate,
  playState,
  replaceState,
  pending,
}))
</script>

<template>
  <div>
    <div class="flex items-center justify-center w-full h-60">
      <p ref="el" class="text-5xl! text-$vp-c-brand font-800">
        VueUse useAnimate
      </p>
    </div>
    <div>
      <button v-if="playState === 'running'" @click="pause">
        暂停
      </button>
      <button v-else @click="play">
        播放
      </button>
      <button @click="reverse">
        反向
      </button>
      <button @click="finish">
        完成
      </button>
      <button @click="cancel">
        取消
      </button>
    </div>
    <pre class="code-block">{{ text }}</pre>
  </div>
</template>
