---
category: Browser
---

# usePerformanceObserver

观察性能指标。

## Usage

```ts
import { usePerformanceObserver } from '@vueuse/core'

const entries = ref<PerformanceEntry[]>([])
usePerformanceObserver({
  entryTypes: ['paint'],
}, (list) => {
  entries.value = list.getEntries()
})
```
