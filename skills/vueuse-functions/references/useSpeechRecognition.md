---
category: Sensors
---

# useSpeechRecognition

响应式 [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)。

> [Can I use?](https://caniuse.com/mdn-api_speechrecognitionevent)

## 用法

```ts
import { useSpeechRecognition } from '@vueuse/core'

const {
  isSupported,
  isListening,
  isFinal,
  result,
  start,
  stop,
} = useSpeechRecognition()
```

### 选项

以下显示的是选项的默认值，它们会直接传递给 [SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)。

```ts
import { useSpeechRecognition } from '@vueuse/core'
// ---cut---
useSpeechRecognition({
  lang: 'en-US',
  interimResults: true,
  continuous: true,
})
```

## 类型声明

```ts
export interface UseSpeechRecognitionOptions extends ConfigurableWindow {
  /**
   * 控制是否为每次识别返回连续结果，或者只返回单个结果。
   *
   * @default true
   */
  continuous?: boolean
  /**
   * 控制是否应返回中间结果（true）或不返回（false）。中间结果是尚未最终确定的结果
   *
   * @default true
   */
  interimResults?: boolean
  /**
   * SpeechRecognition 的语言
   *
   * @default 'en-US'
   */
  lang?: MaybeRefOrGetter<string>
  /**
   * 表示每个结果允许返回的最大备选数量。
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/maxAlternatives
   * @default 1
   */
  maxAlternatives?: number
}
export interface UseSpeechRecognitionReturn extends Supportable {
  isListening: ShallowRef<boolean>
  isFinal: ShallowRef<boolean>
  recognition: SpeechRecognition | undefined
  result: ShallowRef<string>
  error: ShallowRef<SpeechRecognitionErrorEvent | Error | undefined>
  toggle: (value?: boolean) => void
  start: () => void
  stop: () => void
}
/**
 * 响应式 SpeechRecognition。
 *
 * @see https://vueuse.org/useSpeechRecognition
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition SpeechRecognition
 * @param options
 */
export declare function useSpeechRecognition(
  options?: UseSpeechRecognitionOptions,
): UseSpeechRecognitionReturn
```
