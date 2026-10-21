---
category: Time
---

# useTemporalNow

[Temporal API](https://tc39.es/proposal-temporal/docs/) 的响应式封装，支持时区转换和多种日历系统。

使用现代 Temporal API 代替旧版 `Date` 对象，提供更完善的时区处理、日历系统以及日期和时间操作。

## 使用要求

此函数依赖 [`Temporal`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal) API。它**不会**打包或依赖任何 Temporal 实现，默认读取全局 `Temporal` 对象，也可以通过 `temporal` 选项传入自己的实现。

- 新版 JavaScript 引擎（近期版本的 Node.js、Deno 和浏览器）已原生提供 `Temporal`，或即将提供。
- 对于尚不支持原生 `Temporal` 的环境，需要自行安装 polyfill，例如 [`temporal-polyfill`](https://github.com/fullcalendar/temporal-polyfill)：

  ```bash
  npm i temporal-polyfill
  ```

  然后在使用此函数前将其作为全局对象加载一次（例如在应用入口文件中）：

  ```ts
  import 'temporal-polyfill/global'
  ```

  如果需要使用 `iso8601`/`gregory` 以外的日历系统（例如下方示例中的 `islamic`、`hebrew`、`chinese`、`japanese`），请改用 `/full/` 入口：

  ```ts
  import 'temporal-polyfill/full/global'
  ```

  ...也可以通过 `temporal` 选项显式传入，而不必修改全局作用域：

  ```ts
  import { useTemporalNow } from '@vueuse/core'
  import { Temporal } from 'temporal-polyfill'

  const temporal = useTemporalNow({ temporal: Temporal })
  ```

  [`@js-temporal/polyfill`](https://github.com/js-temporal/temporal-polyfill) 也是常见的替代方案。它本身不会安装全局 `Temporal` 对象，因此适合通过 `temporal` 选项使用。它的类型声明独立于 TypeScript 自带的全局 `Temporal` 类型（而 `temporal-polyfill` 的类型来自同一份定义），所以编译时需要通过类型断言满足 `temporal` 选项；运行时对象符合规范，可以正常互操作：

  ```ts
  import { Temporal } from '@js-temporal/polyfill'
  import { useTemporalNow } from '@vueuse/core'

  const temporal = useTemporalNow({ temporal: Temporal as unknown as typeof globalThis.Temporal })
  ```

如果既没有通过 `temporal` 选项传入 `Temporal` 实现，全局也没有可用实现，调用 `useTemporalNow` 时会抛出错误。

## 用法

### 基本用法

```vue
<script setup>
import { useTemporalNow } from '@vueuse/core'

const { now, timezone, calendar, format } = useTemporalNow()

// Display current time
console.log(format()) // "12/25/2023, 3:30:00 PM"
</script>

<template>
  <div>
    <p>Current time: {{ format() }}</p>
    <p>Timezone: {{ timezone }}</p>
    <p>Calendar: {{ calendar }}</p>
  </div>
</template>
```

### 时区转换

```ts
import { useTemporalNow } from '@vueuse/core'

const temporal = useTemporalNow({ timezone: 'America/New_York' })

// Convert to different timezones
const tokyoTime = temporal.toTimezone('Asia/Tokyo')
const londonTime = temporal.toTimezone('Europe/London')
const utcTime = temporal.toTimezone('UTC')

// Change timezone reactively
temporal.timezone.value = 'Europe/Berlin'
```

### 日历系统

```ts
import { useTemporalNow } from '@vueuse/core'

const temporal = useTemporalNow({ calendar: 'gregory' })

// Convert to different calendar systems
const islamicDate = temporal.toCalendar('islamic-umalqura')
const hebrewDate = temporal.toCalendar('hebrew')
const chineseDate = temporal.toCalendar('chinese')

// Change calendar reactively
temporal.calendar.value = 'islamic-umalqura'
```

### 日期与时间操作

```ts
import { useTemporalNow } from '@vueuse/core'

const { now, add, subtract, compare } = useTemporalNow()

// Add/subtract durations
const nextWeek = add('P7D') // Add 7 days
const lastMonth = subtract('P1M') // Subtract 1 month
const inTwoHours = add('PT2H') // Add 2 hours

// Compare dates
const futureDate = add('P1Y') // Add 1 year
const comparison = compare(futureDate) // -1 (now is before futureDate)
```

### 格式选项

```ts
import { useTemporalNow } from '@vueuse/core'

const { format } = useTemporalNow()

// Different formatting options
const short = format({ dateStyle: 'short' }) // "12/25/23"
const long = format({ dateStyle: 'long' }) // "December 25, 2023"
const time = format({ timeStyle: 'medium' }) // "3:30:00 PM"
const custom = format({
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}) // "Monday, December 25, 2023"
```

### 控制自动更新

默认情况下，`useTemporalNow` 会在每次 `requestAnimationFrame` 时更新。传入自定义的
`scheduler` 可以控制更新方式，例如按固定间隔更新或以暂停状态启动：

```ts
import { useTemporalNow } from '@vueuse/core'
import { useIntervalFn } from '@vueuse/shared'

const { pause, resume, isActive } = useTemporalNow({
  // Update every 500ms instead of on every animation frame,
  // and don't start immediately.
  scheduler: cb => useIntervalFn(cb, 500, { immediate: false }),
})

// Manually control updates
resume() // Start auto-update
pause() // Stop auto-update

console.log(isActive.value) // true/false
```

## 示例

### 世界时钟

```vue
<script setup>
import { useTemporalNow } from '@vueuse/core'

const timezones = [
  { name: 'New York', tz: 'America/New_York' },
  { name: 'London', tz: 'Europe/London' },
  { name: 'Tokyo', tz: 'Asia/Tokyo' },
  { name: 'Sydney', tz: 'Australia/Sydney' }
]

const { now } = useTemporalNow()

const worldTimes = computed(() =>
  timezones.map(({ name, tz }) => ({
    name,
    time: now.value.withTimeZone(tz).toLocaleString()
  }))
)
</script>

<template>
  <div>
    <h2>World Clock</h2>
    <div v-for="{ name, time } in worldTimes" :key="name">
      <strong>{{ name }}:</strong> {{ time }}
    </div>
  </div>
</template>
```

### 日历系统转换器

```vue
<script setup>
import { useTemporalNow } from '@vueuse/core'

const { now, calendar } = useTemporalNow()

const calendars = ['gregory', 'islamic-umalqura', 'hebrew', 'chinese', 'japanese']

const convertedDates = computed(() =>
  calendars.map(cal => ({
    name: cal,
    date: now.value.withCalendar(cal).toPlainDate().toString()
  }))
)
</script>

<template>
  <div>
    <h2>Calendar Systems</h2>
    <select v-model="calendar">
      <option v-for="cal in calendars" :key="cal" :value="cal">
        {{ cal }}
      </option>
    </select>

    <div v-for="{ name, date } in convertedDates" :key="name">
      <strong>{{ name }}:</strong> {{ date }}
    </div>
  </div>
</template>
```
