---
category: Browser
---

# useWebNotification

响应式 [Notification](https://developer.mozilla.org/en-US/docs/Web/API/notification)

Notifications API 的 Web Notification 接口用于配置并向用户显示桌面通知。

## 用法

::: tip
在应用能够发送通知之前，用户必须授予该应用相应权限。用户的操作系统设置也可能会阻止预期的通知行为。
:::

```ts
import { useWebNotification } from '@vueuse/core'

const {
  isSupported,
  notification,
  permissionGranted,
  show,
  close,
  onClick,
  onShow,
  onError,
  onClose,
} = useWebNotification({
  title: 'Hello, VueUse world!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test',
})

if (isSupported.value && permissionGranted.value)
  show()
```

这个组合式函数也使用了来自 '@vueuse/shared` 的 createEventHook 工具：

```ts
import { useWebNotification } from '@vueuse/core'

const { onClick, onShow, onError, onClose, } = useWebNotification()
// ---cut---
onClick((evt: Event) => {
  // 对 notification 的 on:click 事件执行某些操作...
})

onShow((evt: Event) => {
  // 对 notification 的 on:show 事件执行某些操作...
})

onError((evt: Event) => {
  // 对 notification 的 on:error 事件执行某些操作...
})

onClose((evt: Event) => {
  // 对 notification 的 on:close 事件执行某些操作...
})
```

## 类型声明

```ts
export interface WebNotificationOptions {
  /**
   * Notification 接口的 title 只读属性表示
   * 通知的标题
   *
   * @default ''
   */
  title?: string
  /**
   * 构造函数 options 参数中指定的通知正文字符串。
   *
   * @default ''
   */
  body?: string
  /**
   * 构造函数 options 参数中指定的通知文本方向。
   *
   * @default ''
   */
  dir?: "auto" | "ltr" | "rtl"
  /**
   * 构造函数 options 参数中指定的通知语言代码。
   *
   * @default DOMString
   */
  lang?: string
  /**
   * 构造函数 options 参数中指定的通知 ID（如果有）。
   *
   * @default ''
   */
  tag?: string
  /**
   * 构造函数 options 参数中指定的用作通知图标的图片 URL。
   *
   * @default ''
   */
  icon?: string
  /**
   * 指定在新通知替换旧通知后是否应提醒用户。
   *
   * @default false
   */
  renotify?: boolean
  /**
   * 一个布尔值，表示通知应保持激活状态直到
   * 用户点击或将其关闭，而不是自动关闭。
   *
   * @default false
   */
  requireInteraction?: boolean
  /**
   * Notification 接口的 silent 只读属性指定
   * 通知是否应保持静默，即无论设备设置如何，
   * 都不应发出声音或振动。
   *
   * @default false
   */
  silent?: boolean
  /**
   * 为具备振动硬件的设备指定要发出的振动模式。
   * 振动模式，按 Vibration API 规范所定义
   *
   * @see https://w3c.github.io/vibration/
   */
  vibrate?: number[]
}
export interface UseWebNotificationOptions
  extends ConfigurableWindow, WebNotificationOptions {
  /**
   * 如果尚未授予权限，则在 onMounted 时请求权限。
   *
   * 也可以禁用此行为，并调用 `ensurePermissions` 之后再授予。
   *
   * @default true
   */
  requestPermissions?: boolean
}
export interface UseWebNotificationReturn extends Supportable {
  notification: ShallowRef<Notification | null>
  ensurePermissions: () => Promise<boolean | undefined>
  permissionGranted: ShallowRef<boolean>
  show: (
    overrides?: WebNotificationOptions,
  ) => Promise<Notification | undefined>
  close: () => void
  onClick: EventHookOn<Event>
  onShow: EventHookOn<Event>
  onError: EventHookOn<Event>
  onClose: EventHookOn<Event>
}
/**
 * 响应式 useWebNotification
 *
 * @see https://vueuse.org/useWebNotification
 * @see https://developer.mozilla.org/en-US/docs/Web/API/notification
 */
export declare function useWebNotification(
  options?: UseWebNotificationOptions,
): UseWebNotificationReturn
```
