---
category: 时间
utils: formatTimeAgo
---

# useTimeAgo

响应式时间 ago。时间发生变化时，自动更新时间 ago 字符串。

## 用法

```ts
import { useTimeAgo } from '@vueuse/core'

const timeAgo = useTimeAgo(new Date(2021, 0, 1))
```

## 组件用法

```vue
<template>
  <UseTimeAgo v-slot="{ timeAgo }" :time="new Date(2021, 0, 1)">
    时间距今：{{ timeAgo }}
  </UseTimeAgo>
</template>
```

## 非响应式用法

如果不需要响应式，可以使用 `formatTimeAgo` 函数获取格式化后的字符串，而不是使用 Ref。

```ts
import { formatTimeAgo } from '@vueuse/core'

const timeAgo = formatTimeAgo(new Date(2021, 0, 1)) // 字符串
```

## 类型声明

```ts
export type UseTimeAgoFormatter<T = number> = (
  value: T,
  isPast: boolean,
) => string
export type UseTimeAgoUnitNamesDefault =
  "second" | "minute" | "hour" | "day" | "week" | "month" | "year"
export interface UseTimeAgoMessagesBuiltIn {
  justNow: string
  past: string | UseTimeAgoFormatter<string>
  future: string | UseTimeAgoFormatter<string>
  invalid: string
}
export type UseTimeAgoMessages<
  UnitNames extends string = UseTimeAgoUnitNamesDefault,
> = UseTimeAgoMessagesBuiltIn &
  Record<UnitNames, string | UseTimeAgoFormatter<number>>
export interface FormatTimeAgoOptions<
  UnitNames extends string = UseTimeAgoUnitNamesDefault,
> {
  /**
   * 要显示完整日期而不是相对时间的最大单位（以毫秒差值为单位）
   *
   * @default undefined
   */
  max?: UnitNames | number
  /**
   * 完整日期的格式化函数
   */
  fullDateFormatter?: (date: Date) => string
  /**
   * 用于格式化字符串的消息
   */
  messages?: UseTimeAgoMessages<UnitNames>
  /**
   * 最小显示时间单位（默认为分钟）
   *
   * @default false
   */
  showSecond?: boolean
  /**
   * 要应用的舍入方法。
   *
   * @default 'round'
   */
  rounding?: "round" | "ceil" | "floor" | number
  /**
   * 自定义单位
   */
  units?: UseTimeAgoUnit<UnitNames>[]
}
export interface UseTimeAgoOptions<
  Controls extends boolean,
  UnitNames extends string = UseTimeAgoUnitNamesDefault,
>
  extends FormatTimeAgoOptions<UnitNames>, ConfigurableScheduler {
  /**
   * 暴露更多控制项
   *
   * @default false
   */
  controls?: Controls
  /**
   * 更新间隔，设置为 0 可禁用自动更新
   *
   * @deprecated 请改用 `scheduler` 选项
   * @default 30_000
   */
  updateInterval?: number
}
export interface UseTimeAgoUnit<
  Unit extends string = UseTimeAgoUnitNamesDefault,
> {
  max: number
  value: number
  name: Unit
}
export type UseTimeAgoReturn<Controls extends boolean = false> =
  Controls extends true
    ? {
        timeAgo: ComputedRef<string>
      } & Pausable
    : ComputedRef<string>
/**
 * 响应式的相对时间格式化函数。
 *
 * @see https://vueuse.org/useTimeAgo
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useTimeAgo<
  UnitNames extends string = UseTimeAgoUnitNamesDefault,
>(
  time: MaybeRefOrGetter<Date | number | string>,
  options?: UseTimeAgoOptions<false, UnitNames>,
): UseTimeAgoReturn<false>
export declare function useTimeAgo<
  UnitNames extends string = UseTimeAgoUnitNamesDefault,
>(
  time: MaybeRefOrGetter<Date | number | string>,
  options: UseTimeAgoOptions<true, UnitNames>,
): UseTimeAgoReturn<true>
export declare function formatTimeAgo<
  UnitNames extends string = UseTimeAgoUnitNamesDefault,
>(
  from: Date,
  options?: FormatTimeAgoOptions<UnitNames>,
  now?: Date | number,
): string
```
