<script setup lang="ts">
import { useDropZone } from '@vueuse/core'
import { shallowRef, useTemplateRef } from 'vue'

const filesData = shallowRef<{ name: string, size: number, type: string, lastModified: number }[]>([])
const imageFilesData = shallowRef<{ name: string, size: number, type: string, lastModified: number }[]>([])

function onDrop(files: File[] | null) {
  filesData.value = []
  if (files) {
    filesData.value = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }))
  }
}

function onImageDrop(files: File[] | null) {
  imageFilesData.value = []
  if (files) {
    imageFilesData.value = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }))
  }
}

const dropZoneRef = useTemplateRef<HTMLElement>('dropZoneRef')
const imageDropZoneRef = useTemplateRef<HTMLElement>('imageDropZoneRef')

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

const { isOverDropZone: isOverImageDropZone } = useDropZone(imageDropZoneRef, { dataTypes: ['image/png'], onDrop: onImageDrop })
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="w-full h-auto relative">
      <p>将文件从您的计算机拖放到放置区</p>

      <div grid="~ cols-2 gap-2">
        <div
          ref="dropZoneRef"
          class="flex flex-col w-full min-h-200px h-auto bg-gray-400/10 justify-center items-center mt-6 rounded"
        >
          <div font-bold mb2>
            通用拖放区域
          </div>
          <div>
            是否在拖放区域内：
            <BooleanDisplay :value="isOverDropZone" />
          </div>
          <div class="flex flex-wrap justify-center items-center">
            <div v-for="(file, index) in filesData" :key="index" class="w-200px bg-black-200/10 ma-2 pa-6">
              <p>名称：{{ file.name }}</p>
              <p>大小：{{ file.size }}</p>
              <p>类型：{{ file.type }}</p>
              <p>上次修改时间：{{ file.lastModified }}</p>
            </div>
          </div>
        </div>
        <div
          ref="imageDropZoneRef"
          class="flex flex-col w-full min-h-200px h-auto bg-gray-400/10 justify-center items-center mt-6 rounded"
        >
          <div font-bold mb2>
            图片拖放区域
          </div>
          <div>
            是否在图片拖放区域内：
            <BooleanDisplay :value="isOverImageDropZone" />
          </div>
          <div class="flex flex-wrap justify-center items-center">
            <div v-for="(file, index) in imageFilesData" :key="index" class="w-200px bg-black-200/10 ma-2 pa-6">
              <p>名称：{{ file.name }}</p>
              <p>大小：{{ file.size }}</p>
              <p>类型：{{ file.type }}</p>
              <p>上次修改时间：{{ file.lastModified }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
