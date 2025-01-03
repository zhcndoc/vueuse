import type { ConfigurableWindow } from '../_configurable'
import { tryOnScopeDispose } from '@vueuse/shared'
import { ref } from 'vue'
import { defaultWindow } from '../_configurable'

/**
 * 响应式跟踪 `window.devicePixelRatio`.
 *
 * @see https://vueuse.org/useDevicePixelRatio
 */
export function useDevicePixelRatio(options: ConfigurableWindow = {}) {
  const {
    window = defaultWindow,
  } = options

  const pixelRatio = ref(1)

  if (window) {
    let media: MediaQueryList
    function observe() {
      pixelRatio.value = window!.devicePixelRatio
      cleanup()
      media = window!.matchMedia(`(resolution: ${pixelRatio.value}dppx)`)
      media.addEventListener('change', observe, { once: true })
    }
    function cleanup() {
      media?.removeEventListener('change', observe)
    }

    observe()
    tryOnScopeDispose(cleanup)
  }

  return { pixelRatio }
}

export type UseDevicePixelRatioReturn = ReturnType<typeof useDevicePixelRatio>
