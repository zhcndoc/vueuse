---
category: Browser
---

# useVibrate

响应式 [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)

大多数现代移动设备都包含振动硬件，这使得软件代码可以通过让设备震动来向用户提供物理反馈。

Vibration API 让 Web 应用能够访问这项硬件，
如果设备不支持，则不会执行任何操作。

## 用法

振动被描述为一组开关脉冲模式，其持续时间可以不同。

该模式可以是一个整数，表示振动的毫秒数；也可以是一个整数数组，描述
振动与暂停的模式。

```ts
import { useVibrate } from '@vueuse/core'

// 这会让设备振动 300 ms
// 然后暂停 100 ms，再让设备再次振动 300 ms：
const { vibrate, stop, isSupported } = useVibrate({ pattern: [300, 100, 300] })

// 开始振动，它会在模式完成时自动停止：
vibrate()

// 但如果你想停止它，可以这样：
stop()
```

## 类型声明

```ts
export interface UseVibrateOptions
  extends ConfigurableNavigator, ConfigurableScheduler {
  /**
   *
   * 振动模式
   *
   * 一个值数组描述设备振动与不振动的交替周期。数组中的每个值
   * 都会先转换为整数，然后交替解释为
   * 设备应振动的毫秒数，以及
   * 设备不应振动的毫秒数
   *
   * @default []
   *
   */
  pattern?: MaybeRefOrGetter<Arrayable<number>>
  /**
   * 以毫秒为单位，运行持续振动的间隔
   *
   * 传入 `0` 可禁用
   *
   * @deprecated 请改用 `scheduler` 选项
   * @default 0
   *
   */
  interval: number
}
export interface UseVibrateReturn extends Supportable {
  pattern: MaybeRefOrGetter<Arrayable<number>>
  intervalControls?: Pausable
  vibrate: (pattern?: Arrayable<number>) => void
  stop: () => void
}
/**
 * 响应式振动
 *
 * @see https://vueuse.org/useVibrate
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useVibrate(
  options?: UseVibrateOptions,
): UseVibrateReturn
```
