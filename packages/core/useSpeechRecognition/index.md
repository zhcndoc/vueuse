---
category: 传感器
---

# useSpeechRecognition

响应式 [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)。

> [我可以使用吗？](https://caniuse.com/mdn-api_speechrecognitionevent)

## 用法

```ts
import { useSpeechRecognition } from '@vueuse/core'

const {
  isSupported,
  isListening,
  isFinal,
  result,
  confidence,
  start,
  stop,
} = useSpeechRecognition()
```

`confidence` 引用跟踪最新结果的 [置信值](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative/confidence)，范围在 0 到 1 之间。

### 选项

以下显示了选项的默认值，它们将直接传递给 [SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)。

```ts
import { useSpeechRecognition } from '@vueuse/core'
// ---cut---
useSpeechRecognition({
  lang: 'zh-CN',
  interimResults: true,
  continuous: true,
})
```
