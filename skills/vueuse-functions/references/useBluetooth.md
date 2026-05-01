---
category: Browser
---

# useBluetooth

响应式 [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)。提供连接并与低功耗蓝牙外设交互的能力。

Web Bluetooth API 允许网站使用通用属性规范（GATT）通过 Bluetooth 4 无线标准发现设备并与之通信。

N.B. 它目前在 Android M、Chrome OS、Mac 和 Windows 10 上有部分实现。有关浏览器兼容性的完整概览，请参阅 [Web Bluetooth API 浏览器兼容性](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API#browser_compatibility)

N.B. Web Bluetooth API 规范有许多需要注意的限制。有关设备检测和连接方面的诸多限制，请参阅 [Web Bluetooth W3C Draft Report](https://webbluetoothcg.github.io/web-bluetooth/)。

N.B. 该 API 在 Web Workers 中不可用（不会通过 WorkerNavigator 暴露）。

## 用法 默认

```vue
<script setup lang="ts">
import { useBluetooth } from '@vueuse/core'

const {
  isSupported,
  isConnected,
  device,
  requestDevice,
  server,
  error,
} = useBluetooth({
  acceptAllDevices: true,
})
</script>

<template>
  <button @click="requestDevice()">
    请求蓝牙设备
  </button>
  <div v-if="error">
    错误：{{ error }}
  </div>
</template>
```

### 返回值

| 属性            | 类型                            | 描述                           |
| --------------- | ------------------------------- | ------------------------------ |
| `isSupported`   | `ComputedRef<boolean>`          | Web Bluetooth API 是否受支持   |
| `isConnected`   | `Ref<boolean>`                  | 设备当前是否已连接             |
| `device`        | `Ref<BluetoothDevice>`          | 已连接的蓝牙设备               |
| `server`        | `Ref<BluetoothRemoteGATTServer>` | 已连接设备的 GATT 服务器       |
| `error`         | `Ref<unknown>`                  | 连接过程中发生的任何错误       |
| `requestDevice` | `() => Promise<void>`           | 请求蓝牙设备的函数             |

当设备已配对并连接后，你就可以按需使用 server 对象进行操作。

## 用法 电池电量示例

此示例演示了如何使用 Web Bluetooth API 读取电池电量，并在附近广播电池信息的蓝牙低功耗设备发生变化时接收通知。

这里我们使用 characteristicvaluechanged 事件监听器来处理电池电量特征值的读取。该事件监听器也会可选地处理后续的通知。

```vue
<script setup lang="ts">
import { useBluetooth, useEventListener, watchPausable } from '@vueuse/core'

const {
  isSupported,
  isConnected,
  device,
  requestDevice,
  server,
} = useBluetooth({
  acceptAllDevices: true,
  optionalServices: [
    'battery_service',
  ],
})

const batteryPercent = ref<undefined | number>()

const isGettingBatteryLevels = ref(false)

async function getBatteryLevels() {
  isGettingBatteryLevels.value = true

  // 获取电池服务：
  const batteryService = await server.getPrimaryService('battery_service')

  // 获取当前电池电量
  const batteryLevelCharacteristic = await batteryService.getCharacteristic(
    'battery_level',
  )

  // 监听 `characteristicvaluechanged` 事件中特征值的变化：
  useEventListener(batteryLevelCharacteristic, 'characteristicvaluechanged', (event) => {
    batteryPercent.value = event.target.value.getUint8(0)
  }, { passive: true })

  // 将接收到的缓冲区转换为数字：
  const batteryLevel = await batteryLevelCharacteristic.readValue()

  batteryPercent.value = await batteryLevel.getUint8(0)
}

const { stop } = watchPausable(isConnected, (newIsConnected) => {
  if (!newIsConnected || !server.value || isGettingBatteryLevels.value)
    return
  // 尝试获取设备的电池电量：
  getBatteryLevels()
  // 我们只希望在初次连接时运行此操作，因为后续更新将使用事件监听器处理：
  stop()
})
</script>

<template>
  <button @click="requestDevice()">
    请求蓝牙设备
  </button>
</template>
```

更多示例可见 [Google Chrome 的 Web Bluetooth 示例](https://googlechrome.github.io/samples/web-bluetooth/)。

## 类型声明

```ts
export interface UseBluetoothRequestDeviceOptions {
  /**
   *
   * BluetoothScanFilters 的数组。此过滤器由 BluetoothServiceUUIDs
   * 的数组、name 参数以及 namePrefix 参数组成。
   *
   */
  filters?: BluetoothLEScanFilter[] | undefined
  /**
   *
   * BluetoothServiceUUIDs 的数组。
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService/uuid
   *
   */
  optionalServices?: BluetoothServiceUUID[] | undefined
}
export interface UseBluetoothOptions
  extends UseBluetoothRequestDeviceOptions, ConfigurableNavigator {
  /**
   *
   * 一个布尔值，表示请求脚本可以接受所有 Bluetooth
   * 设备。默认值为 false。
   *
   * !! 这可能会导致一堆无关设备显示在
   * 选择器中，并且由于没有过滤器而浪费电量。
   *
   *
   * 请谨慎使用。
   *
   * @default false
   *
   */
  acceptAllDevices?: boolean
}
export declare function useBluetooth(
  options?: UseBluetoothOptions,
): UseBluetoothReturn
export interface UseBluetoothReturn extends Supportable {
  isConnected: Readonly<ShallowRef<boolean>>
  device: ShallowRef<BluetoothDevice | undefined>
  requestDevice: () => Promise<void>
  server: ShallowRef<BluetoothRemoteGATTServer | undefined>
  error: ShallowRef<unknown | null>
}
```
