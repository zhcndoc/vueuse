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

以下显示了选项的默认值，它们将直接传递给 [SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)。

```ts
useSpeechSynthesis({
  lang: 'en-US',
  pitch: 1,
  rate: 1,
  volume: 1,
})
```
