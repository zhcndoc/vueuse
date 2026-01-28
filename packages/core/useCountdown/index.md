---
category: 时间
---

# useCountdown

秒级响应式倒计时器。

## 使用方法

```ts
import { useCountdown } from '@vueuse/core'

const countdownSeconds = 5
const { remaining, start, stop, pause, resume } = useCountdown(countdownSeconds, {
  onComplete() {

  },
  onTick() {

  }
})
```

您可以使用 `ref` 来更改初始倒计时。`start()` 和 `resume()` 也接受下一个倒计时的新值。

```ts
import { useCountdown } from '@vueuse/core'
import { shallowRef } from 'vue'

const countdown = shallowRef(5)
const { start, reset } = useCountdown(countdown, {
})

// 更改倒计时的值
countdown.value = 10

// 以 2 秒开始新的倒计时
start(2)

// 重置倒计时为 4 秒，但不启动
reset(4)

// 使用当前 `countdown` 的值开始倒计时
start()
```
