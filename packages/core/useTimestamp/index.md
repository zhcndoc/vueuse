---
category: Animation
---

# useTimestamp

响应式的当前时间戳

## 用法

```ts
import { useTimestamp } from '@vueuse/core'

const timestamp = useTimestamp({ offset: 0 })
```

```ts
import { useTimestamp } from '@vueuse/core'
// ---cut---
const { timestamp, pause, resume } = useTimestamp({ controls: true })
```

## 组件用法

```vue
<template>
  <UseTimestamp v-slot="{ timestamp, pause, resume }">
    当前时间：{{ timestamp }}
    <button @click="pause()">
      暂停
    </button>
    <button @click="resume()">
      恢复
    </button>
  </UseTimestamp>
</template>
```
