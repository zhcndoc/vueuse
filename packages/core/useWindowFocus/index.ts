import type { ShallowRef } from 'vue'
import type { ConfigurableWindow } from '../_configurable'
import { shallowRef } from 'vue'
import { defaultWindow } from '../_configurable'
import { useEventListener } from '../useEventListener'

/**
 * 使用 `window.onfocus` 和 `window.onblur` 响应式跟踪窗口焦点。
 *
 * @see https://vueuse.org/useWindowFocus
 *
 * @__NO_SIDE_EFFECTS__
 */
export function useWindowFocus(options: ConfigurableWindow = {}): ShallowRef<boolean> {
  const { window = defaultWindow } = options
  if (!window)
    return shallowRef(false)

  const focused = shallowRef(window.document.hasFocus())

  const listenerOptions = { passive: true }

  useEventListener(window, 'blur', () => {
    focused.value = false
  }, listenerOptions)

  useEventListener(window, 'focus', () => {
    focused.value = true
  }, listenerOptions)

  return focused
}
