---
category: 时间
utils: formatTimeAgoIntl
---

# useTimeAgoIntl

支持国际化的响应式相对时间。时间发生变化时自动更新相对时间字符串。由 `Intl.RelativeTimeFormat` 提供支持。

## 用法

```js
import { useTimeAgoIntl } from '@vueuse/core'

const timeAgoIntl = useTimeAgoIntl(new Date(2021, 0, 1))
```

## 非响应式用法

如果不需要响应式，可以使用 `formatTimeAgo` 函数获取格式化后的字符串，而不是使用 Ref。

```js
import { formatTimeAgoIntl } from '@vueuse/core'

const timeAgoIntl = formatTimeAgoIntl(new Date(2021, 0, 1)) // 字符串
```

## 类型声明

```ts
type Locale = Intl.UnicodeBCP47LocaleIdentifier | Intl.Locale
export interface FormatTimeAgoIntlOptions {
  /**
   * 用于格式化的区域设置
   *
   * @default undefined
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#locales
   */
  locale?: Locale
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#options
   */
  relativeTimeFormatOptions?: Intl.RelativeTimeFormatOptions
  /**
   * 是否在各部分之间插入空格。
   *
   * 如果提供了 `joinParts`，则会忽略此选项。
   *
   * @default true
   */
  insertSpace?: boolean
  /**
   * 自定义函数，用于连接由 `Intl.RelativeTimeFormat.formatToParts` 返回的各部分。
   *
   * 如果提供，则会使用此函数，而不是默认的连接逻辑。
   */
  joinParts?: (
    parts: Intl.RelativeTimeFormatPart[],
    locale?: Intl.UnicodeBCP47LocaleIdentifier | Intl.Locale,
  ) => string
  /**
   * 自定义单位
   */
  units?: TimeAgoUnit[]
}
export interface UseTimeAgoIntlOptions<Controls extends boolean>
  extends FormatTimeAgoIntlOptions, ConfigurableScheduler {
  /**
   * 暴露更多控制项和原始的 `parts` 结果。
   *
   * @default false
   */
  controls?: Controls
  /**
   * 更新间隔（以毫秒为单位），设置为 0 可禁用自动更新
   *
   * @deprecated 请改用 `scheduler` 选项
   * @default 30_000
   */
  updateInterval?: number
}
type UseTimeAgoReturn<Controls extends boolean = false> = Controls extends true
  ? {
      timeAgoIntl: ComputedRef<string>
      parts: ComputedRef<Intl.RelativeTimeFormatPart[]>
    } & Pausable
  : ComputedRef<string>
export interface TimeAgoUnit {
  name: Intl.RelativeTimeFormatUnit
  ms: number
}
/**
 * `Intl.RelativeTimeFormat` 的响应式封装。
 */
export declare function useTimeAgoIntl(
  time: MaybeRefOrGetter<Date | number | string>,
  options?: UseTimeAgoIntlOptions<false>,
): UseTimeAgoReturn<false>
export declare function useTimeAgoIntl(
  time: MaybeRefOrGetter<Date | number | string>,
  options: UseTimeAgoIntlOptions<true>,
): UseTimeAgoReturn<true>
/**
 * useTimeAgoIntl 的非响应式版本
 */
export declare function formatTimeAgoIntl(
  from: Date,
  options?: FormatTimeAgoIntlOptions,
  now?: Date | number,
): string
/**
 * 将各部分格式化为字符串
 */
export declare function formatTimeAgoIntlParts(
  parts: Intl.RelativeTimeFormatPart[],
  options?: FormatTimeAgoIntlOptions,
): string
```
