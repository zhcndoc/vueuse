---
category: Time
---

# useCountdown

`useIntervalFn` 的包装器，提供倒计时器。

## 使用方法

```js
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

```js
import { shallowRef } from 'vue'
import { useCountdown } from '@vueuse/core'

const countdown = shallowRef(5)
const { start, reset } = useCountdown(countdown, {
})

// change the countdown value
countdown.value = 10

// start a new countdown with 2 seconds
start(2)

// reset the countdown to 4, but do not start it
reset(4)

// start the countdown with the current value of `countdown`
start()
```
