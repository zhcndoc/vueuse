/* this implementation is original ported from https://github.com/logaretm/vue-use-web by Abdelrahman Awad */

import type { ComputedRef, Ref, ShallowRef } from 'vue'
import type { ConfigurableNavigator } from '../_configurable'
import { computed, ref as deepRef, shallowRef } from 'vue'
import { defaultNavigator } from '../_configurable'
import { useEventListener } from '../useEventListener'
import { usePermission } from '../usePermission'
import { useSupported } from '../useSupported'

export interface UseDevicesListOptions extends ConfigurableNavigator {
  onUpdated?: (devices: MediaDeviceInfo[]) => void
  /**
   * 如果权限未授予，则立即请求权限，否则标签和设备 ID 可能为空
   *
   * @default false
   */
  requestPermissions?: boolean
  /**
   * 请求媒体权限类型
   *
   * @default { audio: true, video: true }
   */
  constraints?: MediaStreamConstraints
}

export interface UseDevicesListReturn {
  /**
   * 所有设备
   */
  devices: Ref<MediaDeviceInfo[]>
  videoInputs: ComputedRef<MediaDeviceInfo[]>
  audioInputs: ComputedRef<MediaDeviceInfo[]>
  audioOutputs: ComputedRef<MediaDeviceInfo[]>
  permissionGranted: ShallowRef<boolean>
  ensurePermissions: () => Promise<boolean>
  isSupported: ComputedRef<boolean>
}

/**
 * 响应式 `enumerateDevices` 列出可用的输入/输出设备
 *
 * @see https://vueuse.org/useDevicesList
 * @param options
 */
export function useDevicesList(options: UseDevicesListOptions = {}): UseDevicesListReturn {
  const {
    navigator = defaultNavigator,
    requestPermissions = false,
    constraints = { audio: true, video: true },
    onUpdated,
  } = options

  const devices = deepRef([]) as Ref<MediaDeviceInfo[]>
  const videoInputs = computed(() => devices.value.filter(i => i.kind === 'videoinput'))
  const audioInputs = computed(() => devices.value.filter(i => i.kind === 'audioinput'))
  const audioOutputs = computed(() => devices.value.filter(i => i.kind === 'audiooutput'))
  const isSupported = useSupported(() => navigator && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
  const permissionGranted = shallowRef(false)
  let stream: MediaStream | null

  async function update() {
    if (!isSupported.value)
      return

    devices.value = await navigator!.mediaDevices.enumerateDevices()
    onUpdated?.(devices.value)
    if (stream) {
      stream.getTracks().forEach(t => t.stop())
      stream = null
    }
  }

  async function ensurePermissions() {
    const deviceName = constraints.video ? 'camera' : 'microphone'

    if (!isSupported.value)
      return false

    if (permissionGranted.value)
      return true

    const { state, query } = usePermission(deviceName, { controls: true })
    await query()
    if (state.value !== 'granted') {
      let granted = true
      try {
        const allDevices = await navigator!.mediaDevices.enumerateDevices()
        const hasCamera = allDevices.some(device => device.kind === 'videoinput')
        const hasMicrophone = allDevices.some(device => device.kind === 'audioinput' || device.kind === 'audiooutput')
        constraints.video = hasCamera ? constraints.video : false
        constraints.audio = hasMicrophone ? constraints.audio : false
        stream = await navigator!.mediaDevices.getUserMedia(constraints)
      }
      catch {
        stream = null
        granted = false
      }
      update()
      permissionGranted.value = granted
    }
    else {
      permissionGranted.value = true
    }

    return permissionGranted.value
  }

  if (isSupported.value) {
    if (requestPermissions)
      ensurePermissions()

    useEventListener(navigator!.mediaDevices, 'devicechange', update, { passive: true })
    update()
  }

  return {
    devices,
    ensurePermissions,
    permissionGranted,
    videoInputs,
    audioInputs,
    audioOutputs,
    isSupported,
  }
}
