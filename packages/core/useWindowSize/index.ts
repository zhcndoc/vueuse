import type { ConfigurableWindow } from '../_configurable'
import { tryOnMounted } from '@vueuse/shared'
import { shallowRef, watch } from 'vue'
import { defaultWindow } from '../_configurable'
import { useEventListener } from '../useEventListener'
import { useMediaQuery } from '../useMediaQuery'

export interface UseWindowSizeOptions extends ConfigurableWindow {
  initialWidth?: number
  initialHeight?: number
  /**
   * 监听窗口 `orientationchange` 事件
   *
   * @default true
   */
  listenOrientation?: boolean

  /**
   * 是否应将滚动条包含在宽度和高度中
   * 仅在 `type` 为 `'inner'` 时有效
   *
   * @default true
   */
  includeScrollbar?: boolean

  /**
   * Use `window.innerWidth` or `window.outerWidth` or `window.visualViewport`
   * visualViewport documentation from MDN(https://developer.mozilla.org/zh-CN/docs/Web/API/VisualViewport)
   * @default 'inner'
   */
  type?: 'inner' | 'outer' | 'visual'
}

/**
 * 响应式窗口大小。
 *
 * @see https://vueuse.org/useWindowSize
 * @param options
 */
export function useWindowSize(options: UseWindowSizeOptions = {}) {
  const {
    window = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true,
    type = 'inner',
  } = options

  const width = shallowRef(initialWidth)
  const height = shallowRef(initialHeight)

  const update = () => {
    if (window) {
      if (type === 'outer') {
        width.value = window.outerWidth
        height.value = window.outerHeight
      }
      else if (type === 'visual' && window.visualViewport) {
        const { width: visualViewportWidth, height: visualViewportHeight, scale } = window.visualViewport
        width.value = Math.round(visualViewportWidth * scale)
        height.value = Math.round(visualViewportHeight * scale)
      }
      else if (includeScrollbar) {
        width.value = window.innerWidth
        height.value = window.innerHeight
      }
      else {
        width.value = window.document.documentElement.clientWidth
        height.value = window.document.documentElement.clientHeight
      }
    }
  }

  update()
  tryOnMounted(update)

  const listenerOptions = { passive: true }
  useEventListener('resize', update, listenerOptions)

  if (window && type === 'visual' && window.visualViewport) {
    useEventListener(window.visualViewport, 'resize', update, listenerOptions)
  }

  if (listenOrientation) {
    const matches = useMediaQuery('(orientation: portrait)')
    watch(matches, () => update())
  }

  return { width, height }
}

export type UseWindowSizeReturn = ReturnType<typeof useWindowSize>
