<script setup lang="ts">
import { useBase64 } from '@vueuse/core'
import { shallowRef } from 'vue'

const text = shallowRef('')
const file = shallowRef<File>()
const image = shallowRef<HTMLImageElement>()

const { base64: textBase64 } = useBase64(text)
const { base64: fileBase64 } = useBase64(file)
const { base64: imageBase64 } = useBase64(image)
const { base64: bufferBase64 } = useBase64(new ArrayBuffer(8))

function onFileInput(e: Event) {
  file.value = (e.target as HTMLInputElement).files![0]
}
</script>

<template>
  <div space-y-4>
    <div grid md:grid-cols-2 gap-2>
      <div>
        <span>文本输入</span>
        <textarea v-model="text" h-40 type="text" placeholder="Type something..." />
      </div>
      <div>
        <span>Base64</span>
        <textarea h-40 :value="textBase64" readonly />
      </div>
    </div>

    <div grid md:grid-cols-2 gap-2>
      <div>
        <span>Buffer 输入</span>
        <pre mt-2>new ArrayBuffer(1024)</pre>
      </div>
      <div>
        <span>Base64</span>
        <textarea h-40 :value="bufferBase64" readonly />
      </div>
    </div>

    <div grid md:grid-cols-2 gap-2>
      <div>
        <span>文件选择</span>
        <div>
          <input mt-2 type="file" @input="onFileInput">
        </div>
      </div>
      <div>
        <span>Base64</span>
        <textarea h-40 :value="fileBase64" readonly />
      </div>
    </div>

    <div grid md:grid-cols-2 gap-2>
      <div>
        <span>图片输入</span>
        <img
          ref="image"
          w-full h-40 object-cover
          class="rounded mt-2"
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        >
      </div>
      <div>
        <span>Base64</span>
        <textarea h-40 :value="imageBase64" readonly />
      </div>
    </div>
  </div>
</template>

<style scoped>
textarea {
  min-width: 0 !important;
  width: 100%;
}
</style>
