import type { ComputedRef, Ref, ShallowRef } from 'vue'
import type { ConfigurableNavigator } from '../_configurable'
import { tryOnMounted, tryOnScopeDispose } from '@vueuse/shared'
import { readonly, shallowRef, watch } from 'vue'

import { defaultNavigator } from '../_configurable'
import { useEventListener } from '../useEventListener'
import { useSupported } from '../useSupported'

export interface UseBluetoothRequestDeviceOptions {
  /**
   *
   * BluetoothScanFilters 的数组。
   * 此过滤器由 BluetoothServiceUUIDs 数组、名称参数和名称前缀参数组成。
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

export interface UseBluetoothOptions extends UseBluetoothRequestDeviceOptions, ConfigurableNavigator {
  /**
   *
   * 一个布尔值，指示请求脚本是否可以接受所有蓝牙设备。
   * 默认值为 false。
   *
   * !! 这可能导致选择器中显示大量无关的设备，
   * 并因为没有过滤器而浪费能量。
   *
   *
   * 使用时要谨慎。
   *
   * @default false
   *
   */
  acceptAllDevices?: boolean
}

export function useBluetooth(options?: UseBluetoothOptions): UseBluetoothReturn {
  let {
    acceptAllDevices = false,
  } = options || {}

  const {
    filters = undefined,
    optionalServices = undefined,
    navigator = defaultNavigator,
  } = options || {}

  const isSupported = useSupported(() => navigator && 'bluetooth' in navigator)

  const device = shallowRef<undefined | BluetoothDevice>()

  const error = shallowRef<unknown | null>(null)

  watch(device, () => {
    connectToBluetoothGATTServer()
  })

  async function requestDevice(): Promise<void> {
    // This is the function can only be called if Bluetooth API is supported:
    if (!isSupported.value)
      return

    // Reset any errors we currently have:
    error.value = null

    // If filters specified, we need to ensure we  don't accept all devices:
    if (filters && filters.length > 0)
      acceptAllDevices = false

    try {
      device.value = await navigator?.bluetooth.requestDevice({
        acceptAllDevices,
        filters,
        optionalServices,
      })
    }
    catch (err) {
      error.value = err
    }
  }

  const server = shallowRef<undefined | BluetoothRemoteGATTServer>()
  const isConnected = shallowRef(false)

  function reset() {
    isConnected.value = false
    device.value = undefined
    server.value = undefined
  }

  async function connectToBluetoothGATTServer() {
    // Reset any errors we currently have:
    error.value = null

    if (device.value && device.value.gatt) {
      // Add reset fn to gattserverdisconnected event:
      useEventListener(device, 'gattserverdisconnected', reset, { passive: true })

      try {
        // Connect to the device:
        server.value = await device.value.gatt.connect()
        isConnected.value = server.value.connected
      }
      catch (err) {
        error.value = err
      }
    }
  }

  tryOnMounted(() => {
    if (device.value)
      device.value.gatt?.connect()
  })

  tryOnScopeDispose(() => {
    if (device.value)
      device.value.gatt?.disconnect()
  })

  return {
    isSupported,
    isConnected: readonly(isConnected),
    // Device:
    device,
    requestDevice,
    // Server:
    server,
    // Errors:
    error,
  }
}

export interface UseBluetoothReturn {
  isSupported: ComputedRef<boolean>
  isConnected: Readonly<Ref<boolean>>
  device: Ref<BluetoothDevice | undefined>
  requestDevice: () => Promise<void>
  server: ShallowRef<BluetoothRemoteGATTServer | undefined>
  error: Ref<unknown | null>
}
