---
category: Sensors
---

# useSpeechSynthesis

响应式 [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)。

> [Can I use?](https://caniuse.com/mdn-api_speechsynthesis)

## 用法

```ts
import { useSpeechSynthesis } from '@vueuse/core'

const {
  isSupported,
  isPlaying,
  status,
  voiceInfo,
  utterance,
  error,
  stop,
  toggle,
  speak,
} = useSpeechSynthesis()
```

### 选项

下方展示了选项的默认值，它们会直接传递给 [SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)。

```ts
import { useSpeechSynthesis } from '@vueuse/core'
// ---cut---
useSpeechSynthesis({
  lang: 'en-US',
  pitch: 1,
  rate: 1,
  volume: 1,
})
```

## 类型声明

```ts
export type UseSpeechSynthesisStatus = "init" | "play" | "pause" | "end"
export interface UseSpeechSynthesisOptions extends ConfigurableWindow {
  /**
   * SpeechSynthesis 的语言
   *
   * @default 'en-US'
   */
  lang?: MaybeRefOrGetter<string>
  /**
   * 获取并设置语音播报时的音调。
   *
   * @default 1
   */
  pitch?: MaybeRefOrGetter<SpeechSynthesisUtterance["pitch"]>
  /**
   * 获取并设置语音播报时的速度。
   *
   * @default 1
   */
  rate?: MaybeRefOrGetter<SpeechSynthesisUtterance["rate"]>
  /**
   * 获取并设置用于朗读该语音的声音。
   */
  voice?: MaybeRef<SpeechSynthesisVoice>
  /**
   * 获取并设置语音播报时的音量。
   *
   * @default 1
   */
  volume?: MaybeRefOrGetter<SpeechSynthesisUtterance["volume"]>
  /**
   * 当触发 boundary 事件时调用的回调函数。
   */
  onBoundary?: (event: SpeechSynthesisEvent) => void
}
export interface UseSpeechSynthesisReturn extends Supportable {
  isPlaying: ShallowRef<boolean>
  status: ShallowRef<UseSpeechSynthesisStatus>
  utterance: ComputedRef<SpeechSynthesisUtterance>
  error: ShallowRef<SpeechSynthesisErrorEvent | undefined>
  stop: () => void
  toggle: (value?: boolean) => void
  speak: () => void
}
/**
 * 响应式 SpeechSynthesis。
 *
 * @see https://vueuse.org/useSpeechSynthesis
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis SpeechSynthesis
 */
export declare function useSpeechSynthesis(
  text: MaybeRefOrGetter<string>,
  options?: UseSpeechSynthesisOptions,
): UseSpeechSynthesisReturn
```
