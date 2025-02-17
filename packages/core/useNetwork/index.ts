/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */

import type { ComputedRef, ShallowRef } from 'vue'
import type { ConfigurableWindow } from '../_configurable'
import { readonly, shallowRef } from 'vue'
import { defaultWindow } from '../_configurable'
import { useEventListener } from '../useEventListener'
import { useSupported } from '../useSupported'

export type NetworkType = 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown'

export type NetworkEffectiveType = 'slow-2g' | '2g' | '3g' | '4g' | undefined

export interface NetworkState {
  isSupported: ComputedRef<boolean>
  /**
   * 用户当前是否连接到网络。
   */
  isOnline: Readonly<ShallowRef<boolean>>
  /**
   * 用户上次连接到网络的时间。
   */
  offlineAt: Readonly<ShallowRef<number | undefined>>
  /**
   * 在此时间点，如果用户处于离线状态并重新连接。
   */
  onlineAt: Readonly<ShallowRef<number | undefined>>
  /**
   * 下载速度，以 Mbps 为单位。
   */
  downlink: Readonly<ShallowRef<number | undefined>>
  /**
   * 可达到的最大下载速度，以 Mbps 为单位。
   */
  downlinkMax: Readonly<ShallowRef<number | undefined>>
  /**
   * 检测到的有效速度类型。
   */
  effectiveType: Readonly<ShallowRef<NetworkEffectiveType | undefined>>
  /**
   * 当前连接的预估往返时间。
   */
  rtt: Readonly<ShallowRef<number | undefined>>
  /**
   * 用户是否启用了数据节省模式。
   */
  saveData: Readonly<ShallowRef<boolean | undefined>>
  /**
   * 检测到的 connection/network 类型。
   */
  type: Readonly<ShallowRef<NetworkType>>
}

/**
 * 响应式网络状态。
 *
 * @see https://vueuse.org/useNetwork
 * @param options
 */
export function useNetwork(options: ConfigurableWindow = {}): Readonly<NetworkState> {
  const { window = defaultWindow } = options
  const navigator = window?.navigator
  const isSupported = useSupported(() => navigator && 'connection' in navigator)

  const isOnline = shallowRef(true)
  const saveData = shallowRef(false)
  const offlineAt = shallowRef<number | undefined>(undefined)
  const onlineAt = shallowRef<number | undefined>(undefined)
  const downlink = shallowRef<number | undefined>(undefined)
  const downlinkMax = shallowRef<number | undefined>(undefined)
  const rtt = shallowRef<number | undefined>(undefined)
  const effectiveType = shallowRef<NetworkEffectiveType>(undefined)
  const type = shallowRef<NetworkType>('unknown')

  const connection = isSupported.value && (navigator as any).connection

  function updateNetworkInformation() {
    if (!navigator)
      return

    isOnline.value = navigator.onLine
    offlineAt.value = isOnline.value ? undefined : Date.now()
    onlineAt.value = isOnline.value ? Date.now() : undefined

    if (connection) {
      downlink.value = connection.downlink
      downlinkMax.value = connection.downlinkMax
      effectiveType.value = connection.effectiveType
      rtt.value = connection.rtt
      saveData.value = connection.saveData
      type.value = connection.type
    }
  }

  const listenerOptions = { passive: true }

  if (window) {
    useEventListener(window, 'offline', () => {
      isOnline.value = false
      offlineAt.value = Date.now()
    }, listenerOptions)

    useEventListener(window, 'online', () => {
      isOnline.value = true
      onlineAt.value = Date.now()
    }, listenerOptions)
  }

  if (connection)
    useEventListener(connection, 'change', updateNetworkInformation, listenerOptions)

  updateNetworkInformation()

  return {
    isSupported,
    isOnline: readonly(isOnline),
    saveData: readonly(saveData),
    offlineAt: readonly(offlineAt),
    onlineAt: readonly(onlineAt),
    downlink: readonly(downlink),
    downlinkMax: readonly(downlinkMax),
    effectiveType: readonly(effectiveType),
    rtt: readonly(rtt),
    type: readonly(type),
  }
}

export type UseNetworkReturn = ReturnType<typeof useNetwork>
