---
category: '@RxJS'
---

# watchExtractedObservable

监视从一个或多个组合式中提取的 RxJS [`Observable`](https://rxjs.dev/guide/observable) 的值。

在可观察对象发生变化时自动取消订阅，并在组件卸载时自动取消订阅。

支持与 [`watch`](https://vue.zhcndoc.com/guide/essentials/watchers.html#basic-example) 的所有重载签名匹配的签名。

## 用法

<!-- TODO: import rxjs error if enable twoslash -->

```ts no-twoslash
import { watchExtractedObservable } from '@vueuse/rxjs'
import { computed, reactive, useTemplateRef } from 'vue'
import { AudioPlayer } from '../my/libs/AudioPlayer'

// setup()

const audio = useTemplateRef('audio')
const player = computed(() => (audio.value ? new AudioPlayer(audio.value) : null))
const state = reactive({
  progress: 0,
})

watchExtractedObservable(player, p => p.progress$, (percentage) => {
  state.progress = percentage * 100
})
```

如果你想要为可能出错的 `Observable` 添加自定义错误处理，你可以提供一个可选的 `onError` 配置。如果没有提供，RxJS 将把提供的 observable 中的任何错误视为 “未处理的错误”，并且它将在一个新的调用栈中抛出，并报告给 `window.onerror` (或者如果你恰好在 Node 中，则为 `process.on('error')`)。

你还可以提供一个可选的 `onComplete` 配置，如果需要在观察到的可观察对象完成时附加特殊行为。

```ts no-twoslash
import { watchExtractedObservable } from '@vueuse/rxjs'
import { computed, reactive, useTemplateRef } from 'vue'
import { AudioPlayer } from '../my/libs/AudioPlayer'

// setup()

const audio = useTemplateRef('audio')
const player = computed(() => (audio.value ? new AudioPlayer(audio.value) : null))
const state = reactive({
  progress: 0,
})

watchExtractedObservable(player, p => p.progress$, (percentage) => {
  state.progress = percentage * 100
}, {
  onError: (err: unknown) => {
    console.error(err)
  },
  onComplete: () => {
    state.progress = 100 // 或者 0，或者其他任何值
  },
})
```

如果需要，你还可以将 `watch` 选项作为最后一个参数传递：

```ts no-twoslash
import { watchExtractedObservable } from '@vueuse/rxjs'
import { computed, reactive, useTemplateRef } from 'vue'
import { AudioPlayer } from '../my/libs/AudioPlayer'

// setup()

const audio = useTemplateRef('audio')
const player = computed(() => (audio.value ? new AudioPlayer(audio.value) : null))
const state = reactive({
  progress: 0,
})

watchExtractedObservable(player, p => p.progress$, (percentage) => {
  state.progress = percentage * 100
}, {
  onError: (err: unknown) => {
    console.error(err)
  }
}, {
  immediate: true
})
```

## Subscription Options

| Option       | Type                     | Description                          |
| ------------ | ------------------------ | ------------------------------------ |
| `onError`    | `(err: unknown) => void` | Error handler for Observable errors  |
| `onComplete` | `() => void`             | Called when the Observable completes |

## Return Value

Returns a `WatchHandle` that can be used to stop watching:

```ts no-twoslash
import { watchExtractedObservable } from '@vueuse/rxjs'
import { ref } from 'vue'

const source = ref({ data$: null })

const stop = watchExtractedObservable(source, s => s.data$, (data) => {
  console.log(data)
})

// Later, stop watching
stop()
```
