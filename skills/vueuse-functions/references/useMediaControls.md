---
category: Browser
---

# useMediaControls

适用于 `audio` 和 `video` 元素的响应式媒体控制

## 用法

### 基本用法

```vue
<script setup lang="ts">
import { useMediaControls } from '@vueuse/core'
import { onMounted, useTemplateRef } from 'vue'

const video = useTemplateRef('video')
const { playing, currentTime, duration, volume } = useMediaControls(video, {
  src: 'video.mp4',
})

// 更改初始媒体属性
onMounted(() => {
  volume.value = 0.5
  currentTime.value = 60
})
</script>

<template>
  <video ref="video" />
  <button @click="playing = !playing">
    播放 / 暂停
  </button>
  <span>{{ currentTime }} / {{ duration }}</span>
</template>
```

### 提供字幕、标题等...

你可以在 `useMediaControls` 函数的 `tracks` 选项中提供字幕、标题等。
该函数将返回一个轨道数组，以及两个用于控制它们的函数 `enableTrack`、`disableTrack` 和 `selectedTrack`。
使用这些，你可以管理当前选中的轨道。若没有选中的轨道，`selectedTrack` 将为 `-1`。

```vue
<script setup lang="ts">
import { useMediaControls } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const video = useTemplateRef('video')
const {
  tracks,
  enableTrack
} = useMediaControls(video, {
  src: 'video.mp4',
  tracks: [
    {
      default: true,
      src: './subtitles.vtt',
      kind: 'subtitles',
      label: 'English',
      srcLang: 'en',
    },
  ]
})
</script>

<template>
  <video ref="video" />
  <button v-for="track in tracks" :key="track.id" @click="enableTrack(track)">
    {{ track.label }}
  </button>
</template>
```

## 类型声明

```ts
/**
 * 这里的许多 jsdoc 定义都是基于
 * MDN(https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) 文档修改而来
 */
export interface UseMediaSource {
  /**
   * 媒体的源 URL
   */
  src: string
  /**
   * 媒体编解码器类型
   */
  type?: string
  /**
   * 指定资源预期媒体的媒体查询。
   */
  media?: string
}
export interface UseMediaTextTrackSource {
  /**
   * 表示该轨道应被启用，除非用户的偏好表明
   * 另一个轨道更合适
   */
  default?: boolean
  /**
   * 文本轨道的用途。如果省略，默认 kind 为 subtitles。
   */
  kind: TextTrackKind
  /**
   * 浏览器在列出可用文本轨道时使用的、
   * 人类可读的文本轨道标题。
   */
  label: string
  /**
   * 轨道地址（.vtt 文件）。必须是有效 URL。此属性
   * 必须被指定，并且其 URL 值必须与文档同源
   */
  src: string
  /**
   * 轨道文本数据的语言。它必须是有效的 BCP 47 语言标签。
   * 如果 kind 属性设置为 subtitles，那么必须定义 srclang。
   */
  srcLang: string
}
interface UseMediaControlsOptions extends ConfigurableDocument {
  /**
   * 媒体源，可以是字符串、`UseMediaSource` 对象，或
   * `UseMediaSource` 对象列表。
   */
  src?: MaybeRefOrGetter<string | UseMediaSource | UseMediaSource[]>
  /**
   * 媒体文本轨道列表
   */
  tracks?: MaybeRefOrGetter<UseMediaTextTrackSource[]>
}
export interface UseMediaTextTrack {
  /**
   * 文本轨道的索引
   */
  id: number
  /**
   * 文本轨道标签
   */
  label: string
  /**
   * 轨道文本数据的语言。它必须是有效的 BCP 47 语言标签。
   * 如果 kind 属性设置为 subtitles，那么必须定义 srclang。
   */
  language: string
  /**
   * 指定文本轨道的显示模式，可以是 `disabled`、
   * `hidden` 或 `showing`
   */
  mode: TextTrackMode
  /**
   * 文本轨道的用途。如果省略，默认 kind 为 subtitles。
   */
  kind: TextTrackKind
  /**
   * 指示轨道的带内元数据轨道分发类型。
   */
  inBandMetadataTrackDispatchType: string
  /**
   * 文本轨道 cue 列表
   */
  cues: TextTrackCueList | null
  /**
   * 活动文本轨道 cue 列表
   */
  activeCues: TextTrackCueList | null
}
export interface UseMediaControlsReturn {
  currentTime: ShallowRef<number>
  duration: ShallowRef<number>
  waiting: ShallowRef<boolean>
  seeking: ShallowRef<boolean>
  ended: ShallowRef<boolean>
  stalled: ShallowRef<boolean>
  buffered: ShallowRef<[number, number][]>
  playing: ShallowRef<boolean>
  rate: ShallowRef<number>
  volume: ShallowRef<number>
  muted: ShallowRef<boolean>
  tracks: ShallowRef<UseMediaTextTrack[]>
  selectedTrack: ShallowRef<number>
  enableTrack: (
    track: number | UseMediaTextTrack,
    disableTracks?: boolean,
  ) => void
  disableTrack: (track?: number | UseMediaTextTrack) => void
  supportsPictureInPicture: boolean
  togglePictureInPicture: () => Promise<PictureInPictureWindow | void>
  isPictureInPicture: ShallowRef<boolean>
  onSourceError: EventHookOn<Event>
  onPlaybackError: EventHookOn<Event>
}
export declare function useMediaControls(
  target: MaybeRef<HTMLMediaElement | null | undefined>,
  options?: UseMediaControlsOptions,
): UseMediaControlsReturn
```
