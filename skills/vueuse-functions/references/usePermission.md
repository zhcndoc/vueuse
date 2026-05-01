---
category: Browser
---

# usePermission

响应式 [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API)。Permissions API 提供了相关工具，使开发者能够在权限方面实现更好的用户体验。

## 用法

```ts
import { usePermission } from '@vueuse/core'

const microphoneAccess = usePermission('microphone')
```

## 类型声明

```ts
type DescriptorNamePolyfill =
  | "accelerometer"
  | "accessibility-events"
  | "ambient-light-sensor"
  | "background-sync"
  | "camera"
  | "clipboard-read"
  | "clipboard-write"
  | "gyroscope"
  | "magnetometer"
  | "microphone"
  | "notifications"
  | "payment-handler"
  | "persistent-storage"
  | "push"
  | "speaker"
  | "local-fonts"
export type GeneralPermissionDescriptor =
  | PermissionDescriptor
  | {
      name: DescriptorNamePolyfill
    }
export interface UsePermissionOptions<
  Controls extends boolean,
> extends ConfigurableNavigator {
  /**
   * 暴露更多控制项
   *
   * @default false
   */
  controls?: Controls
}
export type UsePermissionReturn = Readonly<
  ShallowRef<PermissionState | undefined>
>
export interface UsePermissionReturnWithControls extends Supportable {
  state: UsePermissionReturn
  query: () => Promise<PermissionStatus | undefined>
}
/**
 * 响应式 Permissions API。
 *
 * @see https://vueuse.org/usePermission
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function usePermission(
  permissionDesc:
    | GeneralPermissionDescriptor
    | GeneralPermissionDescriptor["name"],
  options?: UsePermissionOptions<false>,
): UsePermissionReturn
export declare function usePermission(
  permissionDesc:
    | GeneralPermissionDescriptor
    | GeneralPermissionDescriptor["name"],
  options: UsePermissionOptions<true>,
): UsePermissionReturnWithControls
```
